import React from 'react';

    const userData = [
        {
            playerName: 'Kristjan',
            id: 1,
            games: [

                null,

                {
                    opponentId: 2,
                    results: [{p1: 11, p2:4}, {p1:11, p2:5}, {p1: 10, p2: 11}]
                },
                {
                    opponentId: 3,
                    results: [{p1: 7, p2:5}, {p1:7, p2:8}, {p1: 8, p2: 9}]
                }
            ]
            },

        {
            playerName: 'Peeter',
            id: 2,
            games: [
                {
                    opponentId: 1,
                    results: [{p1: 7, p2:5}, {p1:7, p2:8}, {p1: 8, p2: 9}]
                },

                null,

                {
                    opponentId: 3,
                    results: [{p1: 7, p2:5}, {p1:7, p2:8}, {p1: 8, p2: 9}]
                }
            ],
        },
        {
            playerName: 'Kalev',
            id: 3,
            games: [
                {
                    opponentId: 1,
                    results: [{p1: 7, p2:5}, {p1:7, p2:8}, {p1: 8, p2: 9}]
                },
                {
                    opponentId: 2,
                    results: [{p1: 7, p2:5}, {p1:7, p2:8}, {p1: 8, p2: 9}]
                },

                null,

            ]
        },
    ]

const Adduser = ( ) => {
    new userData ( )
    return userData
}


export default userData

