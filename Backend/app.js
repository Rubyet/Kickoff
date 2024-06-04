const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 

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

    let matches = generateCombinations(players);

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

app.get('/random/:id', (req, res) => {
    const response = [];
    const NameOfPlayers = ["Person 1", "Person 2", "Person 3"];
    const ImageOfPlayers = ["https://admin.kickoff.rubyet.info/public/images/players/ronaldo.png", "https://admin.kickoff.rubyet.info/images/players/messi.png", "https://admin.kickoff.rubyet.info/images/players/neimar.png"];

    const TeamNames = ["Accrington Stanley", "Arsenal", "Everton F.C.", "Blackpool F.C.", "Brentford F.C.", "Sunderland A.F.C.", "Blackpool F.C.", "Brentford F.C.", "Sunderland A.F.C."];
    const TeamLogos = ["https://fifafixture.rubyet.info/img/teams_logo/1.webp", "https://fifafixture.rubyet.info/img/teams_logo/2.webp", "https://fifafixture.rubyet.info/img/teams_logo/3.webp", "https://fifafixture.rubyet.info/img/teams_logo/4.webp", "https://fifafixture.rubyet.info/img/teams_logo/5.webp", "https://fifafixture.rubyet.info/img/teams_logo/6.webp", "https://fifafixture.rubyet.info/img/teams_logo/7.webp", "https://fifafixture.rubyet.info/img/teams_logo/8.webp", "https://fifafixture.rubyet.info/img/teams_logo/9.webp"];
    console.log(req.params.id);
    
    if (req.params.id == 2) {
        const NoOfPlayers = 3;
        const TeamsPerPlayer = 2;
        const TeamIndexes = [1, 2, 3, 4, 5, 6];
        assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, TeamIndexes);
    }
    else if (req.params.id == 3) {
        const NoOfPlayers = 3;
        const TeamsPerPlayer = 3;
        const TeamIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, TeamIndexes);
    } else {
        res.json(response);
    }


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, TeamIndexes) {
        console.log(NoOfPlayers);
        console.log(TeamsPerPlayer);
        console.log(TeamIndexes);
        if (NoOfPlayers * TeamsPerPlayer > TeamIndexes.length) {
            throw new Error("Not enough teams for each player to have the specified number of teams.");
        }

        shuffle(TeamIndexes);

        for (let i = 0; i < NoOfPlayers; i++) {
            const player = {};
            player.playerName = NameOfPlayers[i]; 
            player.playerImage = ImageOfPlayers[i];
            player.teams = [];
            for (let j = 0; j < TeamsPerPlayer; j++) {
                // Retrieve the team information based on randomTeams[j]
                const teamIndex = TeamIndexes[i * TeamsPerPlayer + j];
                player.teams.push({
                    team: TeamNames[teamIndex - 1],
                    logo: TeamLogos[teamIndex - 1]
                });
            }
            response.push(player); 
        }
    }




    // console.log(TeamIndexes);
    // console.log(response);
    res.json(response);
});
// app.get('/random', (req, res) => {
//     NameOfPlayers = ["P1", "P2", "P3"];
//     ImageOfPlayers = ["P1", "P2", "P3"];
//     NoOfPlayers = 3;
//     TeamsPerPlayer = 2;
//     teams = [1, 2, 3, 4, 5, 6]
//     TeamNames = ["Team-1", "Team-2", "Team-3", "Team-4", "Team-5", "Team-6"]
//     TeamLogos = ["Team-1 Logo", "Team-2 Logo", "Team-3 Logo", "Team-4 Logo", "Team-5 Logo", "Team-6 Logo"]
//     PlayersArray = [];
//     PlayersJson = {};
//     random = 1

//     // NameOfPlayers = ["P1","P2","P3"];
//     // NoOfPlayers = 3;
//     // TeamsPerPlayer = 1;
//     // teams = [1,2,3]
//     // TeamNames = ["Team-1","Team-2","Team-3"]
//     // PlayersArray = [];
//     // PlayersJson = {};
//     // random = 1

//     function shuffle(array) {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//     }

//     function assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, teams) {
//         if (NoOfPlayers * TeamsPerPlayer > teams.length) {
//             throw new Error("Not enough teams for each player to have the specified number of teams.");
//         }

//         if (random === 1) {
//             shuffle(teams);
//         }

//         for (let i = 0; i < NoOfPlayers; i++) {
//             let playerTeams = [];
//             for (let j = i * TeamsPerPlayer; j < (i + 1) * TeamsPerPlayer; j++) {
//                 playerTeams.push(TeamNames[teams[j] - 1]); // Adjust index since teams are 1-indexed
//             }
//             PlayersJson[NameOfPlayers[i]] = playerTeams;
//         }

//         for (let i = 0; i < NoOfPlayers; i++) {
//             PlayersArray.push(teams.slice(i * TeamsPerPlayer, (i + 1) * TeamsPerPlayer));
//         }
//     }

//     assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, teams)

//     console.log(PlayersArray);
//     console.log(PlayersJson);

//     res.send(PlayersJson);
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
