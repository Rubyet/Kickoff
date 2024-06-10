import React from "react";
import style from "./fixtures.module.css";
import CustomCard from "../../component/card/card_1/CustomCard";
import CustomCard2 from "../../component/card/card_2/CustomCard";

function Fixtures() {
  return (
    <>
      <div className={style.fixtureBg}>
        <div className="d-flex justify-content-center min-vh-100 flex-column">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <CustomCard />
              </div>
              <div className="col-md-4">
                <CustomCard2 />
              </div>
              <div className="col-md-4">
                <div className={style.card}>
                  <div className={`${style.cardHeader}`}>
                    <h5 className={style.cardHeaderText}>Point Table</h5>
                  </div>
                  <div className="card-body">
                    <table className="table table-sm table-responsive-lg">
                      <thead>
                        <tr>
                          <th scope="col">Rank</th>
                          <th scope="col">Team</th>
                          <th scope="col">Played</th>
                          <th scope="col">Won</th>
                          <th scope="col">Drawn</th>
                          <th scope="col">Lost</th>
                          <th scope="col">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>FC Champs</td>
                          <td>10</td>
                          <td>8</td>
                          <td>1</td>
                          <td>1</td>
                          <td>25</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Tigers</td>
                          <td>10</td>
                          <td>7</td>
                          <td>2</td>
                          <td>1</td>
                          <td>23</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>FC Champs</td>
                          <td>10</td>
                          <td>6</td>
                          <td>2</td>
                          <td>2</td>
                          <td>20</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>FC Champs</td>
                          <td>10</td>
                          <td>5</td>
                          <td>3</td>
                          <td>2</td>
                          <td>18</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>FC Champs</td>
                          <td>10</td>
                          <td>4</td>
                          <td>3</td>
                          <td>3</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>FC Champs</td>
                          <td>10</td>
                          <td>3</td>
                          <td>3</td>
                          <td>4</td>
                          <td>12</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fixtures;
