import React from "react";
import style from "./card.module.css";
function CustomCard() {
  return (
    <>
      <div className={`${style.e_card} ${style.playing}`}>
        <div className={style.image}></div>

        <div className={style.wave}></div>
        <div className={style.wave}></div>
        <div className={style.wave}></div>

        <div className={style.infotop}>
          <div>
            <div className="row">
              <div className="col-lg-5 text-center">
                <img
                  src="https://gramotech.net/html/tigers/images/mlogo1.png"
                  className={style.teamImage}
                  alt=""
                />
                <p className={style.teamName}>FC Champs</p>
              </div>
              <div className="col-lg-2 text-center">
                <span className="badge badge-pill badge-primary">VS</span>
              </div>
              <div className="col-lg-5 text-center">
                <img
                  src="https://gramotech.net/html/tigers/images/mlogo1.png"
                  className={style.teamImage}
                  alt=""
                />
                <p className={style.teamName}>Tigers</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5 text-dark">
            <h6 className="text-danger">SUPER EURO LEAGUE</h6>
            <div>20 Jun, 2024</div>
            <div>04:00 PM GMT+6</div>
            <div className="text-danger">New Expo Stadium, NYK</div>
          </div>
          <div className="d-flex justify-content-around mt-5">
            <button className="btn btn-primary">Details</button>
            <button className="btn btn-success">Buy Ticket</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomCard;
