import "../Design/follower.css";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Data } from "../context/Context";
import "../Design/follower.css";
import { useEffect, useState } from "react";

export default function Following() {
  const [followingDetails, setfollowingDetails] = useState([]);

  useEffect(() => {
    const getFollowing = () => {
   

      axios
        .get(`http://localhost:3001/getFollowingtest1@gmail.com`) //static data till the login
        .then((res) => {
          setfollowingDetails(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getFollowing();
  }, []);

  const handleUnfollow = (id) => {
    const data = followingDetails.filter((e, indx) => {
      return e != followingDetails[id];
    });
    setfollowingDetails(data);

    console.log(data);
  };

  return (
    <>
      <div>
        <div className="col-3-follow">
          <div className="cardfollow">
            <div className="header-profile-follow">Following</div>

            {followingDetails.map((e, id) => {
              return (
                <div className="top-follow" id={id}>
                  <div className="userDetails">
                    <div className="profilepic-follow">
                      <div className="profile_img">
                        <div className="image-follow">
                          <img
                            src={e.pic}
                            alt="img12"
                            className="imageF"
                          />
                        </div>
                      </div>
                    </div>
                    <h3>
                     {e.userName}
                      <br />
                      <span>Posts 4</span>
                    </h3>
                  </div>
                  <div>
                    <a
                      className="follow-Follow"
                      onClick={() => {
                        handleUnfollow(id);
                      }}
                    >
                      Unfollow
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
