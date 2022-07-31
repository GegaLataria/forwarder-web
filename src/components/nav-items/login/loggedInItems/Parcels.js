import React from "react";
import { Context } from "../../../App";
import LoggedInBar from "./LoggedInBar";

const Parcels = () => {
  const value = React.useContext(Context);
  return (
    <div>
      {value.name} {value.gvari}
    </div>
  );
};

export default Parcels;
