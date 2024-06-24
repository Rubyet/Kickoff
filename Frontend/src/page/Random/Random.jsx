import PlayerCard from "../../component/PlayerCard";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./random.css";
import Loading from "../../component/loading/Loading";

function Random() {
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [gameData, setGameData] = useState([]);
  const [renderedData, setRenderedData] = useState([]);

  const [blockSize, setBlockSize] = useState();
  const [containerSize, setContainerSize] = useState();
  const outerDiv = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async (id) => {
    axios.get(`${BaseURL}/random/${id}`).then((response) => {
      setGameData(response.data);
      if (response.data.length == 1) {
        setBlockSize(12);
        setContainerSize("container");
      } else if (response.data.length == 2) {
        setBlockSize(6);
        setContainerSize("container");
      } else if (response.data.length == 3) {
        setBlockSize(4);
        setContainerSize("container");
      } else if (response.data.length == 4) {
        setBlockSize(3);
        setContainerSize("container-fluid");
      } else if (response.data.length >= 5) {
        setBlockSize(2);
        setContainerSize("container-fluid");
      }
    });
  };
  useEffect(() => {
    getData(id);
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(loadingTimeout);
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
      if (index < gameData.length) {
        setRenderedData((prevData) => [...prevData, gameData[index]]);
        setIndex((prevIndex) => prevIndex + 1);
        let audio = new Audio("./../asset/audio/sound2.mp3");
        audio.onloadeddata = function () {
          audio.play();
        };
      } else {
        clearInterval(interval);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [gameData, index]);

  const handleSubmitData = (e) => {
    e.preventDefault();
    const data = {
      gameId: id,
      player_team_combination: gameData,
    };
    axios.post(`${BaseURL}/fixtures/simple`, data).then((response) => {
      // console.log(response);
      if (response.status == 201) {
          navigate(`/fixtures/${response.data.fixture_id}`)
      }
    });
  };

  return (
    <div className="randombg">
      <div className={containerSize} ref={outerDiv}>
        {loading ? (
          <div className="d-flex justify-content-center min-vh-100 flex-column loadinbackgorund">
                <Loading />
        </div>
        ) : (
          <div className="d-flex justify-content-center min-vh-100 flex-column">
            <div className="row">
              {renderedData.map((game, index) => (
                <div
                  className={`col-lg-${blockSize} mb-4 card__rotate--ani`}
                  key={index}
                >
                  <PlayerCard data={game} />
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary next-buttons mt-5 w-25"
                onClick={handleSubmitData}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Random;
