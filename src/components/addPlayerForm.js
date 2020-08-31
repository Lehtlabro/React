import React from 'react';
class AddPlayerForm extends React.Component{
constructor(props){
    super(props)
    this.state ={
        newPlayer: ''
    };
}

handleinput = event => {
    event.preventDefault();
    let name = event.target.value;
    this.setState({newPlayer: name})
}


render(){
    console.log(this.state)
return (
    <>
        <p> Enter new player name: </p>
        <input type="text" onChange={(e) => this.handleinput(e)} />
        <button onClick={() => this.props.addNewPlayer(this.state.newPlayer)}>Submit</button>
    </>
)


}
}



export default AddPlayerForm