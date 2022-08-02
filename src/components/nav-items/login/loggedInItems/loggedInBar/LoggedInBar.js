import React, { useState } from "react";
import { MyLink } from "../../../../footer/MyLink";
import "./LoggedInBar.css";
import addressLogo from "../../../../photos/pin.png";
import parcelLogo from "../../../../photos/box.png";
import notificationLogo from "../../../../photos/notifications.png";
import transactionLogo from "../../../../photos/card.png";

const LoggedInBar = ({ user, setUser }) => {
  const handleClick = () => {
    window.localStorage.removeItem("user");
    setUser("");
  };
  return (
    <div className="login-column-right">
      <div className="currency-logout-container">
        <p className="currency-tab">1 GEL = 6.01 TRY</p>
        <button className="log-out-but" onClick={handleClick}>
          გასვლა
        </button>
      </div>
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
          applyStyles
          logo={addressLogo}
          className="login-column-right__list__item"
          text={"მისამართები"}
          to={"/login"}
          selectedClassname={"selectedItem"}
        ></MyLink>
        <MyLink
          applyStyles
          logo={parcelLogo}
          className="login-column-right__list__item"
          text={"ჩემი ამანათები"}
          to={"/login/parcels"}
          selectedClassname={"selectedItem"}
        ></MyLink>
        <MyLink
          applyStyles
          logo={notificationLogo}
          className="login-column-right__list__item"
          text={"შეტყობინებები"}
          to={"/login/notifications"}
          selectedClassname={"selectedItem"}
        ></MyLink>
        <MyLink
          applyStyles
          logo={transactionLogo}
          className="login-column-right__list__item"
          text={"ტრანზაქციები"}
          to={"/login/transactions"}
          selectedClassname={"selectedItem"}
        ></MyLink>
      </div>
    </div>
  );
};

export default LoggedInBar;
