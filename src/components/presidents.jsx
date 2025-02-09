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
            Get to know the leaders of our club who guide us with passion and dedication.
          </p>
        </div>
        <div className="row">
          {props.data && props.data.length > 0 ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-4">
                <div>
                  <Popup trigger={<button><img src={d.img} alt={d.name} className="team-img" /></button>} modal>
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </Popup>
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading presidents' details...</p>
          )}
        </div>
      </div>
    </div>
  );
};
