import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Design/sharePage.css";

export default function ShareTo() {
  const {
    email,
    setEmail,
    individualPostId,
    setIndividualPostId,
    arr,
    setArr,
    userId,
    setUserId,
    sharedPostData,setSharedPostData
  } = useContext(Data);

  const [followingData, setFollowingData] = useState({});
  const [handleSend, setHandleSend] = useState(true);

  console.log(email);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getFollowingData${email}`)
      .then(
        (res) => (
          setFollowingData(res.data), console.log(res.data, "dataaaaaaa")
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const handleShare=()=>{

    

  }

  return (
    <>
      <div>
        <div className="col-3-follow">
          <div className="cardfollow">
            <div className="header-profile-follow">Send Posts</div>

            {(followingData.length = 0 ? <div></div> : <div></div>)}

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
                      {e.email}
                      <br />
                      <span></span>
                    </h3>
                  </div>
                  <div>
                    {handleSend ? (
                      <a className="follow-Follow" >Send</a>
                    ) : (
                      <a className="follow-Follow">Unsend</a>
                    )}
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
