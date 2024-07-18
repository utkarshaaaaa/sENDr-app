import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from '@react-oauth/google';


export default function () {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </div>
  );
}
