import React from "react";
import { MyLink } from "../../../footer/MyLink";

const LoggedInBar = ({ user }) => {
  return (
    <div className="login-column-right">
      <p className="currency-tab">1 GEL = 6.01 TRY</p>
      <div className="login-column-right__container">
        <div className="login-column-right__card">
          <p className="login-column-right__card__info">
            {user.firstName} {user.lastName}
          </p>
          <hr className="horizontal-line"></hr>
          <p className="debt-text">დავალიანება: 15.70</p>
        </div>
      </div>
      <div className="login-column-right__list">
        <MyLink
          className="login-column-right__list__item"
          text={"მისამართები"}
          to={"/login/address"}
        ></MyLink>
        <MyLink
          className="login-column-right__list__item"
          text={"ჩემი ამანათები"}
          to={"/login/parcels"}
        ></MyLink>
        <MyLink
          className="login-column-right__list__item"
          text={"შეტყობინებები"}
          to={"/login/notifications"}
        ></MyLink>
        <MyLink
          className="login-column-right__list__item"
          text={"ტრანზაქციები"}
          to={"/login/transactions"}
        ></MyLink>
      </div>
    </div>
  );
};

export default LoggedInBar;
