import React, { useEffect, useState } from "react";
import styled from "./card.module.css";
import { TextField } from "@mui/material";
import axios from "axios";

function CustomCard3({ data, onEvent }) {
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [teamHomeGoal, setTeamHomeGoal] = useState(0);
  const [teamAwayGoal, setTeamAwayGoal] = useState(0);
  const [matchId, setMatchId] = useState(null);

  const handleMatchResult = async () => {
    const matchdata = {
      team_home_goal: teamHomeGoal,
      team_away_goal: teamAwayGoal,
      is_complete: 1,
    };

    axios.put(`${BaseURL}/matches/${matchId}`, matchdata).then((response) => {
      onEvent(response.data);
      if (response.status == 200) {
        setTeamAwayGoal(0);
        setTeamHomeGoal(0);
      }
    });
  };

  useEffect(() => {
    setMatchId(data?.match_id);
  }, [data]);
  return (
    <>
      <div className={styled.card}>
        <div className={styled.card_info}>
          <div>
            <div className="row pt-5">
              <div className="col-lg-4 text-center">
                <img
                  src={data?.team_home?.logo}
                  className={styled.teamImage}
                  alt=""
                />
                <div className={styled.teamName}>{data?.team_home?.name}</div>
                <div className={styled.playerName}>
                  {data?.player_home?.name}
                </div>

                <div className="d-flex justify-content-around m-2">
                  <div>
                    <div>OVA</div>
                    <div>{data?.team_home?.ova}</div>
                  </div>
                  <div>
                    <div>ATT</div>
                    <div>{data?.team_home?.att}</div>
                  </div>
                  <div>
                    <div>MID</div>
                    <div>{data?.team_home?.mid}</div>
                  </div>
                  <div>
                    <div>DEF</div>
                    <div>{data?.team_home?.def}</div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 text-center">
                <span className="badge badge-pill badge-primary">VS</span>
                <br />
                <span
                  className={`badge badge-pill ${
                    data?.is_complete == 1 ? "badge-success" : "badge-warning"
                  }`}
                >
                  {data?.is_complete == 1 ? "Complete" : "Pending"}
                </span>

                {data?.is_complete == 1 && (
                  <>
                    <div className="d-flex justify-content-around">
                      <div className={styled.score}>{data?.team_home_goal}</div>
                      <div className={styled.score}>{data?.team_away_goal}</div>
                    </div>

                    {data?.team_home_goal > data?.team_away_goal ? (
                      <div className={styled.result}>
                        {data?.team_home?.name} Won
                      </div>
                    ) : data?.team_home_goal === data?.team_away_goal ? (
                      <div className={styled.result}>Draw</div>
                    ) : (
                      <div className={styled.result}>
                        {data?.team_away?.name} Won
                      </div>
                    )}
                  </>
                )}

                {data?.is_complete == 0 && (
                  <div className="d-flex justify-content-between mt-3 mb-3">
                    <div>
                      <input
                        type="number"
                        className="form-control text-center"
                        value={teamHomeGoal}
                        min={0}
                        onChange={(e) => setTeamHomeGoal(e.target.value)}
                      />
                    </div>
                    <div className="mx-2"></div>
                    <div>
                      <input
                        type="number"
                        className="form-control text-center"
                        value={teamAwayGoal}
                        min={0}
                        onChange={(e) => setTeamAwayGoal(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="col-lg-4">
                <div className="text-center">
                  <img
                    src={data?.team_away?.logo}
                    className={styled.teamImage}
                    alt=""
                  />
                  <div className={styled.teamName}>{data?.team_away?.name}</div>{" "}
                  <br />
                  <div className={styled.playerName}>
                    {data?.player_away?.name}
                  </div>
                </div>

                <div className="d-flex justify-content-around m-2">
                  <div>
                    <div>OVA</div>
                    <div>{data?.team_away?.ova}</div>
                  </div>
                  <div>
                    <div>ATT</div>
                    <div>{data?.team_away?.att}</div>
                  </div>
                  <div>
                    <div>MID</div>
                    <div>{data?.team_away?.mid}</div>
                  </div>
                  <div>
                    <div>DEF</div>
                    <div>{data?.team_away?.def}</div>
                  </div>
                </div>
              </div>
            </div>
            {data?.is_complete == 0 && (
              <div className="d-flex justify-content-around mt-4 pb-4">
                <button className="btn btn-primary" onClick={handleMatchResult}>
                  Update Result
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomCard3;
