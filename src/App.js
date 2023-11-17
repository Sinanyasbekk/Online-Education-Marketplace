//import "./App.css";
import React from "react";
import Register from "./Register";
import MyProfile from "./MyProfile";
import MainComponent from "./MainComponent";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div>
      <MainComponent />{" "}
      {/* Render MainComponent to toggle between Register and MyProfile */}
      {/* Render MyProfile directly here */}
      {/* <MyProfile /> */}
      <li></li>
    </div>
  );
};

export default App;
