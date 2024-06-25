import React from "react";
import style from "./playercard.module.css";

function PlayerCard({ player }) {
  // console.log(player)
  return (
    <>
      <div className={style.fut_player_card}>
        <div className={style.player_card_top}>
          <div className={style.player_master_info}>
            <div className={style.player_rating}>
              <span>97</span>
            </div>
            <div className={style.player_position}>
              <span>RW</span>
            </div>
            <div className={style.player_nation}>
              <img
                src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg"
                alt="Argentina"
                draggable="false"
              />
            </div>
            <div className={style.player_club}>
              <button className="btn btn-sm"></button>
              {/* <img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false"/> */}
            </div>
          </div>
          <div className={style.player_picture}>
            <img
              src={player.image}
              alt={style.player_extra}
              draggable="false"
            />
            <div className={style.player_extra}>
              <span>4*SM</span>
              <span>4*WF</span>
            </div>
          </div>
        </div>
        <div className={style.player_card_bottom}>
          <div className={style.player_info}>
            <div className={style.player_name}>
              <span>{player.name}</span>
            </div>
            <div className={style.player_features}>
              <div className={style.player_features_col}>
                <span>
                  <div className={style.player_feature_value}>97</div>
                  <div className={style.player_feature_title}>PAC</div>
                </span>
                <span>
                  <div className={style.player_feature_value}>95</div>
                  <div className={style.player_feature_title}>SHO</div>
                </span>
                <span>
                  <div className={style.player_feature_value}>94</div>
                  <div className={style.player_feature_title}>PAS</div>
                </span>
              </div>
              <div className={style.player_features_col}>
                <span>
                  <div className={style.player_feature_value}>99</div>
                  <div className={style.player_feature_title}>DRI</div>
                </span>
                <span>
                  <div className={style.player_feature_value}>35</div>
                  <div className={style.player_feature_title}>DEF</div>
                </span>
                <span>
                  <div className={style.player_feature_value}>68</div>
                  <div className={style.player_feature_title}>PHY</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerCard;
