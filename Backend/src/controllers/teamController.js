const db = require('../config/db-connection');
var response = [];
var TeamIndexes = [];
exports.getRandomTeams = (req, res) => {
    // db.query('SELECT * FROM fifa_teams', (err, results) => {
    //     if (err) {
    //         console.error('Error executing query: ' + err);
    //         res.status(500).json({ error: 'Internal server error' });
    //         return;
    //     }
    //     res.json(results);
    // });

    
    const NameOfPlayers = ["Person 1", "Person 2", "Person 3", "Person 4"];
    const ImageOfPlayers = ["https://admin.kickoff.rubyet.info/public/images/players/ronaldo.png", "https://admin.kickoff.rubyet.info/images/players/messi.png", "https://admin.kickoff.rubyet.info/images/players/neimar.png", "https://admin.kickoff.rubyet.info/images/players/messi.png"];

    const TeamNames = ["Accrington Stanley", "Arsenal", "Everton F.C.", "Blackpool F.C.", "Brentford F.C.", "Sunderland A.F.C.", "Blackpool F.C.", "Brentford F.C.", "Sunderland A.F.C."];
    const TeamLogos = ["https://fifafixture.rubyet.info/img/teams_logo/1.webp", "https://fifafixture.rubyet.info/img/teams_logo/2.webp", "https://fifafixture.rubyet.info/img/teams_logo/3.webp", "https://fifafixture.rubyet.info/img/teams_logo/4.webp", "https://fifafixture.rubyet.info/img/teams_logo/5.webp", "https://fifafixture.rubyet.info/img/teams_logo/6.webp", "https://fifafixture.rubyet.info/img/teams_logo/7.webp", "https://fifafixture.rubyet.info/img/teams_logo/8.webp", "https://fifafixture.rubyet.info/img/teams_logo/9.webp"];
    console.log(req.params.id);

    if (req.params.id == 2) {
        const NoOfPlayers = 3;
        const TeamsPerPlayer = 2;
        TeamIndexes = [1, 2, 3, 4, 5, 6];
        console.log("here");
        assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, TeamIndexes,NameOfPlayers,ImageOfPlayers,TeamNames,TeamLogos);
    }
    else if (req.params.id == 3) {
        const NoOfPlayers = 4;
        const TeamsPerPlayer = 2;
        TeamIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, TeamIndexes,NameOfPlayers,ImageOfPlayers,TeamNames,TeamLogos);
    } else {
        res.json(response);
    }
    // console.log(response);
    res.json(response);
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, TeamIndexes,NameOfPlayers,ImageOfPlayers,TeamNames,TeamLogos) {
    response =[];
    if (NoOfPlayers * TeamsPerPlayer > TeamIndexes.length) {
        throw new Error("Not enough teams for each player to have the specified number of teams.");
    }

    shuffle(TeamIndexes);
    console.log(TeamIndexes);

    for (let i = 0; i < NoOfPlayers; i++) {
        const player = {};
        player.playerName = NameOfPlayers[i];
        player.playerImage = ImageOfPlayers[i];
        player.playerLevel = 5;
        player.playerGoals = 15;
        player.playerTotalMatch = 8;
        player.teams = [];
        for (let j = 0; j < TeamsPerPlayer; j++) {
            // Retrieve the team information based on randomTeams[j]
            const teamIndex = TeamIndexes[i * TeamsPerPlayer + j];
            console.log(teamIndex);
            player.teams.push({
                team: TeamNames[teamIndex - 1],
                logo: TeamLogos[teamIndex - 1]
            });
        }
        response.push(player);
        console.log(player);
    }
}


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