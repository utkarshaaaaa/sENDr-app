import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function InboxData() {
  const {
    setUserId,
    sharedPostData,
    setSharedPostData,
    logedUserEmail,
    setLogedUserEmail,
  } = useContext(Data);

  const[postData,setPostData]=useState(null)


  useEffect(()=>{

    axios.get(`http://localhost:3001/getSharedData${logedUserEmail}`)
    .then((res)=>{console.log(res.data)})
    .catch((err)=>{console.log(err)})
    
  },[])
  return (
    <>
  
      
    
    
    </>
  
  )
}
