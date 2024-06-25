import React from "react";
import style from "./playercard.module.css";
import { FaEdit, FaRegTimesCircle, FaTools } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { GiSoccerBall } from "react-icons/gi";
import Swal from "sweetalert2";
import axios from "axios";

function PlayerCard({ player }) {
    const BaseURL = import.meta.env.VITE_API_BASE_URL;
    const deletePlayer = async (playerId) => {
 
          await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`${BaseURL}/players/${playerId}`).then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                  Swal.fire({
                    position: "top-end",
                    title: "Deleted!",
                    text: "Player has been deleted.",
                    showConfirmButton: false,
                    timer: 1500,
                  });

                } else if (response.status === 500) {
                  Swal.fire({
                    title: "Failed!",
                    text: "Failed to delete player.",
                    icon: "error",
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
            } else {
              Swal.fire({
                title: "Cancelled",
                text: "Player is safe :)",
                icon: "info",
                position: "top-end",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      };

  return (
    <>
      <div className={style.background}>
        <div className={style.fut_player_card}>
          <div className={style.player_card_top}>
            <div className={style.player_master_info}>
              <div className={style.player_rating}>
                <span><GiSoccerBall className="soccer-ball-spin"/> {player?.playerStats?.totalGoalScored}</span>
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
                <button className="btn p-0 m-0" onClick={() => deletePlayer(player.id)}>
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
                    <div className={style.player_feature_value}>{player?.playerStats?.totalPlayed}</div>
                    <div className={style.player_feature_title}>P</div>
                  </span>
                  <span>
                    <div className={style.player_feature_value}>{player?.playerStats?.totalWin}</div>
                    <div className={style.player_feature_title}>W</div>
                  </span>
                  <span>
                    <div className={style.player_feature_value}>{player?.playerStats?.totalLose}</div>
                    <div className={style.player_feature_title}>L</div>
                  </span>
                </div>
                <div className={style.player_features_col}>
                  <span>
                    <div className={style.player_feature_value}>{player?.playerStats?.totalDraw}</div>
                    <div className={style.player_feature_title}>D</div>
                  </span>
                  <span>
                    <div className={style.player_feature_value}>{player?.playerStats?.totalGoalAgainst}</div>
                    <div className={style.player_feature_title}>GA</div>
                  </span>
                  <span>
                    <div className={style.player_feature_value}>{player?.playerStats?.totalGoalScored}</div>
                    <div className={style.player_feature_title}>GS</div>
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
