import React from "react";
import { useEffect, useState, useContext } from "react";
import "../Design/sidebar.css";
import { ImHome3 } from "react-icons/im";
import { HiMiniUsers } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";

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
        className={`container-sidebar ${menuHovered ? "change" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <div className="navbar">
        <a href="/" className="nav-item">
         <ImHome3/> Home
        </a>

        <a href="/followers" className="nav-item">
        
          <HiMiniUsers/> Followers
        </a>

        <a className="nav-item" href="/">
       
        <MdLocalPostOffice className="post-icon"/> Posts
        
        </a>
        {/* <a className="nav-item" href="/">
          Saved
        </a> */}
        <a href="/UserProfile" className="nav-item">
         <FaRegUserCircle/> Profile
        </a>
      </div>
    </>
  );
}
