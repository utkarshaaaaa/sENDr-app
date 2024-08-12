import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import { FiSend } from "react-icons/fi";

import NavBar from "./NavBar";
import "../Design/follower.css";

export default function ShareTo() {
  const {
    sharedPostData,
    setSharedPostData,
    logedUserEmail,
    setLogedUserEmail,
    getPostUserName,
    setPostUserName,
    getPostImagetUserName,
    setPostImageUserName,
  } = useContext(Data);

  const [followingData, setFollowingData] = useState({});
  const [sentStatus, setSentStatus] = useState({});

  console.log(JSON.stringify(sharedPostData), "from share page");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getFollowingData${logedUserEmail}`)
      .then((res) => setFollowingData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleShare = (recieverEmail) => {
    const receiverEmail = recieverEmail;
    axios
      .post(`http://localhost:3001/shared${recieverEmail}`, {
        shareData: sharedPostData,
        sendersEmail: logedUserEmail,
        postUserName:getPostUserName,
        postUserProfileImage:getPostImagetUserName
        
      })
      .then((res) => {
        console.log(res.data, "shared data from shared api");

        setSentStatus((prevState) => ({
          ...prevState,
          [receiverEmail]: true,
        }));
      })
      .catch((err) => {
        console.log(err);
      });

 
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="col-3-follow">
          <div className="cardfollow">
            <div className="header-profile-follow">Send Post   <FiSend/> </div>

            {followingData.length == 0 ? (
              <div>No Followers</div>
            ) : (
              <div>
                {followingData.data?.map((e, id) => {
                  return (
                    <div className="top-follow" id={id}>
                      <div className="userDetails">
                        <div className="profilepic-follow">
                          <div className="profile_img">
                            <div className="image-follow">
                              <img
                                src={e.pic}
                                alt="user Image"
                                className="imageF"
                              />
                            </div>
                          </div>
                        </div>
                        <h3>
                          {e.userName}
                      
                          <br />
                          <span></span>
                        </h3>
                      </div>
                      <div>
                        {sentStatus[e.email] ? (
                          <a className="follow-Follow-Sent">Sent</a>
                        ) : (
                          <a
                            className="follow-Follow"
                            onClick={() => handleShare(e.email)}
                          >
                            Send
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
