import React, { useEffect, useState } from "react";
import style from "./playerinfo.module.css";
import axios from "axios";

function PlayerInfo() {
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [playerData, setPlayerData] = useState([]);

  const getPlayerList = async () => {
    axios.get(`${BaseURL}/players`).then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        setPlayerData(response.data);
      }
    });
  };

  const deletePlayer = async (playerId) => {
    try {
      await axios.delete(`${BaseURL}/players/${playerId}`).then((response) => {
        if (response.status === 200) {
          setPlayerData((currentData) =>
            currentData.filter((player) => player.id !== playerId)
          );
        }
      });
    } catch (error) {
      console.error("Failed to delete player:", error);
    }
  };

  useEffect(() => {
    getPlayerList();
  }, []);
  return (
    <>
      <div className={style.playerinfobg}>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div>
                <div className="row">
                  <div className="col-sm-6">
                    <h5 className="card-title text-white">Player Info</h5>
                  </div>
                  <div className="col-sm-6">
                    <button className="btn btn-primary">Add Player</button>
                  </div>
                </div>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Avatar</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {playerData.map((player, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{player.name}</td>
                      <td>
                        <img
                          src={player.image}
                          alt={player.name}
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deletePlayer(player.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerInfo;
