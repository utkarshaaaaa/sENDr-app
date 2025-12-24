import React from "react";
import "../Design/inBox.css";
import { Data } from "../context/Context";
function GetInboxUserPost(props) {
  const { e } = props;
  return (
    <>
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
    </>
  );
}

export default GetInboxUserPost;
