import React from "react";

export const Presidents = (props) => {
  return (
    <div id="presidents" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Presidents</h2>
          <p>
            Get to know the leaders of our club who guide us with passion and dedication.
          </p>
        </div>
        <div className="row">
          {props.data && props.data.length > 0 ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-6 col-sm-6 team">
                <div className="thumbnail">
                  <img src={d.img} alt={d.name} className="team-img" />
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
