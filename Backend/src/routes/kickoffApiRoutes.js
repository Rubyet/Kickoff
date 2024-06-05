const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');
const matchController = require('../controllers/matchController');
const teamsController = require('../controllers/teamController');
const gameController = require('../controllers/gameController');

// Existing routes
router.get('/', (req, res) => {
    res.send("Api is also working!!! Double Enjoy!!");
});

router.get('/random/:id', teamsController.getRandomTeams);
router.get('/match', matchController.getAllMatches);

// CRUD routes for teams
router.post('/teams', teamsController.createTeam);
router.get('/teams/:id', teamsController.getTeamById);
router.put('/teams/:id', teamsController.updateTeamById);
router.delete('/teams/:id', teamsController.deleteTeamById);

// CRUD routes for players
router.post('/players', playersController.createPlayer);
router.get('/players/:id', playersController.getPlayerById);
router.put('/players/:id', playersController.updatePlayerById);
router.delete('/players/:id', playersController.deletePlayerById);
router.get('/players', playersController.getAllPlayers);

// CRUD routes for games
router.post('/games', gameController.createGame);
router.get('/games/:id', gameController.getGameById);
router.put('/games/:id', gameController.updateGameById);
router.delete('/games/:id', gameController.deleteGameById);
router.get('/games', gameController.getAllGames);

module.exports = router;
