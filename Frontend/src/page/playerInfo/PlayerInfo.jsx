import React, { useEffect, useState } from "react";
import style from "./playerinfo.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import PlayerCard from "../../component/card/playerCard/PlayerCard";
import { Button, Modal } from "react-bootstrap";

function PlayerInfo() {
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [playerData, setPlayerData] = useState([]);

  const getPlayerList = async () => {
    axios.get(`${BaseURL}/players`).then((response) => {
      if (response.status === 200) {
        setPlayerData(response.data);
      }
    });
  };

  const deletePlayer = async (playerId) => {
    try {
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
              setPlayerData((currentData) =>
                currentData.filter((player) => player.id !== playerId)
              );
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
    } catch (error) {
      Swal.fire({
        title: "Failed!",
        text: "Failed to delete player.",
        icon: "error",
      });
    }
  };

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("avatar", avatar);
    axios.post(`${BaseURL}/players`, formData).then((response) => {
      console.log(response);
      // setShow(false);
      // setImage(null);
      // setName(null);
      // setAvatar(null);
  })
}

  useEffect(() => {
    getPlayerList();
  }, []);
  return (
    <>
      <div className={style.playerinfobg}>
        <div className="container pt-5">
          <div className="">
            <div className="">
              <div>
                <div className="d-flex justify-content-between">
                  <div className="">
                    <h5 className="card-title text-white">Player Info</h5>
                  </div>
                  <div className="">
                    <button className="btn btn-primary" onClick={handleShow}>
                      Add Player
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-content-start justify-content-center flex-wrap mt-5">
            {playerData.map((player, index) => (
              <div key={index}>
                <PlayerCard player={player} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form 
            encType="multipart/form-data"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="avatar" className="form-label">
                Avatar
              </label>
              <input
                type="file"
                className="form-control"
                id="avatar"
                name="avatar"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
            </div>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default PlayerInfo;
