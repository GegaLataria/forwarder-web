import React from "react";
import { Context } from "../../../App";
import LoggedInBar from "./LoggedInBar";

const Parcels = () => {
  const value = React.useContext(Context);
  return (
    <div>
      {value.loggedInUser.firstName} {value.loggedInUser.lastName}
    </div>
  );
};

export default Parcels;
