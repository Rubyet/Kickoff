const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! Done yo');
    x = 3;
    y = 2;

    let players = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8]
    ];
    let players2 = [
        [1],
        [3],
        [5],
        [7]
    ];

    let matches  = generateCombinations(players2);

    function generateCombinations(pairs) {
        let combinations = [];
    
        for (let i = 0; i < pairs.length; i++) {
            for (let j = i + 1; j < pairs.length; j++) {
                for (let x of pairs[i]) {
                    for (let y of pairs[j]) {
                        combinations.push([x, y]);
                    }
                }
            }
        }
    
        return combinations; 
    }

    function getUniqueTeams(pairs) {
        let uniqueNumbers = new Set();
        
        for (let pair of pairs) {
            uniqueNumbers.add(pair[0]);
            uniqueNumbers.add(pair[1]);
        }
        
        return Array.from(uniqueNumbers);
    }
    console.log(matches);

    let teams = getUniqueTeams(matches);

    console.log(teams);
});

app.get('/random', (req, res) => {
    NoOfPlayers = 3;
    TeamsPerPlayer = 2;
    teams = [1,2,3,4,5,6]
    random = 1
    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    function assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, teams) {
        if (NoOfPlayers * TeamsPerPlayer > teams.length) {
            throw new Error("Not enough teams for each player to have the specified number of teams.");
        }
    
        if (random === 1) {
            shuffle(teams);
        }
    
        let players = [];
        for (let i = 0; i < NoOfPlayers; i++) {
            players.push(teams.slice(i * TeamsPerPlayer, (i + 1) * TeamsPerPlayer));
        }
    
        return players;
    }

    player = assignTeamsToPlayers(NoOfPlayers,TeamsPerPlayer,teams )

    console.log(player);
    res.send(player);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});