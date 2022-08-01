import React from "react";
import { Context } from "../../../../App";
import { MyLink } from "../../../../footer/MyLink";
import LoggedInBar from "../loggedInBar/LoggedInBar";
import "./Parcels.css";

const Parcels = () => {
  const value = React.useContext(Context);
  return (
    <div className="parcels-page">
      <div className="login-column-left">
        <div className="parcels-list">
          <div className="parcels-list__item">
            <MyLink
              className="parcels-list__item__link"
              text={"საწყობში"}
              to={"/login/parcels"}
            ></MyLink>
          </div>
          <div className="parcels-list__item">
            <MyLink
              className="parcels-list__item__link"
              text={"გამოგზავნილი"}
              to={"/login/parcels/sent"}
            ></MyLink>
          </div>
          <div className="parcels-list__item">
            <MyLink
              className="parcels-list__item__link"
              text={"ჩამოსული"}
              to={"/login/parcels/arrived"}
            ></MyLink>
          </div>
          <div className="parcels-list__item">
            <MyLink
              className="parcels-list__item__link"
              text={"გაცემული"}
              to={"/login/parcels/taken"}
            ></MyLink>
          </div>
        </div>
      </div>
      <LoggedInBar user={value.loggedInUser} />
    </div>
  );
};

export default Parcels;
