import React from "react";

interface IProps {
  setInfo : (i:boolean) => void;
}

export const Info : React.FC<IProps> = ({setInfo}) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="list-group">
              <a
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start active"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Confessions</h5>
                </div>
                <p className="mb-1">
                  When you just want to vent, spill out your heart and never look back, the Confessions section is for you !
                </p>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Advice</h5>
                </div>
                <p className="mb-1">
                  Something happened and you want to know what you should do? We will answer with advice !
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};
