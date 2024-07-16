import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import "../Design/comments.css";
import PostComment from "./PostComment";


export default function () {
  const { email, setEmail, individualPostId, setIndividualPostId,arr, setArr,userId,setUserId } =
    useContext(Data);
    
  const navigate = useNavigate();


  const [cntxEmail, setCntxEmail] = useState("");

  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
    const getComment = () => {
      
      axios
        .post(`http://localhost:3001/getComments${email}`, {
          postId: individualPostId,
        })
        .then((res) => {
          console.log(res.data.comment);
          setArr(res.data.comment);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getComment()
    
  }, []);

  console.log(individualPostId, "contexttt");



  return (
    <>
      <div className="comment-session">
        <div className="title">
          <h2>Comments</h2>
        </div>
        {arr.map((e, id) => {
          return (
            <div className="post-comment" key={id}>
              <div className="post-list">
                <div className="flex">
                  <div className="user">
                    <div className="user-image">
                      <img
                        src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                        className="userImg"
                      ></img>
                    </div>
                    <div className="user-meta">
                      <div className="name">{e.userName}</div>
                      <div className="day">10 days</div>
                    </div>
                  </div>
                  <div className="reply">
                    <div className="lick icon">
                      <i className="fa fa-thumbs-o-up ">&#128077;</i>
                    </div>
                    <div className="dislick icon">
                      <i className="fa fa-thumbs-o-down ">&#128078;</i>
                    </div>
                  </div>
                </div>
                <div className="comment">{e.desc}</div>
              </div>
            </div>
          );
        })}
          <PostComment email={email} postId={individualPostId} userId={userId}/>

       
      

      
      </div>
    </>
  );
}
