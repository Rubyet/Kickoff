import React, { useEffect, useState } from "react";
import style from "./fixtures.module.css";

import CustomCard2 from "../../component/card/card_2/CustomCard";
import CustomCard3 from "../../component/card/card_3/CustomCard3";
import axios from "axios";
import fixtureData from "../../component/fixtureData";
import { useParams } from "react-router-dom";
import Loading from "../../component/loading/Loading";
import { Flipper, Flipped } from 'react-flip-toolkit';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function Fixtures() {
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [loading, setLoading] = useState(true);
  const [fixtures, setFixtures] = useState([]);
  const [fixtureDetails, setFixtureDetails] = useState({});
  const [teamPoints, setTeamPoints] = useState([]);
  const [playerPoints, setPlayerPoints] = useState([]);
  const { id } = useParams();

  const getFixtures = async (id) => {
    axios.get(`${BaseURL}/fixtures/league/${id}`).then((response) => {
      setFixtures(response.data);
      setLoading(false);
      setFixtureDetails(response.data[0]);
    });
  };

  const getMatchPoint = async (id) => {
    axios.get(`${BaseURL}/matches/points/${id}`).then((response) => {
      console.log(response.data.player_points);
      setTeamPoints(response?.data?.team_points);
      setPlayerPoints(response?.data?.player_points);
    });
  };

  const handleCardDetails = (id) => {
    setFixtureDetails(fixtures.find((fixture) => fixture.match_id === id));
  };

  const handleEvent = (eventData) => {
    getFixtures(id);
    getMatchPoint(id);
  }

  useEffect(() => {
    setLoading(true);
    getFixtures(id).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    });

    getMatchPoint(id);
  }, []);

  return (
    <>
      <div className={style.fixtureBg}>
        {loading ? (
          <div className="d-flex justify-content-center min-vh-100 flex-column loadinbackgorund">
            <Loading />
          </div>
        ) : (
          <div className="mt-5 min-vh-100">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <CustomCard3 data={fixtureDetails} onEvent={handleEvent} />
                </div>
                <div className="col-md-4">
                  <div className={style.middleBlock}>
                    <Flipper flipKey={fixtures}>
                      {fixtures.map((fixture, index) => (
                        <Flipped key={index} flipId={fixture.match_id} stagger >
                          <div
                            onClick={() => handleCardDetails(fixture.match_id)}
                            className={style.middleBlockButton}
                          >
                            <CustomCard2 data={fixture} />
                          </div>
                        </Flipped>
                      ))}
                    </Flipper>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={style.card}>
                    <div className={`${style.cardHeader}`}>
                      <h6 className={style.cardHeaderText}>Team Ponts Table</h6>
                    </div>
                    <div className="">
                        <table className="table table-sm table-striped text-white">
                          <thead className="thead-dark">
                            <tr>
                              <th>Name</th>
                              <th>P</th>
                              <th>W</th>
                              <th>L</th>
                              <th>D</th>
                              <th>S</th>
                              <th>A</th>
                              <th>G/D</th>
                              <th>Pt</th>

                            </tr>
                          </thead>
                          <tbody>
                            {teamPoints?.map((row, index) => (
                              <tr
                                key={index}
                              >
                                <td>{row?.team[0]?.name}</td> 
                                <td>{row?.played}</td>
                                <td>{row?.wins}</td>
                                <td>{row?.losses}</td>
                                <td>{row?.draws}</td>
                                <td>{row?.goals_scored}</td>
                                <td>{row?.goals_against}</td>
                                <td>{Math.abs(row?.goals_scored - row?.goals_against)}</td>
                                <td>{row?.points}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                    </div>
                  </div>
                  <div className={style.card}>
                    <div className={`${style.cardHeader}`}>
                      <h6 className={style.cardHeaderText}>Player Ponts Table</h6>
                    </div>
                    <div className="">
                        <table className="table table-sm text-white">
                          <thead className="thead-dark">
                            <tr>
                              <th>Name</th>
                              <th>P</th>
                              <th>W</th>
                              <th>L</th>
                              <th>D</th>
                              <th>S</th>
                              <th>A</th>
                              <th>G/D</th>
                              <th>Pt</th>

                            </tr>
                          </thead>
                          <tbody>
                            {playerPoints?.map((row, index) => (
                              <tr
                                key={index}
                              >
                                <td>{row?.player[0]?.name}</td> 
                                <td>{row?.played}</td>
                                <td>{row?.wins}</td>
                                <td>{row?.losses}</td>
                                <td>{row?.draws}</td>
                                <td>{row?.goals_scored}</td>
                                <td>{row?.goals_against}</td>
                                <td>{Math.abs(row?.goals_scored - row?.goals_against)}</td>
                                <td>{row?.points}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Fixtures;
