import React, { Fragment } from "react";
import "./App.module.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Resources from "./Pages/Resources";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";
import Team from "./Pages/Team";
import AddNewEvent from "./Pages/AddNewEvent";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/addnewevent" element={<AddNewEvent />}></Route> 
      </Routes>
    </Fragment>
  );
}

export default App;
