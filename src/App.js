import "./App.css";
import axios from "axios";
import FrontPage from "./Pages/FrontPage";
import SideBar from "./Pages/SideBar";
import NavBar from "./Pages/NavBar";
import Menu from "./Pages/Menu";
import Followers from "./Pages/Followers";
import { useEffect, useState, useContext } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FrontPage />

      <SideBar />

      {/* <br/>
      <Menu/> 
      */}
      {/* <Followers /> */}
    </div>
  );
}

export default App;
