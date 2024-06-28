import React from "react";

import { Link } from "react-router-dom";
import "../Design/sidebar.css";

export default function SideBar() {
  return (
    <>
      <div class="nav-symbol">☰</div>
      <div class="navbar">
        <a href="#home" class="nav-item">
          Home
        </a>
        <a href="#services" class="nav-item">
          Followers
        </a>
        <a href="#about" class="nav-item">
          Posts
        </a>
        <a href="#contact" class="nav-item">
          Saved
        </a>
      </div>
    </>
  );
}
