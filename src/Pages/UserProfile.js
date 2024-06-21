import React from "react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

import "../Design/profile.css";
import Followers from "./Followers";

export default function UserProfile() {
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");
  const [following, setFollowing] = useState(0);
  const [folllower, setFollower] = useState(0);
  const [post, setPost] = useState(0);
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {

      setTimeout(() => {

         axios
      .get("http://localhost:3001/user_datatest2@gmail.com")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
        
      }, 1);
  }, []);

  useEffect(()=>{

    setTimeout(()=>{
        updateData()

    },1000)
    

  },[userData])

  const updateData = () => {
    setFollowing(userData.data.Following.length);
    setFollower(userData.data.Followers.length);
    setPost(userData.data.post_details.length);
    setUserName(userData.data.User_name);
    setProfileImage(userData.data.profile_image)
  };
  console.log(userData)

  return (
    <>
      <div className="container">
        <div className="profile-header">
          <img
            src={profileImage}
            alt="Profile Picture"
            className="profile-pic"
          />
          <h1 className="username">{userName}</h1>
          <div className="stats">
            <div className="stat">
              <span className="number">{post}</span>
              <span className="label">Posts</span>
            </div>
            <div className="stat">
              <span className="number">{folllower}</span>
              <span className="label">Followers</span>
            </div>
            <div className="stat">
              <span className="number">{following}</span>
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
          <button className="tab-link" onclick="openTab(event, 'following')">
            Reach
          </button>
        </div>
        <div id="followers" className="tab-content">
          <div className="user">
            <img src="follower1.jpg" alt="Follower 1" className="user-pic" />
            <span className="user-name">Follower 1</span>
            <button className="follow-btn">Follow</button>
          </div>
          <div className="user">
            <img src="follower2.jpg" alt="Follower 2" className="user-pic" />
            <span className="user-name">Follower 2</span>
            <button className="follow-btn">Follow</button>
          </div>
        </div>
        <div id="following" className="tab-content">
          <div className="user">
            <img src="following1.jpg" alt="Following 1" className="user-pic" />
            <span className="user-name">Following 1</span>
            <button className="unfollow-btn">Unfollow</button>
          </div>
        </div>
      </div>
    </>
  );
}
