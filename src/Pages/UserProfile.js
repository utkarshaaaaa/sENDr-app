import React from "react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

import "../Design/profile.css";
import Followers from "./Followers";

export default function UserProfile() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user_datatest2@gmail.com")
      .then((res) => {
        setUserData([res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(userData);

  return (
    <>
      {userData.map((details, id) => {
        return (
          <div className="container">
            <div className="profile-header">
              <img
                src={details.data.profile_image}
                alt="Profile Picture"
                className="profile-pic"
              />
              <h1 className="username">{details.data.User_name}</h1>
              <div className="stats">
                <div className="stat">
                  <span className="number">
                    {details.data.post_details.length}
                  </span>
                  <span className="label">Posts</span>
                </div>
                <div className="stat">
                  <span className="number">
                    {details.data.Followers.length}
                  </span>
                  <span className="label">Followers</span>
                </div>
                <div className="stat">
                  <span className="number">
                    {details.data.Following.length}
                  </span>
                  <span className="label">Following</span>
                </div>
              </div>
            </div>
            <div className="tab-menu">
              <button
                className="tab-link active"
                onclick="openTab(event, 'followers')"
              >
                Share Profile
              </button>
              <button
                className="tab-link"
                onclick="openTab(event, 'following')"
              >
                Reach
              </button>
            </div>
            <div id="followers" className="tab-content">
              <div className="user">
                <img
                  src="follower1.jpg"
                  alt="Follower 1"
                  className="user-pic"
                />
                <span className="user-name">Follower 1</span>
                <button className="follow-btn">Follow</button>
              </div>
              <div className="user">
                <img
                  src="follower2.jpg"
                  alt="Follower 2"
                  className="user-pic"
                />
                <span className="user-name">Follower 2</span>
                <button className="follow-btn">Follow</button>
              </div>
            </div>
            <div id="following" className="tab-content">
              <div className="user">
                <img
                  src="following1.jpg"
                  alt="Following 1"
                  className="user-pic"
                />
                <span className="user-name">Following 1</span>
                <button className="unfollow-btn">Unfollow</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
