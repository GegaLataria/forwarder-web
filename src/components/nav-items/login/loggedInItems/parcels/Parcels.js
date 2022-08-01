import React from "react";
import { Context } from "../../../../App";
import LoggedInBar from "../loggedInBar/LoggedInBar";
import "./Parcels.css";

const Parcels = () => {
  const value = React.useContext(Context);
  return (
    <div className="parcels-page">
      <div className="login-column-left">
        {value.loggedInUser.firstName} {value.loggedInUser.lastName}
      </div>
      <LoggedInBar user={value.loggedInUser} />
    </div>
  );
};

export default Parcels;
