import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import style from './kickoff.module.css'
import { MenuItem, NativeSelect, Select } from '@mui/material';
import axios from 'axios';

function Kickoff() {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0)
    const [numberOfTeams, setNumberOfTeams] = useState(0)
    const [data, setData] = useState([]);
    const BaseURL = import.meta.env.VITE_API_BASE_URL;
    const [playerName, setPlayerName] = useState([])
    const [teamsData, setTeamsData] = useState([])

    const getPlayers = async () => {
        axios.get(`${BaseURL}/players`).then((response) => {
            setData(response.data)
        })
    }
    const getTeams = async () => {
        axios.get(`${BaseURL}/teams`).then((response) => {
            setData(response.data)
        })
    }

    const handleNumberOfPlayers = (e) => {
        const value = e.target.value;
        if (value > 0) {
            setNumberOfPlayers(parseInt(value));
        } else {
            setNumberOfPlayers(0);
            setPlayerName([]);
        }
    }

    const handleNumberOfTeam = (e) => {
        const value = e.target.value;
        if (value >= 0) {
            setNumberOfTeams(parseInt(value));
        }
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

    useEffect(() => {
        getPlayers()
        getTeams()
    }, []);

    console.log(teamsData)
    return (
        <>
            <div className="container">
                <div className="mt-2 ">
                    <div className="row d-flex justify-content-around parentCard">
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

                    <div className="row d-flex justify-content-around secondBlock">
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
                        <div className="row d-flex justify-content-around mt-3">
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

                    <div className="row d-flex justify-content-around secondBlock">
                        {Number.isInteger(numberOfTeams) && numberOfTeams >= 0 && [...Array(numberOfTeams)].map((_, index) => (
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
                                            {teamsData.map((teams) => (
                                                <MenuItem value={teams.id} key={teams.id}>{teams.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kickoff