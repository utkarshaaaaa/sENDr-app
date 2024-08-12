import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../Design/profile.css";
import Followers from "./Followers";

export default function UserProfile() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user_datatest1@gmail.com")//static data till login
      .then((res) => {
        setUserData([res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

 

  return (
    <>
      {userData.length == 0 ? (
        <div>
          <div class="dot-spinner">
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
          </div>
        </div>
      ) : (
        <div>
          {userData.map((details, id) => {
            return (
              <div className="containerProfile">
                <div className="profile-header-profile">
                  <img
                    src={details.data.profile_image}
                    alt="Profile Picture"
                    className="profile-pic-user"
                  />
                  <h1 className="username">{details.data.User_name}</h1>
                  <div className="stats-user">
                    <div className="stat-user">
                      <span className="number">
                        {details.data.post_details.length}
                      </span>
                      <span className="label">Posts</span>
                    </div>
                    <div className="stat-user">
                      <Link to="/followers">
                        <span className="number">
                          {details.data.Followers.length}
                        </span>
                        <span className="label">Followers</span>
                      </Link>
                    </div>
                    <Link to="/following">
                      <div className="stat-user">
                        <span className="number">
                          {details.data.Following.length}
                        </span>
                        <span className="label">Following</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="tab-menu">
                  <button
                    className="tab-link active"
                    onclick="openTab(event, 'followers')"
                  >
                    Share Profile
                  </button>
                  <button className="tab-link">Reach</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
