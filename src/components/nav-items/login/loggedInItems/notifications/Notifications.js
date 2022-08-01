import React from "react";
import { Context } from "../../../../App";
import LoggedInBar from "../loggedInBar/LoggedInBar";
import "./Notifications.css";

const Notifications = () => {
  const value = React.useContext(Context);
  return (
    <div className="notifications-page">
      <p className="login-column-left">Notifications</p>
      <LoggedInBar user={value.loggedInUser} />
    </div>
  );
};

export default Notifications;
