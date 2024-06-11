import React from 'react'
import styled from './card.module.css'
import { TextField } from '@mui/material'

function CustomCard3({ data }) {
  console.log(data)
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
                <div className={styled.playerName}>{data?.player_home?.name}</div>


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
                <span className={`badge badge-pill ${data?.is_complete == 1 ? "badge-success" : "badge-warning"}`}>{data?.is_complete == 1 ? "Complete" : "Pending"}</span>

                {data?.is_complete == 1 && (
                  <>
                    <div className="d-flex justify-content-around">
                      <div className={styled.score}>
                        {data?.team_home_goal}
                      </div>
                      <div className={styled.score}>
                        {data?.team_away_goal}
                      </div>
                    </div>

                    {data?.team_home_goal > data?.team_away_goal ? (
                      <div className={styled.result}>
                        {data?.team_home?.name} Won
                      </div>
                    ) : data?.team_home_goal === data?.team_away_goal ? (
                      <div className={styled.result}>
                        Draw
                      </div>
                    ) : (
                      <div className={styled.result}>
                        {data?.team_away?.name} Won
                      </div>
                    )}
                  </>
                )}


                {data?.is_complete == 0 && (
                  <div className="d-flex justify-content-around mb-5">
                    <TextField
                      id="outlined-basic"
                      label="Away Team Goal"
                      variant="filled" color="success" focused
                      style={{ width: "50%" }}
                      value="0"
                      type="number"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Away Team Goal"
                      variant="filled" color="success" focused
                      style={{ width: "50%" }}
                      value="0"
                      type="number"
                    />
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
                  <div className={styled.teamName}>{data?.team_away?.name}</div> <br />
                  <div className={styled.playerName}>{data?.player_away?.name}</div>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomCard3