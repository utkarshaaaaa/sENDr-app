import React from "react";
import "../Design/topBar.css";

export default function NavBar({handleInbox}) {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">sENDr</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/add-post-icon-line-icon_707519-2569.jpg"
                  className="post"
                />
              </div>
              <div>
                
              </div>
            </div>
            <div className="topbarIconContainer">
            <button class="inbox-btn" onClick={handleInbox}>
                  <svg
                    viewBox="0 0 512 512"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                  </svg>
                  <span class="msg-count">99</span>
                </button>
            </div>
            <div className="topbarIconContainer"></div>
            <img
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              alt=""
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
