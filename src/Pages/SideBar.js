import React from "react";

import { Link } from "react-router-dom";
import "../Design/sidebar.css";

export default function SideBar() {
  return (
    <>
      <div class="nav-symbol">☰</div>
      <div class="navbar">
         
      <a href='/'class="nav-item">Home</a>
        
          <a href='/followers'class="nav-item">Followers</a>
       

        <a class="nav-item">Posts</a>
        <a class="nav-item">Saved</a>
        <a  href='/UserProfile'class="nav-item">Profile</a>
      </div>
    </>
  );
}
