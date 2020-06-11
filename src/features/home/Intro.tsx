import React from "react";
import { Info } from "./Info";

export const Intro = () => {
  const pad: React.CSSProperties = {
    padding: "10px",
    margin: "10px",
  };
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-3">Tell us everything!</h1>
        <p className="lead">
          Warm welcome to you, internet wanderer. If you're here, it means you
          have something on your mind...
        </p>
        {/* <hr className="my-4" /> */}
        <p>
          You're at the right place. Whether you only need to vent, or youwant
          genuine advice, completely anonymously, we have your back.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-8">
              <p>
                <button type="button" className="btn btn-outline-success" style={pad}>
                  More Info
                </button>
                <button type="button" className="btn btn-outline-info" style={pad}>
                  Advice Section
                </button>
                <button type="button" className="btn btn-outline-danger" style={pad}>
                  Confession Section
                </button>
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
