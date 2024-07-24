import React from "react";

import { Link } from "react-router-dom";
import "../Design/sidebar.css";

export default function SideBar() {
  return (
    <>
      <div className="nav-symbol">☰</div>
      <div className="navbar">
         
      <a href='/'className="nav-item">Home</a>
        
          <a href='/followers'className="nav-item">Followers</a>
       

        <a className="nav-item">Posts</a>
        <a className="nav-item">Saved</a>
        <a  href='/UserProfile'className="nav-item">Profile</a>
        <a  href='/'className="nav-item">In Box</a>
      </div>
    </>
  );
}
