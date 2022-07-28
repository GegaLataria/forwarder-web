import React from "react";
// import { MyLink } from "../../footer/MyLink";

const LoggedIn = () => {
  //   if (document.getElementsByClassName("login")[0] !== undefined) {
  //     document.getElementsByClassName("login")[0].style.display = "none";
  //   }
  //   <MyLink to="/loggedin" className="login" applyStyles text={"გასვლა"} />;

  const handleClick = () => {
    window.localStorage.setItem("user", "");
  };
  return <button onClick={handleClick}>Log out</button>;
};

export default LoggedIn;
