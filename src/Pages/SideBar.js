import React from "react";
import { useEffect, useState, useContext } from "react";
import "../Design/sidebar.css";

export default function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);



  const handleMouseEnter = () => {
    setMenuHovered(true);
  };

  const handleMouseLeave = () => {
    setMenuHovered(false);
  };

    
  
  return (
    <>
      {/* <div className="nav-symbol">☰</div> */}

      <div
        className={`container-sidebar ${menuHovered ? 'change' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    
      <div className="navbar">
        <a href="/" className="nav-item">
          Home
        </a>

        <a href="/followers" className="nav-item">
          Followers
        </a>

        <a className="nav-item" href="/">
          Posts
        </a>
        <a className="nav-item" href="/">
          Saved
        </a>
        <a href="/UserProfile" className="nav-item">
          Profile
        </a>
      </div>
    </>
  );
}
