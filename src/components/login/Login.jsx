import React from "react";
import { loginURL } from "../../spotify";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
