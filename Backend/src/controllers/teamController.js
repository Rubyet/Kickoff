const db = require('../config/db-connection');
var response = [];
var TeamIndexes = [];
exports.getRandomTeams = (req, res) => {
    (async () => {
        try {
            const game = await db.query('SELECT * FROM games where id = ?', req.params.id);

            const playerIdsString = game[0].players;
            const playerIds = JSON.parse(playerIdsString);
            const playerIdsStr = playerIds.join(',');

            const players = await db.query(
                `SELECT 
                    *, 
                    CONCAT(?, image) AS image, 
                    CASE 
                        WHEN avatar IS NOT NULL AND avatar != '' THEN CONCAT(?, avatar) 
                        ELSE '' 
                    END AS avatar 
                 FROM players 
                 WHERE id IN (${playerIdsStr})`,
                [global.playersLocation, global.playersLocation]
            );

            NoOfPlayers = game[0].no_of_players;
            TeamsPerPlayer = game[0].no_of_teams_per_players;

            TeamIndexes = JSON.parse(game[0].teams);
            const teamIdsStr = TeamIndexes.join(',');
            const Teams = await db.query(`SELECT *, CONCAT(?, logo) AS logo FROM fifa_teams WHERE id IN (${teamIdsStr})`, [global.logoLocation]);

            assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, TeamIndexes, players, Teams);

            res.json(response);
        } catch (error) {
            console.error('Error:', error);
        }
    })();
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, TeamIndexes, players, Teams) {
    response = [];
    if (NoOfPlayers * TeamsPerPlayer > TeamIndexes.length) {
        throw new Error("Not enough teams for each player to have the specified number of teams.");
    }

    shuffle(TeamIndexes);

    for (let i = 0; i < NoOfPlayers; i++) {
        const player = {};
        player.playerId = players[i].id;
        player.playerName = players[i].name;
        player.playerImage = players[i].image;
        player.playerAvatar = players[i].avatar;
        player.playerLevel = 5;
        player.playerGoals = 15;
        player.playerTotalMatch = 8;
        player.playerTotalWin = 5;
        player.playerTotalLose = 3;
        player.playerTotalDraw = 2;
        player.teams = [];
        for (let j = 0; j < TeamsPerPlayer; j++) {
            // Retrieve the team information based on randomTeams[j]
            const teamIndex = TeamIndexes[i * TeamsPerPlayer + j];

            const team = Teams.find(t => t.id === teamIndex);
            if (team) {
                player.teams.push(team);
            } else {
                console.error(`Team with id ${teamIndex} not found`);
            }
        }
        response.push(player);
    }
}

// CRUD Operations for fifa_teams

// Create a new team
exports.createTeam = (req, res) => {
    const { name, logo } = req.body;
    db.query('INSERT INTO fifa_teams (name, logo) VALUES (?, ?)', [name, logo])
        .then(result => {
            res.status(201).send(`Team created with ID: ${result.insertId}`);
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Get a team by ID
exports.getTeamById = (req, res) => {
    db.query('SELECT *, CONCAT(?, logo) AS logo FROM fifa_teams WHERE id = ?', [global.logoLocation, req.params.id])
        .then(result => {
            if (result.length === 0) {
                res.status(404).send('Team not found');
            } else {
                res.json(result[0]);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Update a team by ID
exports.updateTeamById = (req, res) => {
    const { name, logo } = req.body;
    db.query('UPDATE fifa_teams SET name = ?, logo = ? WHERE id = ?', [name, logo, req.params.id])
        .then(result => {
            if (result.affectedRows === 0) {
                res.status(404).send('Team not found');
            } else {
                res.send('Team updated successfully');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Delete a team by ID
exports.deleteTeamById = (req, res) => {
    db.query('DELETE FROM fifa_teams WHERE id = ?', [req.params.id])
        .then(result => {
            if (result.affectedRows === 0) {
                res.status(404).send('Team not found');
            } else {
                res.send('Team deleted successfully');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Get all teams
exports.getAllTeams = (req, res) => {
    db.query('SELECT * , CONCAT(?, logo) AS logo FROM fifa_teams', [global.logoLocation])
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};


// app.get('/db', (req, res) => {


//     // Example usage
//     (async () => {
//         try {
//             // SELECT query
//             const users = await db.query('SELECT * FROM fifa_teams where id = 1');
//             console.log(users);
//             users.forEach(user => {
//                 console.log('Name:', user.name);
//             });

//             // INSERT query
//             // const newUser = { name: 'John', email: 'john@example.com' };
//             // const result = await db.query('INSERT INTO users SET ?', newUser);
//             // console.log('New user ID:', result.insertId);

//             // UPDATE query
//             // await db.query('UPDATE users SET email = ? WHERE id = ?', ['newemail@example.com', 1]);
//             // console.log('User email updated');

//             // DELETE query
//             // await db.query('DELETE FROM users WHERE id = ?', [1]);
//             // console.log('User deleted');
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     })();
//     res.send("OK");
// });


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