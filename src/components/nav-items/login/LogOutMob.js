import React from "react";
import { Context } from "../../App";
import "./LogOutMob.css";

const LogOutMob = () => {
  const value = React.useContext(Context);
  const handleClick = () => {
    window.localStorage.removeItem("user");
    value.setLoggedInUser("");
  };
  return (
    <div>
      <button onClick={handleClick} className="logout-button-mobile">
        Log Out
        {/* <a href="/login">Log Out</a> */}
      </button>
    </div>
  );
};

export default LogOutMob;
