import React, { Fragment, useState, useEffect } from "react";
import "bootswatch/dist/sketchy/bootstrap.min.css";
import "./styles.css";
import { IAdvice } from "../models/advice";
import axios from "axios";
import { NavBar } from "../../features/nav/NavBar";
import { Intro } from "../../features/home/Intro";
import { Info } from "../../features/home/Info";
import agent from "../api/agent";

const App = () => {
  const [advices, setAdvices] = useState<IAdvice[]>([]);
  const [info, setInfo] = useState(false);

  //handlers to make about advice & pass down to the right components
  // const handleSelectActivity = (id : string) => {
  //   setSelectedActivity(activities.filter(a=>a.id === id)[0])
  //   setEditMode(false);
  // }

  // const handleOpenCreateForm = () => {
  //   setSelectedActivity(null);
  //   setEditMode(true);
  // }

  // const handleCreateActivity  = (activity : IActivity) => {
  //   setSubmitting(true);
  //   agent.Activities.create(activity).then(() => {
  //     setActivities([...activities, activity])
  //     setSelectedActivity(activity);
  //     setEditMode(false);
  //   }).then(() => setSubmitting(false));
  // }

  // const handleEditActivity = (activity : IActivity) => {
  //   setSubmitting(true);
  //   agent.Activities.update(activity).then(() => {
  //     setActivities([...activities.filter(a => a.id !== activity.id), activity])
  //     setSelectedActivity(activity);
  //     setEditMode(false);
  //   }).then(() => setSubmitting(false));

  // }

  // const handleDeleteActivity = (event : SyntheticEvent<HTMLButtonElement>, id : string) => {
  //   setSubmitting(true);
  //   setTarget(event.currentTarget.name);
  //   agent.Activities.delete(id).then(() => {
  //     setActivities([...activities.filter(a=> a.id !== id)])
  //   }).then(() => setSubmitting(false));
  // }


  useEffect(() => {
    //<> is return type
    agent.Advices.list()
    .then((response) => {
      let advices: IAdvice[] = [];
      response.forEach((advice) => {
        advice.date = advice.date.split(".")[0];
        advices.push(advice);
      });
      setAdvices(advices);
    })
  }, []);

  return (
    <Fragment>
      <NavBar />
      <br />
      {
        !info && (
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <Intro setInfo={setInfo} />
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        )
      }
      { info && (
              <Info setInfo={setInfo} />
      )}
      <br />
      <br />
    </Fragment>
  );
};

export default App;
