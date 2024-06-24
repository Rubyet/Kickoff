import React, { useEffect, useState } from "react";
import style from "./fixtures.module.css";

import CustomCard2 from "../../component/card/card_2/CustomCard";
import CustomCard3 from "../../component/card/card_3/CustomCard3";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../component/loading/Loading";
import { Flipper, Flipped } from "react-flip-toolkit";
import PointDataTable from "../../component/datatable/PointDataTable";
import PlayerPointDataTable from "../../component/datatable/PlayerPointDataTable";

function Fixtures() {
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [loading, setLoading] = useState(true);
  const [fixtures, setFixtures] = useState([]);
  const [fixtureDetails, setFixtureDetails] = useState({});
  const [teamPoints, setTeamPoints] = useState([]);
  const [playerPoints, setPlayerPoints] = useState([]);
  const [displayFinishButton, setDisplayFinishButton] = useState(false);
  const { id } = useParams();

  const getFixtures = async (id) => {
    axios.get(`${BaseURL}/fixtures/league/${id}`).then((response) => {
      setFixtures(response.data);
      setLoading(false);
      setFixtureDetails(response.data[0]);
      showFinishButton(response.data);
    });
  };

  const getMatchPoint = async (id) => {
    axios.get(`${BaseURL}/matches/points/${id}`).then((response) => {
      // console.log(response.data.player_points);
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
  };

  const showFinishButton = (res) => {
    const isComplete = res.filter((fixture) => fixture?.is_complete == 1);
    if (isComplete.length != 0 && isComplete.length == res.length) {
      setDisplayFinishButton(true);
    } else if (isComplete.length == 0) {
      setDisplayFinishButton(false);
    } else { 
      setDisplayFinishButton(false);
    }
  };


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
                        <Flipped key={index} flipId={fixture.match_id} stagger>
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
                      <PointDataTable data={teamPoints} />
                    </div>
                  </div>
                  <div className={style.card}>
                    <div className={`${style.cardHeader}`}>
                      <h6 className={style.cardHeaderText}>
                        Player Ponts Table
                      </h6>
                    </div>
                    <div className="">
                      <PlayerPointDataTable data={playerPoints} />
                    </div>
                  </div>

                  {displayFinishButton === true && (
                    <div>
                      <button className="btn btn-primary">Finish</button>
                    </div>
                  )}
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
