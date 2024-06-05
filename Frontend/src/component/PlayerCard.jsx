import React, { useEffect, useRef, useState } from 'react'
import style from './playerCard.module.css'

function PlayerCard(props) {
    console.log(props)
    const [bgImage, setBgImage] = useState('https://i.imgur.com/tUk5SC0.png');

    useEffect(() => {
    }, [])

    return (
        <>
            <div className={`${style.fifa_card} ${style.front}`}>
                <div className={style.bg} style={{ backgroundImage: `url('${bgImage}')` }}></div>
                <div className={style.status}>
                    <span className={style.lvl}>99</span>
                    {/* <span className={style.pos}>ST</span> */}
                    <span className={style.country}></span>
                    {/* <span className={style.team}></span> */}
                </div>
                <div className={style.player} style={{ backgroundImage: `url('${props?.data?.playerImage}')` }}></div>
                <div className={style.details}>
                    <h2><span className={style.underline}>{props?.data?.playerName}</span></h2>
                    <div className={style.area_attr}>
                        {props?.data?.teams?.map((team, index) => (
                            <div className={`${style.attr}`} key={index}>
                                <img src={team?.logo} className={`${style.teamImage}`} />
                                <p className={style.teamName}>{team?.team}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`${style.fifa_card} ${style.back}`}>
                <div className={style.bg} style={{ backgroundImage: `url('${bgImage}')` }}></div>
                <div className={style.fifalogo}></div>
            </div>
        </>
    )
}

export default PlayerCard