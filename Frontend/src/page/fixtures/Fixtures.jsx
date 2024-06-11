import React, { useEffect, useState } from "react";
import style from "./fixtures.module.css";

import CustomCard2 from "../../component/card/card_2/CustomCard";
import CustomCard3 from "../../component/card/card_3/CustomCard3";
import axios from "axios";
import fixtureData from "../../component/fixtureData";
import { useParams } from "react-router-dom";
import Loading from "../../component/loading/Loading";

function Fixtures() {
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [loading, setLoading] = useState(true);
  const [fixtures, setFixtures] = useState([]);
  const [fixtureDetails, setFixtureDetails] = useState({});
  const { id } = useParams();

  const getFixtures = async (id) => {
    axios.get(`${BaseURL}/fixtures/league/${id}`).then((response) => {
      setFixtures(response.data);
      setLoading(false);
      setFixtureDetails(response?.data[0]);
    });

    // setFixtures(fixtureData);
  };

  const handleCardDetails = (id) => {
    setFixtureDetails(fixtures.find((fixture) => fixture.match_id === id));
  };

  useEffect(() => {
    setLoading(true);
    getFixtures(id).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    });
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
                  <CustomCard3 data={fixtureDetails} />
                </div>
                <div className="col-md-4">
                  <div className={style.middleBlock}>
                    {fixtures.map((fixture, index) => (
                      <div
                        key={index}
                        onClick={() => handleCardDetails(fixture.match_id)}
                        className={style.middleBlockButton}
                      >
                        <CustomCard2 data={fixture} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={style.card}>
                    <div className={`${style.cardHeader}`}>
                      <h5 className={style.cardHeaderText}>Point Table</h5>
                    </div>
                    <div className="card-body">
                      <table className="table table-sm table-responsive-lg">
                        <thead>
                          <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Team</th>
                            <th scope="col">Played</th>
                            <th scope="col">Won</th>
                            <th scope="col">Drawn</th>
                            <th scope="col">Lost</th>
                            <th scope="col">Points</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>FC Champs</td>
                            <td>10</td>
                            <td>8</td>
                            <td>1</td>
                            <td>1</td>
                            <td>25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Tigers</td>
                            <td>10</td>
                            <td>7</td>
                            <td>2</td>
                            <td>1</td>
                            <td>23</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>FC Champs</td>
                            <td>10</td>
                            <td>6</td>
                            <td>2</td>
                            <td>2</td>
                            <td>20</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>FC Champs</td>
                            <td>10</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>18</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>FC Champs</td>
                            <td>10</td>
                            <td>4</td>
                            <td>3</td>
                            <td>3</td>
                            <td>15</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>FC Champs</td>
                            <td>10</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>12</td>
                          </tr>
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
