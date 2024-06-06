import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import style from './kickoff.module.css'
import { MenuItem, NativeSelect, Select } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Kickoff() {
    const BaseURL = import.meta.env.VITE_API_BASE_URL;
    const [numberOfPlayers, setNumberOfPlayers] = useState(0)
    const [numberOfTeams, setNumberOfTeams] = useState(0)
    const [doubleTeamsBlock, setDoubleTeamsBlock] = useState(0)
    const [data, setData] = useState([]);
    const [teamsData, setTeamsData] = useState([])
    const [matchTypeData, setMatchTypeData] = useState([])
    const [fixtureData, setFixtureData] = useState([])
    const [playerName, setPlayerName] = useState([])
    const [teamName, setTeamName] = useState([])
    const [matchType, setMatchType] = useState('')
    const [matchTypeName, setMatchTypeName] = useState('')
    const [fixture, setFixture] = useState('')
    const navigate = useNavigate();

    const getAllData = async () => {
        //Get Players List
        axios.get(`${BaseURL}/players`).then((response) => {
            setData(response.data)
        })

        //Get Teams List
        axios.get(`${BaseURL}/teams`).then((response) => {
            setTeamsData(response.data)
        })

        //Get Match Type
        axios.get(`${BaseURL}/match-type`).then((response) => {
            setMatchTypeData(response.data)
        })

        //Get Fixture
        axios.get(`${BaseURL}/fixture-type`).then((response) => {
            setFixtureData(response.data)
        })
    }

    const handleNumberOfPlayers = (e) => {
        const value = e.target.value;
        if (value > 0) {
            setNumberOfPlayers(parseInt(value));
            setNumberOfTeams(0);
            setDoubleTeamsBlock(0);
            setTeamName([]);
            setMatchType('');
            setMatchTypeName('');
            setFixture('');
            setPlayerName([]);
        } else {
            setNumberOfPlayers(0);
            setNumberOfTeams(0);
            setDoubleTeamsBlock(0);
            setPlayerName([]);
        }
    }

    const handleNumberOfTeam = (e) => {
        const value = e.target.value;
        if (value >= 0) {
            setNumberOfTeams(parseInt(value));
            setDoubleTeamsBlock(value * numberOfPlayers)
        }
    }

    const handleMatchType = (e) => {
        const value = e.target.value;
        setMatchType(value)
        const matchName = matchTypeData.filter((match) => match.id == value)
        setMatchTypeName(matchName[0].name)
    }

    const handlePlayerName = (e, index) => {
        const value = e.target.value;
        setPlayerName(prevState => {
            const newState = [...prevState];
            newState[index] = newState[index] || 'Default Value';
            newState[index] = value;
            return newState;
        });
    }

    const handleTeamName = (e, index) => {
        const value = e.target.value;
        setTeamName(prevState => {
            const newState = [...prevState];
            newState[index] = newState[index] || 'Default Value';
            newState[index] = value;
            return newState;
        });
    }

    useEffect(() => {
        getAllData()
    }, []);

    const handleSubmitData = (e) => {
        e.preventDefault()
        const data = {
            no_of_players: numberOfPlayers,
            no_of_teams_per_players: numberOfTeams,
            players: JSON.stringify(playerName),
            teams: JSON.stringify(teamName),
            match_type: matchType,
            fixture_type: fixture

        }
        axios.post(`${BaseURL}/games`, data).then((response) => {
            if (response.status == 201) {
                navigate(`/random/${response.data.id}`)
            }
        })
    }


    return (
        <>
            <div className="container">
                <div className="mt-2 ">
                    <div className="row d-flex justify-content-center parentCard">
                        <div className="col-md-4">
                            <div className={`${style.customCard} card`}>
                                <div className="card-body text-center">
                                    <TextField
                                        id="outlined-basic"
                                        label="Number Of Player"
                                        color="success"
                                        variant="standard"
                                        style={{ width: '100%' }}
                                        value={numberOfPlayers}
                                        onChange={handleNumberOfPlayers}
                                        type='number'
                                        min={0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center secondBlock">
                        {Number.isInteger(numberOfPlayers) && numberOfPlayers >= 0 && [...Array(numberOfPlayers)].map((_, index) => (
                            <div className="col-md-3 mt-3" key={index}>
                                <div className={`${style.customCard} card`}>
                                    <div className="card-body text-center">
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            defaultValue=""
                                            style={{ width: '100%' }}
                                            onChange={(e) => handlePlayerName(e, index)}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {data.map((player) => (
                                                <MenuItem value={player.id} key={player.id}>{player.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {playerName.length > 0 && (
                        <div className="row d-flex justify-content-center mt-3">
                            <div className="col-md-4">
                                <div className={`${style.customCard} card`}>
                                    <div className="card-body text-center">
                                        <TextField
                                            id="outlined-basic"
                                            label="Number Of Team"
                                            color="success"
                                            variant="standard"
                                            style={{ width: '100%' }}
                                            value={numberOfTeams}
                                            onChange={handleNumberOfTeam}
                                            type='number'
                                            min={0}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="row d-flex justify-content-center secondBlock">
                        {Number.isInteger(doubleTeamsBlock) && doubleTeamsBlock >= 0 && [...Array(doubleTeamsBlock)].map((_, index) => (
                            <div className="col-md-3 mt-3" key={index}>
                                <div className={`${style.customCard} card`}>
                                    <div className="card-body text-center">
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            defaultValue=""
                                            style={{ width: '100%' }}
                                            onChange={(e) => handleTeamName(e, index)}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {teamsData.map((teams) => (
                                                <MenuItem value={teams.id} key={teams.id}>{teams.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {teamName.length > 0 && (
                        <div className="row d-flex justify-content-center mt-3">
                            <div className="col-md-4">
                                <div className={`${style.customCard} card`}>
                                    <div className="card-body text-center">
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            defaultValue=""
                                            style={{ width: '100%' }}
                                            onChange={handleMatchType}
                                            name='matchType'
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {matchTypeData.map((match) => (
                                                <MenuItem value={match.id} key={match.id}>{match.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {matchTypeName.includes("Knockout") && (
                        <div className="row d-flex justify-content-center mt-3">
                            <div className="col-md-4">
                                <div className={`${style.customCard} card`}>
                                    <div className="card-body text-center">
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            defaultValue=""
                                            style={{ width: '100%' }}
                                            onChange={(e) => setFixture(e.target.value)}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {fixtureData.map((match) => (
                                                <MenuItem value={match.id} key={match.id}>{match.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {teamName.length > 0 && (
                        <div className="row d-flex justify-content-center mt-5">
                            <div className="col-md-4 mt-5">
                                <div>
                                    <div className="text-center">
                                        <button className="btn btn-primary" onClick={handleSubmitData}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Kickoff