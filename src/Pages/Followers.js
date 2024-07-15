import "../Design/follower.css";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState } from "react";

export default function Followers() {
  const [arr, setArr] = useState([34, 23, 534, 12, 90,432,57,321,568,431,5]);

  const handleRemove = (id) => {
    const data = arr.filter((e, indx) => {
      return e !== arr[id];
    });
    setArr(data);

    console.log(data);
  };

  return (
    <>
      <div>
        <div className="col-3-follow">
          <div className="cardfollow">
            <div className="header-profile-follow">Followers</div>

            {arr.map((e, id) => {
              return (
                <div className="top-follow" id={id}>
                  <div className="userDetails">
                    <div className="profilepic-follow">
                      <div className="profile_img">
                        <div className="image-follow">
                          <img
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg"
                            alt="img12"
                            className="imageF"
                          />
                        </div>
                      </div>
                    </div>
                    <h3>
                      Aditya Verma {e}
                      <br />
                      <span>Posts 4</span>
                    </h3>
                  </div>
                  <div>
                    <a
                      className="follow-Follow"
                      onClick={() => {
                        handleRemove(id);
                      }}
                    >
                      Remove
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
