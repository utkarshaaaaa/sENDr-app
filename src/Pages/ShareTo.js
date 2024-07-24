import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import "../Design/sharePage.css";

export default function ShareTo() {
  const { email, setEmail, individualPostId, setIndividualPostId,arr, setArr,userId,setUserId } =
    useContext(Data);

  const[followingData,setFollowingData]=useState({})

  console.log(email)

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getFollowingData${email}`)
      .then((res) => (setFollowingData(res.data.data), console.log(res.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
   <>
   
   
   
 
   </>
  )
}
