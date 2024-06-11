import React from "react";
import style from "./card.module.css";

function CustomCard2(props) {
  return (
    <>
      <div className={`${style.card1} mt-2`}>
        <div className={style.card2}>
          <div className="row">
            <div className="col-md-4">
              <img
                src={props?.data?.team_home?.logo}
                className={style.teamImage}
                alt=""
              />
              <div className={style.teamName}>
                {props?.data?.team_home?.name}
              </div>
              <div className={style.playerName}>
                {props?.data?.player_home?.name}
              </div>
            </div>
            <div className="col-md-4">
              <span className="badge badge-pill badge-primary mt-3">VS</span><br />
              <span className={`badge badge-pill ${props?.data?.is_complete == 1 ? "badge-success" : "badge-warning"}`}>{props?.data?.is_complete == 1 ? "Complete" : "Pending"}</span>

              {props?.data?.is_complete == 1 && (
                <>
                  <div className="d-flex justify-content-around">
                    <div className={style.score}>
                      {props?.data?.team_home_goal}
                    </div>
                    <div className={style.score}>
                      {props?.data?.team_away_goal}
                    </div>
                  </div>

                  {props?.data?.team_home_goal > props?.data?.team_away_goal ? (
                    <div className={style.result}>
                      {props?.data?.team_home?.name} Won
                    </div>
                  ) : props?.data?.team_home_goal === props?.data?.team_away_goal ? (
                    <div className={style.result}>
                      Draw
                    </div>
                  ) : (
                    <div className={style.result}>
                      {props?.data?.team_away?.name} Won
                    </div>
                  )}
                </>
              )}

            </div>
            <div className="col-md-4">
              <img
                src={props?.data?.team_away?.logo}
                className={style.teamImage}
                alt=""
              />
              <div className={style.teamName}>
                {props?.data?.team_away?.name}
              </div>
              <div className={style.playerName}>
                {props?.data?.player_away?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomCard2;
