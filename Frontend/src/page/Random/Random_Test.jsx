
import PlayerCard from '../../component/PlayerCard'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function Random_Test() {
    const BaseURL = import.meta.env.VITE_API_BASE_URL;
    const [gameData, setGameData] = useState([])
    const [renderedData, setRenderedData] = useState([])

    const [blockSize, setBlockSize] = useState()
    const [containerSize, setContainerSize] = useState()
    const outerDiv = useRef(null);

    const getData = async () => {
        axios.get(`${BaseURL}/random/2`).then((response) => {
            setGameData(response.data)
            if (response.data.length == 2) {
                setBlockSize(6)
                setContainerSize("container")
            } else if (response.data.length == 3) {
                setBlockSize(4)
                setContainerSize("container")
            } else if (response.data.length == 4) {
                setBlockSize(3)
                setContainerSize("container-fluid")
            } else if (response.data.length >= 5) {
                setBlockSize(2)
                setContainerSize("container-fluid")
            }
        }
        )
    }
    useEffect(() => {
        getData()
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
                setRenderedData(prevData => [...prevData, gameData[index]]);
                setIndex(prevIndex => prevIndex + 1);
                let audio = new Audio('./../asset/audio/sound2.mp3');
                audio.onloadeddata = function() {
                    audio.play();
                };
            } else {
                clearInterval(interval);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [gameData, index]);

    return (
        <div>
            <div className={containerSize} ref={outerDiv}>
                {loading ? (
                    <div className='d-flex justify-content-center min-vh-100 flex-column'>
                        <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                    </div>
                ) : (
                    <div className='d-flex justify-content-center min-vh-100 flex-column'>
                        <div className="row">
                            {renderedData.map((game, index) => (
                                <div className={`col-lg-${blockSize} mb-4 card__rotate--ani`} key={index} >
                                    <PlayerCard data={game} />
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary next-buttons mt-5 w-25 btnhidden">Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Random_Test