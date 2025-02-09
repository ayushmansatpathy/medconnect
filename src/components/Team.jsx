import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Team = (props) => {
  function myfunction() {
    console.log("hero")
  }
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Meet the Eboard!
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                <div className="thumbnail">
                  {" "}
                  <Popup trigger={<button><img src={d.img} alt="..." className="team-img" onClick={myfunction} /></button>} modal>
                    <div>
                      <h1>{d.name}</h1>
                      <p>{d.email}</p>
                      <p>{d.job}</p>
                      <p>About: {d.about}</p>
                    </div>
                  </Popup>
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
