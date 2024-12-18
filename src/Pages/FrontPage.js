import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import NavBar from "./NavBar";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Design/frontPage.css";

export default function FrontPage() {
  const [data, setData] = useState([]);
  const [likesHandle, setLikesHndle] = useState(true);
  const [handlePostId, sethandlePostId] = useState(0);
  const [LikeStatus, setLikeStatus] = useState({});
  const {
    setEmail,
    setIndividualPostId,
    setUserId,
    sharedPostData,
    setSharedPostData,
    setLogedUserEmail,

    setPostImageUserName,

    setPostUserName,
  } = useContext(Data);

  const navigate = useNavigate();

  function navigateToCommentSection(Email, postId, userId) {
    setEmail(Email);
    setLogedUserEmail("test1@gmail.com"); //static data will be dong it dynamically after login signup page
    setIndividualPostId(postId);
    setUserId(userId);

    navigate("/comments", { state: { Email: Email, postId: postId } });
  }

  const navigateToSharePage = (Email, shareData, postData) => {
    setSharedPostData(shareData);
    setPostUserName(postData.User_name);
    setPostImageUserName(postData.profile_image);
    setLogedUserEmail("test1@gmail.com"); // Set the shared post data
    navigate("/share", { state: { sharedPostData } }); // Navigate to /share
  };

  //   axios
  //     .post("http://localhost:3001/regtest5@gmail.com",{
  //       name:"test5",
  //       email:"regtest5@gmail.com",
  //       password:"regtest4#gmail.com",
  //       postData:{

  //           "postDec": "jj",
  //           "comment": "xg",
  //           "likes":0,
  //           "postId":982
  //       }
  //     })
  //     .then((res) => setData(res.data.postData))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get_posts")
      .then((res) => (setData(res.data.post), console.log(res.data)))
      .catch((err) => console.log(err));
  }, []);
  console.log(data.email);

  const IncreasehandleLikes = (email, postId, currentLikeCount) => {
    axios
      .post(`http://localhost:3001/Inclikes${email}`, {
        postId: postId,
      })
      .then((res) => {
        sethandlePostId(currentLikeCount.postId);
        setLikeStatus((prevState) => ({
          ...prevState,
          [postId]: true,
        }));
      })
      .catch((err) => console.log(err));

    setLikesHndle(false);
  };
  const DecreasehandleLikes = (email, postId, postData) => {
    axios
      .post(`http://localhost:3001/Declikes${email}`, {
        postId: postId,
      })
      .then((res) => {
        sethandlePostId(postData.postId);
        setLikeStatus((prevState) => ({
          ...prevState,
          [postId]: false,
        }));
      })
      .catch((err) => console.log(err));

    setLikesHndle(!likesHandle);
  };

  const commen = (postId, data) => {
    const da = data.comment.filter((com) => {
      return com.postId == postId;
    }).length;

    console.log(da);
  };

  const comLikes = (postId, postData) => {
    const fig = postData.post_details
      .filter((e, indx) => {
        return e.postId == postId;
      })
      .map((e, id) => {
        return e;
      });
    console.log(fig, "aree te likesss");
  };

  const handleInbox = () => {
    setLogedUserEmail("test1@gmail.com");
    navigate("/inBox");
  };
  return (
    <>
      <NavBar handleInbox={handleInbox} />
      
      {data.map((postData) => {
        return (
          <div key={postData._id}>
            {postData.post_details.map((type, index) => {
              return (
                <div>
                  {" "}
                  {/* {likeCount.map((e, id) => {
                    return <div id={id}></div>;
                  })} */}
                  <div>
                    <div id={index} fun>
                      <div className="containerF">
                        <div className="col-9">
                          <div className="card">
                            <div className="top">
                              <div className="userDetails">
                                <div className="profilepic">
                                  <div className="profile_img">
                                    <div className="image">
                                      <img
                                        src={postData.profile_image}
                                        alt="profile Image"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <h3>
                                  {postData.User_name}
                                  <br />
                                  <span> </span>
                                </h3>
                              </div>
                              <div>
                                <span className="dot">
                                  <i className="fas fa-ellipsis-h"></i>
                                </span>
                              </div>
                            </div>
                            <div className="imgBx">
                              <div className="cover">
                                <p>{type.postDec}</p>
                              </div>
                            </div>
                            <div className="bottom">
                              <div className="actionBtns">
                                <div className="left">
                                  <span
                                    className="heart"
                                    id={type.postId}
                                    onClick={() => {
                                      likesHandle
                                        ? IncreasehandleLikes(
                                            postData.email,
                                            type.postId,
                                            type
                                          )
                                        : DecreasehandleLikes(
                                            postData.email,
                                            type.postId,
                                            type
                                          );
                                    }}
                                  >
                                    <span>
                                      <svg
                                        aria-label="Like"
                                        color="#262626"
                                        fill={
                                          LikeStatus[type.postId]
                                            ? "#ed0c0c"
                                            : "#262626"
                                        }
                                        height="25"
                                        role="img"
                                        viewBox="0 0 48 48"
                                        width="26"
                                        onClick={() => {
                                          comLikes(type.postId, postData);
                                        }}
                                      >
                                        <path
                                          d="M34.6 6.1c5.7 0 10.4 5.2 10.4 
                                        11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 
                                        41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 
                                        11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 
                                        1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 
                                        1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 
                                        1.8
                                        "
                                        ></path>
                                      </svg>
                                    </span>
                                  </span>

                                  <svg
                                    aria-label="Share Post"
                                    className="_8-yf5 "
                                    color="#262626"
                                    fill="#262626"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 48 48"
                                    width="24"
                                    onClick={(e) => {
                                      navigateToSharePage(
                                        postData.email,
                                        type,
                                        postData
                                      );
                                    }}
                                  >
                                    <path
                                      d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 
                                    3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 
                                    1 1.2 1.1h.2c.5 0 1-.3 
                                    1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 
                                    6.1h35.5L18 18.7 5.2 6.1zm18.7 
                                    33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="right">
                                  <svg
                                    aria-label="Save"
                                    className="_8-yf5 "
                                    color="#262626"
                                    fill="#262626"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 48 48"
                                    width="24"
                                  >
                                    <path
                                      d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 
                                    47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 
                                    3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 
                                    1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 
                                    0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 
                                    1.4-.9 2.2-.9z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <a>
                                {LikeStatus[type.postId] ? (
                                  <p className="likes" id={type.postId}>
                                    {" "}
                                    {type.likes + 1} likes
                                  </p>
                                ) : (
                                  <p className="likes" id={type.postId}>
                                    {" "}
                                    {type.likes} likes
                                  </p>
                                )}
                              </a>

                              <a
                                onClick={() => {
                                  navigateToCommentSection(
                                    postData.email,
                                    type.postId,
                                    postData._id
                                  );
                                }}
                              >
                                <h4
                                  className="comments"
                                  onClick={() => commen(type.postId, postData)}
                                >
                                  View all{" "}
                                  {
                                    postData.comment.filter((com) => {
                                      return com.postId == type.postId;
                                    }).length
                                  }{" "}
                                  comments
                                </h4>
                              </a>

                              <a>
                                <h5 className="postTime">{type.postId}</h5>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              );
            })}
          </div>
        );
      })}{" "}
    </>
  );
}
