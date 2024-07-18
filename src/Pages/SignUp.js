import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import jwt_decode, { jwtDecode } from 'jwt-decode'

export default function () {
  const[data,setdata]=useState("")

  const getSignUpData=()=>{
    const decodedData=jwtDecode(data)
    console.log(decodedData)
    setdata(decodedData)


  }
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          setdata(credentialResponse.credential)
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <button onClick={()=>{getSignUpData()}}>Get the dataa</button>
      {data.email}
      <br/>
      {data.name}

      <img src={data.picture}/>
      
    </div>
  );
}
