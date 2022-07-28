import React, { useEffect, useState } from "react";
import Login from "./Login";
// import { MyLink } from "../../footer/MyLink";

const LoggedIn = ({ user, setUser }) => {
  const handleClick = () => {
    window.localStorage.removeItem("user");
    setUser("");
  };
  return <button onClick={handleClick}>Log out</button>;
};

export default LoggedIn;

//   if (document.getElementsByClassName("login")[0] !== undefined) {
//     document.getElementsByClassName("login")[0].style.display = "none";
//   }
//   <MyLink to="/loggedin" className="login" applyStyles text={"გასვლა"} />;
