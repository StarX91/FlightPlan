import React from "react";
import "./Card.css";
import location from "./photos/placeholder.png";
import leftarrow from "./photos/leftarrow.png";
import rightarrow from "./photos/rightarrow.png";

const options = [
  { label: "Way Points", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 3 },
];

const Card = () => {
  return (
    <div className="card">
      <div className="li">
        <div className="lin">
          <div className="dimen">
            <div className="height">
              <div>Latitude</div>
              <div className="btnsize" id="lat">
                70.45
              </div>
            </div>
            <div className="height">
              <div>Longtitude</div>
              <div className="btnsize" id="lon">
                23.45
              </div>
            </div>
            <div className="height" id="alt">
              <div>Altitude</div>
              <div className="btnsize" id="al">
                7m
              </div>
            </div>
          </div>

          <div className="cardl">
            <div className="cardline">
              <h4>Select Location</h4>
              <input
                className="loc"
                type="text"
                id="textInput"
                name="textInput"
                placeholder="Search Location"
              />
              <div className="cardltwo">
                <div className="cardlinetwo">
                  <div className="details">
                    <div className="flighttype">
                      <p>Select Flight Type</p>
                      <select className="waypoint">
                        {options.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="altitude">
                      <p>Altitude</p>
                      <input
                        type="text"
                        className="number"
                        alt=""
                        name="number"
                        placeholder="1000 m"
                      />
                    </div>
                    <div className="flightspeed">
                      <p>Flight Speed</p>
                      <input
                        type="text"
                        className="num"
                        alt=""
                        name="num"
                        placeholder="1000 Kph"
                      />
                    </div>
                  </div>
                  <div className="cardlthree">
                    <div className="cardlinethree">
                      <div className="rect">
                        <div className="missfen">
                          <button className="mission">Mission</button>

                          <button className="fence">Fence</button>
                        </div>
                        <div className="cardlfour">
                          <div className="cardlinefour">
                            <div className="wayp">
                              <div className="wp">Waypoints</div>
                              <div className="pagination">
                                <button className="prev">Prev</button>
                                <ul>
                                  <li className="link" value="1">
                                    1
                                  </li>
                                  <li className="link" value="2">
                                    2
                                  </li>
                                  <li className="link" value="3">
                                    3
                                  </li>
                                  <li className="link" value="4" id="four">
                                    4
                                  </li>
                                </ul>
                                <button className="nex">Next</button>
                              </div>
                            </div>
                            <div className="cardlfive">
                              <div className="cardlinefive">
                                <div className="latlong">
                                  <div className="latit">
                                    <p>Latitude</p>
                                    <input
                                      type="text"
                                      className="valone"
                                      alt=""
                                      placeholder="20.123213"
                                    ></input>
                                  </div>
                                  <div className="longti">
                                    <p>Longtitude</p>
                                    <input
                                      type="text"
                                      className="valtwo"
                                      alt=""
                                      placeholder="75.434"
                                    />
                                  </div>
                                </div>
                                <div className="altfly">
                                  <div className="altit">
                                    <p>Altitude (in meters)</p>
                                    <input
                                      type="text"
                                      className="valthree"
                                      alt=""
                                      placeholder="20.123213"
                                    ></input>
                                  </div>
                                  <div className="fligh">
                                    <p>Longtitude</p>
                                    <input
                                      type="text"
                                      className="valfour"
                                      alt=""
                                      placeholder="75.434"
                                    />
                                  </div>
                                </div>
                                <div className="button">
                                  <button className="next">Next</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
