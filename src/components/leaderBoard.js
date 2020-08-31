import React from 'react';
function calculateResult(userData) {
    let playerScore = (games, player) => {
        let totalScore = 0;
        games.map((result) => {
            return (
                (result) === null ? null : result.results.map((result) => {
                    return (totalScore = totalScore + result[player]);
                })

            );
        });
        return totalScore;
    };
    let resultsUnsorted = [userData.map(player => {
        let totalScore = playerScore(player.games, 'p1')
        let opponentScore = playerScore(player.games, 'p2')
        let points = player.games.map(result => {
            let counter = 0
            if (result != null) {
                let wins = (
                    result.results.map(score => {
                        let winner = 0
                        if (score.p1 > score.p2) { return winner + 1 }
                        return winner
                    }).reduce((a, b) => a + b))
                return (counter + wins)
            }
            return counter
        }).reduce((a, b) => a + b)
        let games = (player.games.length - 1)

        return [player.playerName, totalScore, opponentScore, points, games, player.id]
    })];
    return (
        resultsUnsorted.sort((a, b) => { return a[4] - b[4]; })
    );
}

function LeaderBoard(props) {
    const { userData } = props;
    console.log(userData)

    const results = calculateResult(userData);
    console.log(results)

    return (
        <table className="leaderBoard" border="1">
            <thead>
                <tr>
                    <th key="Tablename">
                        <h1>Leaderboard</h1>
                    </th>
                </tr>
                <tr>
                    <th key="Name">Nimi</th>
                    <th key="Score">Player : Opponents</th>
                    <th key="Points">Points</th>
                    <th key="Games">Games</th>

                </tr>
            </thead>
            <tbody>
                {results.map(player => {
                    return (
                        player.map(data => {
                            return (
                                <tr key={`player:${data[5]}`}>
                                    <td key={`name:${data[5]}`}>{data[0]}</td>
                                    <td key={`score:${data[5]}`}>{` ${data[1]} : ${data[2]} `}</td>
                                    <td key={`points:${data[5]}`} >{data[3]}</td>
                                    <td key={`games:${data[5]}`}>{data[4]}</td>
                                </tr>
                            )
                        }))
                })}
            </tbody>
        </table>
    );
}


export default LeaderBoard