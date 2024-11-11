import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState } from "react";
import "../Design/explore.css";

export default function Explore() {
  const [users, setusers] = useState([]);
  const [userFollowing, setUserFollowing] = useState([]);
  const [storedDFollowinng, setStoredFollowing] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3001/get_user_data")
      .then((res) => {
        console.log(res.data.users);
        setusers([...res.data.users]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getFollowingEmail = (e, userEmail, userData) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/user_Followingtest1@gmail.com`) //static data for now
      .then((res) => {
        setUserFollowing(res.data.Following);

        let uf = userFollowing.find(function (val, indx) {
          return val.email === userEmail;
        });
        console.log(uf.email);
        if (uf.email != userEmail || uf!=undefined) {
          axios
            .post(`http://localhost:3001/followingtest1@gmail.com`, {
              //static for now
              userEmail: userEmail,
            })
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("U are following !!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="top-head">
        <div>Explore People</div>
      </div>

      <div class="cards-container">
        {users.map((userData, id) => {
          return (
            <div class="Profilecard">
              <img src={userData.profile_image} />

              <div class="card__content">
                <p class="card__title">User Details</p>
                <br />
                <ul>
                  <li>Name: {userData?.User_name}</li>
                  <li>Followers:{userData?.Followers?.length} </li>
                  <li>Following:{userData?.Following?.length}</li>
                </ul>

                {/* {
                let arr = [
                  { name:"string 1", value:"this", other: "that" },
                  { name:"string 2", value:"this", other: "that" }
              ];
              
              let obj = arr.find(o => o.name === 'string 1');
              
              console.log(obj);
              
               } */}

                <button
                  onClick={(e) => {
                    getFollowingEmail(e, userData?.email, userData);
                  }}
                >
                  Follow
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
