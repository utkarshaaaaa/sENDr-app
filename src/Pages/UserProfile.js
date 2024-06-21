import React from "react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

import "../Design/profile.css";

export default function UserProfile() {
    
    const[userData,setUserData]=useState([])
    const[following,setFollowing]=useState(0)
    const[folllower,setFollower]=useState(null)
    const[post,setPost]=useState(0)

    useEffect(()=>{
        axios.get('http://localhost:3001/user_datatest2@gmail.com')
        .then(res=>setUserData(...res.data))
        .catch(err=>console.log(err))

        // setFollowing(userData.data.Following.length)
        // setFollower(userData.data.Follower.length)
        // setPost(userData.data.Following.length)

     

    },[])
    



    
  return (
    <>
    
      <div className="container">
        <div className="profile-header">
          <img
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt="Profile Picture"
            className="profile-pic"
          />
          <h1 className="username">Username</h1>
          <div className="stats">
            <div className="stat">
              <span className="number">150</span>
              <span className="label">Posts</span>
            </div>
            <div className="stat">
              <span className="number">3.5k</span>
              <span className="label">Followers</span>
            </div>
            <div className="stat">
              <span className="number">{following}</span>
              <span className="label">Following</span>
            </div>
          </div>
        </div>
        <div className="tab-menu">
          <button className="tab-link active" onclick="openTab(event, 'followers')">
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
        <div id="following" className="tab-content" >
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
