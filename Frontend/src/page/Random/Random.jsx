import React, { useEffect, useRef, useState } from 'react'
import './random.css'

function Random() {
    const [gameData, setGameData] = useState([])
    const data = [
        {
            "playerName": "Person 1",
            "playerImage": "https://fifafixture.rubyet.info/img/teams_logo/73.webp",
            "teams": [
                {
                    "team": "Everton F.C.",
                    "logo": "https://fifafixture.rubyet.info/img/teams_logo/65.webp"
                },
                {
                    "team": "Everton F.C.",
                    "logo": "https://fifafixture.rubyet.info/img/teams_logo/65.webp"
                }
            ]
        },
        {
            "playerName": "Person 2",
            "playerImage": "https://fifafixture.rubyet.info/img/teams_logo/73.webp",
            "teams": [
                {
                    "team": "Everton F.C.",
                    "logo": "https://fifafixture.rubyet.info/img/teams_logo/65.webp"
                },
                {
                    "team": "Everton F.C.",
                    "logo": "https://fifafixture.rubyet.info/img/teams_logo/65.webp"
                }
            ]
        },
        {
            "playerName": "Person 3",
            "playerImage": "https://fifafixture.rubyet.info/img/teams_logo/73.webp",
            "teams": [
                {
                    "team": "Everton F.C.",
                    "logo": "https://fifafixture.rubyet.info/img/teams_logo/65.webp"
                },
                {
                    "team": "Everton F.C.",
                    "logo": "https://fifafixture.rubyet.info/img/teams_logo/65.webp"
                }
            ]
        },
        {
            "playerName": "Person 4",
            "playerImage": "https://fifafixture.rubyet.info/img/teams_logo/73.webp",
            "teams": [
                {
                    "team": "Everton F.C.",
                    "logo": "https://fifafixture.rubyet.info/img/teams_logo/65.webp"
                },
                {
                    "team": "Everton F.C.",
                    "logo": "https://fifafixture.rubyet.info/img/teams_logo/65.webp"
                },
                {
                    "team": "Everton F.C.",
                    "logo": "https://fifafixture.rubyet.info/img/teams_logo/65.webp"
                }
            ]
        }

    ]

    const [blockSize, setBlockSize] = useState()
    const [containerSize, setContainerSize] = useState()
    const outerDiv = useRef(null);
    useEffect(() => {
        if (data.length == 2) {
            setBlockSize(6)
            setContainerSize("container")
        } else if (data.length == 3) {
            setBlockSize(4)
            setContainerSize("container")
        } else if (data.length == 4) {
            setBlockSize(3)
            setContainerSize("container-fluid")
        } else if (data.length >= 5) {
            setBlockSize(2)
            setContainerSize("container-fluid")
        }
    }, [data.length]);

    useEffect(() => {
        setGameData(data)
    }, []);

    useEffect(() => {
        const parentAnimationDuration = gameData.length * 1000;
        const teamDivs = outerDiv.current.querySelectorAll('.hidden');
        teamDivs.forEach((div, i) => {
            setTimeout(() => {
                div.classList.remove('hidden');
                div.classList.add('zoom-in');
            }, parentAnimationDuration + i * 1000);
        });
        
        // Show next button after all images have been revealed
        const nextButton =  outerDiv.current.querySelectorAll('.next-buttons');
        setTimeout(() => {
            nextButton[0].classList.remove('btnhidden');

        }, parentAnimationDuration + teamDivs.length * 1000);
    }, [gameData]);
    return (
        <>
            <div className={containerSize} ref={outerDiv}>
                <div className='d-flex justify-content-center min-vh-100 flex-column'>
                    <div className="row">
                        {gameData.map((game, index) => (
                            <div className={`col-lg-${blockSize} mb-4`} key={index} data-aos="fade-up" data-aos-delay={`${index * 1000}`}>
                                <div className="card text-center card-hidden">
                                    <img src={game.playerImage}
                                        className="card-img-top rounded-circle mx-auto mt-3" alt="Person 1" />
                                    <div className="card-body">
                                        <h5 className="card-title text-white">{game.playerName}</h5>
                                        <div className="d-flex justify-content-around">
                                            {game.teams.map((team, teamIndex) => (
                                                <div className="hidden" key={teamIndex}>
                                                    <img src={team.logo} className="small-image" alt={team.team} />
                                                    <p className='text-white'>{team.team}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <button  className="btn btn-primary next-buttons mt-5 w-25 btnhidden">Next</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Random