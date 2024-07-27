import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
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
    sharedPostData,
    setSharedPostData,
    logedUserEmail,setLogedUserEmail
  } = useContext(Data);

  const [followingData, setFollowingData] = useState({});
  const [handleSend, setHandleSend] = useState(true);

   console.log(JSON.stringify(sharedPostData),"from share page")

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getFollowingData${logedUserEmail}`)
      .then(
        (res) => (
          setFollowingData(res.data)
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const handleShare = (recieverEmail) => {
    axios
      .post(`http://localhost:3001/shared${recieverEmail}`,{
        shareData:sharedPostData,
        sendersEmail:logedUserEmail

      })
      .then((res) => {
        console.log(res.data,"shared data from shared api");
      })
      .catch((err) => {
        console.log(err);
      });
      
 
      // setHandleSend(!handleSend)
  };

  return (
    <>
    <NavBar/>
      <div>
        <div className="col-3-follow">
          <div className="cardfollow">
            <div className="header-profile-follow">Send Post </div>

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
                      <a className="follow-Follow" onClick={()=>{handleShare(e.email)}}>Send</a>
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
