const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');
const fixturesController = require('../controllers/fixturesController');
const teamsController = require('../controllers/teamController');
const gameController = require('../controllers/gameController');
const matchesController = require('../controllers/matchesController');

// Existing routes
router.get('/', (req, res) => {
    res.send("Api is also working!!! Double Enjoy!!");
});

router.get('/random/:id', teamsController.getRandomTeams);

// CRUD routes for teams
router.post('/teams', teamsController.createTeam);
router.get('/teams/:id', teamsController.getTeamById);
router.put('/teams/:id', teamsController.updateTeamById);
router.delete('/teams/:id', teamsController.deleteTeamById);
router.get('/teams', teamsController.getAllTeams);

// CRUD routes for players
router.post('/players', playersController.createPlayer);
router.get('/players/:id', playersController.getPlayerById);
router.put('/players/:id', playersController.updatePlayerById);
router.delete('/players/:id', playersController.deletePlayerById);
router.get('/players', playersController.getAllPlayers);
// router.get('/playes/test', playersController.getest);

// Fixtures routes
router.get('/fixtures', fixturesController.getAllFixtures);
router.get('/fixtures/:id', fixturesController.getMatchById);
router.post('/fixtures', fixturesController.createMatch);
router.put('/fixtures/:id', fixturesController.updateMatch);
router.delete('/fixtures/:id', fixturesController.deleteMatch);

router.post('/fixtures/simple', fixturesController.createSimpleMatch);
router.get('/fixtures/league/:id', fixturesController.getLeagueFixtures);

// CRUD routes for games
router.post('/games', gameController.createGame);
router.get('/games/:id', gameController.getGameById);
router.put('/games/:id', gameController.updateGameById);
router.delete('/games/:id', gameController.deleteGameById);
router.get('/games', gameController.getAllGames);
//match type
router.get('/match-type', gameController.getAllMatchTypes);
router.get('/match-type/:id', gameController.getMatchTypeById);
//matches routes
router.put('/matches/:id', matchesController.updateMatchById);
router.get('/matches/points/:fixture_id', matchesController.calculatePointsTable);
//fixture type
router.get('/fixture-type', gameController.getAllFixtureTypes);
router.get('/fixture-type/:id', gameController.getFixtureTypeById);

module.exports = router;
