import React from 'react'
import styled from './card.module.css'

function CustomCard3({ data }) {
  console.log(data)
  return (
    <>
      <div className={styled.card}>
        <div className={styled.card_info}>
          <div>
            <div className="row pt-5">
              <div className="col-lg-5 text-center">
                <img
                  src={data?.team_home?.logo}
                  className={styled.teamImage}
                  alt=""
                />
                <div className={styled.teamName}>{data?.team_home?.name}</div>
                <div className={styled.playerName}>{data?.player_home?.name}</div>

                
                <div className="row">
                  <div className="col-lg-6">
                    <div className={styled.skill}>Skill</div>
                    <div className={styled.skillValue}>{data?.player_home?.skill}</div>
                  </div>
                  <div className="col-lg-6">
                    <div className={styled.skill}>Skill</div>
                    <div className={styled.skillValue}>{data?.player_home?.skill}</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 text-center">
                <span className="badge badge-pill badge-primary">VS</span>
              </div>
              <div className="col-lg-5 text-center">
                <img
                  src={data?.team_away?.logo}
                  className={styled.teamImage}
                  alt=""
                />
                <div className={styled.teamName}>{data?.team_away?.name}</div>
                <div className={styled.playerName}>{data?.player_away?.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomCard3