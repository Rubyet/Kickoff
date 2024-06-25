import React from "react";
import style from "./playercard.module.css";
import { FaEdit, FaRegTimesCircle, FaTools } from "react-icons/fa";

function PlayerCard({ player }) {
  //   console.log(player);
  return (
    <>
      <div className={style.background}>
        <div className={style.fut_player_card}>
          <div className={style.player_card_top}>
            <div className={style.player_master_info}>
              <div className={style.player_rating}>
                <span>{player?.playerStats?.totalGoalScored}</span>
              </div>
              <div
                className={style.player_position}
                style={{
                  "--position-before-content": `"${player?.playerStats?.playerLevel}"`,
                }}
              >
                <span></span>
              </div>
              <div className={style.player_nation}>
                <button className="btn p-0 m-0">
                  <FaTools color="#91DDCF" size={23} />
                </button>
              </div>
              <div className={style.player_club}>
                <button className="btn p-0 m-0">
                  <FaRegTimesCircle color="#EE4E4E" size={23} />
                </button>
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
      </div>
    </>
  );
}

export default PlayerCard;
