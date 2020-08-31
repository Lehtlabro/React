import React from 'react';

function ResultsTable (props) {
    const { userData } = props;

    return (
    <table className="resultsTable" border="1">
            <thead>
                <tr key="resultstable">
                    <th>
                <h1>Results</h1>
                </th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td key="#"></td>
                {userData.map(player => (
                    <td key={`${player.id}`}>{player.playerName}</td>
                ))}
            </tr>
            {userData.map(player => {
                return (
                    <tr key={`player: ${player.id}`}>
                        <td key={`playername: ${player.id}`}>
                            {player.playerName}
                        </td>
                        {player.games.map((results) => {
                            return (
                                (results) === null ? <td key ="empty"></td>
                                    :
                                    <td key={`opponentid:${results.opponentId}`}>
                                        {results.results.map(result => ` ${result.p1}:${result.p2} `)}
                                    </td>
                            );
                        })}
                    </tr>
                );
            })}

        </tbody>
    </table>
    );
}


export default ResultsTable
