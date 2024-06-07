import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../component/include/Navbar/NavBar'
import style from './home.module.css'

function Home() {
  return (
    <>
      {/* <NavBar /> */}

      {/* <div className="container">
        <div className="d-flex justify-content-center min-vh-100 flex-column">
          <div className="row">
            <div className="col">
              <h1>Home</h1>
              <Link to="/" className="btn btn-primary">Player Info</Link>
            </div>
            <div className="col">
              <h1>Home</h1>
              <Link to="/" className="btn btn-primary">Teams</Link>
            </div>
            <div className="col">
              <h1>Home</h1>
              <Link to="/" className="btn btn-primary">Game History</Link>
            </div>
            <div className="col">
              <h1>Home</h1>
              <Link to="/" className="btn btn-primary">Kick Off</Link>
            </div>
          </div>
        </div>
      </div> */}


      <div className="container">
        <div>
          <div id={style.upper}>
            <h1>FOOTBALL<span style={{ color: "red" }}>24</span></h1>
          </div>
        </div>

        <nav>
          <ul>
            <li className={`${style.main} ${style.left}`}><span>HOME</span></li>
            <li className={style.main}><span>PLAY</span></li>
            <li className={style.main}><span>FOOTBALL CLUB</span></li>
            <li className={style.main}><span>CUSTOMISE</span></li>
          </ul>
        </nav>

        <div id={style.menu_wrapper}>
          <section id={style.big_menu}>
            <div className="d-flex flex-row">
              <div className={`p-2 ${style.item} ${style.first}`}>
                <h3>Player Info</h3>
              </div>
              <div className={`p-2 ${style.item} ${style.second}`}>
                <h3>Teams</h3>
              </div>
            </div>
            <div className="d-flex flex-row">
              <Link to="/" className={`p-2 ${style.item} ${style.third}`}>
                <h3>Game History</h3>
              </Link>
              <Link to="/kickoff" className={`p-2 ${style.item} ${style.forth}`}>
                <h3>Kick Off</h3>
              </Link>
            </div>
            {/* <div className="d-flex flex-row">
              <div className={`p-2 ${style.item} ${style.fifth}`}>
                <h3>PRO CLUBS</h3>
              </div>
              <div className={`p-2 ${style.item} ${style.sixth}`}>
                <h3>ONLINE<br /> FRIENDLIES</h3>
              </div>
              <div className={`p-2 ${style.item} ${style.seventh}`}>
                <h3>SKILL GAMES</h3>
              </div>
              <div className={`p-2 ${style.item} ${style.last}`}>
                <h3>+ MORE</h3>
              </div>
            </div> */}
          </section>

        </div>
      </div>
    </>
  )
}

export default Home