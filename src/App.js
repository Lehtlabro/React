import React from 'react';
import ResultsTable from './components/resultsTable';
import LeaderBoard from './components/leaderBoard';
import AddPlayerForm from './components/addPlayerForm';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [{
        playerName: 'Kristjan',
        id: 1,
        games: [

          null,

          {
            opponentId: 2,
            results: [{ p1: 11, p2: 4 }, { p1: 11, p2: 5 }, { p1: 10, p2: 11 }]
          },
          {
            opponentId: 3,
            results: [{ p1: 7, p2: 5 }, { p1: 7, p2: 8 }, { p1: 8, p2: 9 }]
          }
        ]
      },

      {
        playerName: 'Peeter',
        id: 2,
        games: [
          {
            opponentId: 1,
            results: [{ p1: 7, p2: 5 }, { p1: 7, p2: 8 }, { p1: 8, p2: 9 }]
          },

          null,

          {
            opponentId: 3,
            results: [{ p1: 7, p2: 5 }, { p1: 7, p2: 8 }, { p1: 8, p2: 9 }]
          }
        ],
      },
      {
        playerName: 'Kalev',
        id: 3,
        games: [

          {
            opponentId: 1,
            results: [{ p1: 7, p2: 5 }, { p1: 7, p2: 8 }, { p1: 8, p2: 9 }]
          },
          {
            opponentId: 2,
            results: [{ p1: 7, p2: 5 }, { p1: 7, p2: 8 }, { p1: 8, p2: 9 }]
          },

          null,



        ]
      }]
    };
  }


  addNewPlayer = (newPlayerName) => {
    let generateNewPlayerGames = () => this.state.userData.map(game => {return { opponentId: game.id, results: new Array(3).fill({p1: 0, p2: 0})}})
    let generateId = () => {return this.state.userData.length + 1}
    let generateNewGameForplayer = this.state.userData.map(userData => {
    userData.games.push({opponentId: generateId(), results: new Array(3).fill({p1: 0, p2: 0})})
    return userData
    })
    let userDataWithNewPlayer = generateNewGameForplayer.concat(({ playerName: newPlayerName, id: generateId(), games: generateNewPlayerGames().concat(null)}) )
    let newState = {userData: userDataWithNewPlayer}
    this.setState((prevState)  => ({...prevState, userData: newState.userData
    }));

}




  render() {
    console.log(this.state)
    return (
      <div className="appContainer">
        <LeaderBoard userData={this.state.userData} />
        <ResultsTable userData={this.state.userData} />
        <AddPlayerForm addNewPlayer={this.addNewPlayer} />
      </div>
    );
  }





}

export default App
