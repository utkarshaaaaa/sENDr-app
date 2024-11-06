import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState } from "react";
import "../Design/explore.css";

export default function Explore() {
  const [users, setusers] = useState([1, 2, 3, 5, 6, 7]);
  useEffect(() => {
    axios.get("http://localhost:3001/get_user_data").then((res) => {
      console.log(res.data.users);
      setusers([...res.data.users])

      
    }).catch((err)=>{console.log(err)});
  }, []);
  return (
    <>
    <div className="top-head">
        <div>
            Explore People
        </div>
    </div>

      <div class="cards-container">
        {users.map((userData,id) => {
          return (
            <div class="Profilecard">
              
               <img src={userData.profile_image}/>
              
              <div class="card__content">
                <p class="card__title">User Details</p>
                <br/>
                <ul>
                    <li>Name: {userData?.User_name}</li>
                    <li>Followers:{userData?.Followers?.length}   </li>
                    <li>Following:{userData?.Following?.length}</li>
                </ul>
               
                <button class="card__button">Follow</button>
                
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
