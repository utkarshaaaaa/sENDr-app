import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import NavBar from "./NavBar";
import "../Design/inBox.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function InboxData() {
  const {
    setUserId,
    sharedPostData,
    setSharedPostData,
    logedUserEmail,
    setLogedUserEmail,
  } = useContext(Data);

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    setLogedUserEmail("test1@gmail.com");

    setTimeout(() => {
      axios
        .get(`http://localhost:3001/getSharedData${logedUserEmail}`)

        .then((res) => {
          console.log(res.data.postData);
          setPostData(...res.data.postData);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 100);
  }, []);
  console.log(logedUserEmail, "email");

  console.log(postData.length,"lengthhhhhhh")
  return (
    <>
      <NavBar />
      {postData.length == 0 ? (
        <div>Empty Inbox</div>
      ) : (
        <div>
          {postData.map((e) => {
            return (
              <div className="inBox-container">
                <div className="inbox-item">
                  <div className="sender-info">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Sender Avatar"
                      className="sender-avatar"
                    />
                    <span className="sender-name">Jane Smith</span>
                  </div>
                  <div className="post-data">
                    <div className="post-header">
                      <img
                        src={e.senderPic }
                        alt="Post User Avatar"
                        className="post-avatar"
                      />
                      <span className="post-username">John Doe</span>
                    </div>
                    <div className="post-content">
                      <p>
                        {e.postDec}
                      </p>
                      <div className="timestamp">2 hours ago</div>
                    </div>
                    <div className="post-actions">
                      Send By <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"alt="Post User Avatar"
                        className="post-avatar"/>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
