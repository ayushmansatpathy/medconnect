import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Presidents = (props) => {
  return (
    <div id="presidents" >
      <div className="container">
        <div className="section-title text-center">
          <h2>Meet the Presidents</h2>
          <p>
            Introducing the Presidents Who Make Our Club Thrive
          </p>
        </div>
        <div className="row">
          {props.data && props.data.length > 0 ? (
            props.data.map((d, i) => (
              <div className="col-md-3" key={`${d.name}-${i}`}>
                <Popup trigger={<button><img src={d.img} alt={d.name} className="team-img" /></button>} modal>
                  <div className="caption">
                    <h3>{d.name}</h3>
                    <p>{d.job}</p>
                  </div>
                </Popup>
                <div className="caption">
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading presidents' details...</p>
          )}
          <img className="blurb col-md-6" src="img/blurb.png" alt="herro" />

        </div>
      </div>
    </div>
  );
};
