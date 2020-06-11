import React, { Fragment, useState, useEffect } from "react";
import "bootswatch/dist/sketchy/bootstrap.min.css";
import "./styles.css";
import { IAdvice } from "../models/advice";
import axios from "axios";
import { NavBar } from "../../features/nav/NavBar";
import { Intro } from "../../features/home/Intro";
import { Info } from "../../features/home/Info";

const App = () => {
  const [advices, setAdvices] = useState<IAdvice[]>([]);

  useEffect(() => {
    //<> is return type
    axios
      .get<IAdvice[]>("http://localhost:5000/api/advices")
      .then((response) => {
        let advices: IAdvice[] = [];
        response.data.forEach((advice) => {
          advice.date = advice.date.split(".")[0];
          advices.push(advice);
        });
        setAdvices(advices);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <Intro />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <Info />
      <br/>
      <br/>
    </Fragment>
  );
};

export default App;
