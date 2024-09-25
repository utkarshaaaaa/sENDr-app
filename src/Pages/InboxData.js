import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import "../Design/inBox.css";


export default function InboxData() {
  const { logedUserEmail, setLogedUserEmail } = useContext(Data);

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    setLogedUserEmail("test1@gmail.com"); //static data until login is done

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
    }, 1250);
  }, []);

  return (
    <>
     
      <div class="inbox-container">Inbox Messages</div>
      {postData.length == 0 ? (
        <div class="empty-inbox">
          <h2>Empty Inbox</h2>
          <p>You have no messages at the moment. Check back later!</p>

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
          {postData.map((e) => {
            return (
              <div className="inBox-container">
                <div className="inbox-item">
                  <div className="sender-info">
                    <img
                      src={e.senderPic}
                      alt="Sender Avatar"
                      className="sender-avatar"
                    />

                    <span className="sender-name">{e.senderName}</span>
                  </div>
                  <div className="post-data">
                    <div className="post-header">
                      <br />
                      <img
                        src={e.postUserProfileImage}
                        alt="Post User Avatar"
                        className="post-avatar"
                      />
                      <span className="post-username">{e.postUserName}</span>
                    </div>
                    <div className="post-content">
                      <p>{e.postDec}</p>
                    </div>
                    <div className="post-actions"></div>
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
