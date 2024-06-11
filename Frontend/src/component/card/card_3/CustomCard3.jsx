import React from 'react'
import styled from './card.module.css'

function CustomCard3() {
  return (
    <>
      <div className={styled.card}>
        <div className={styled.card_info}>
          {/* <p className={styled.title}>Magic Card</p> */}
          <div>
            <div className="row">
              <div className="col-lg-5 text-center">
                <img
                  src="https://gramotech.net/html/tigers/images/mlogo1.png"
                  className={styled.teamImage}
                  alt=""
                />
                <p className={styled.teamName}>FC Champs</p>
              </div>
              <div className="col-lg-2 text-center">
                <span className="badge badge-pill badge-primary">VS</span>
              </div>
              <div className="col-lg-5 text-center">
                <img
                  src="https://gramotech.net/html/tigers/images/mlogo1.png"
                  className={styled.teamImage}
                  alt=""
                />
                <p className={styled.teamName}>Tigers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomCard3