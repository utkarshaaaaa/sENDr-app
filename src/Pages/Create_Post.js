import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import "../Design/postCreate.css";

export default function Create_Post() {
  const [postDec, setPostDec] = useState("");
  let x = Math.floor((Math.random() * 10000) + 1);
  const postDescription = (e) => {
    e.preventDefault();
    if (postDec == "") {
      alert("type something");
    } else {
      axios
        .post(`http://localhost:3001/Createposttest1@gmail.com`, {
          postData: {
            postDec: postDec,
            likes: 0,
            postId: x,
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div id="wrapper">
        <form
          id="paper"
          method="get"
          action=""
          onSubmit={(e) => {
            postDescription(e);
          }}
        >
          <div id="margin">
              Create Your Post
          </div>
          <textarea
            placeholder="Enter Your thoughts"
            id="text"
            name="text"
            rows="4"
            value={postDec}
            onChange={(e) => {
              setPostDec(e.target.value);
            }}
            style={{
              overflow: "hidden",
              wordWrap: "break-word",
              resize: "none",
              height: "160px",
            }}
          ></textarea>
          <br />
          <input id="button" type="submit" value="Create" />
        </form>
      </div>
    </>
  );
}
