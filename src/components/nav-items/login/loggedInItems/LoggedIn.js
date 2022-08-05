import React, { useEffect, useState } from "react";

import "./LoggedIn.css";
import LoggedInBar from "./loggedInBar/LoggedInBar";

const LoggedIn = ({ user, setUser }) => {
  const handleClick = () => {
    window.localStorage.removeItem("user");
    setUser("");
  };
  return (
    <div className="loggedInPage">
      <div className="login-column-left">
        {/* <button className="sign-out-button" onClick={handleClick}>
          Log out
        </button> */}
        <div className="address-countries-container">
          <div className="address-box">
            <div className="address-box__text">
              <p>
                <span className="address-box__text__username">
                  {user.firstName},{" "}
                </span>{" "}
                აქ ნახავ თურქეთის საწყობის მისამართსა და სხვა მნიშვნელოვან
                ინფორმაციას, რაც დაგჭირდება თურქული საიტებიდან ნივთების
                გამოწერის დროს. მარტივად დააკოპირე და თურქულ საიტზე მისამართის
                მითითებისას ჩასვი შესაბამის ველში. თუ რაიმე კითხვა გაქვს,
                დაგვიკავშირდი. სასიამოვნო შოპინგს გისურვებთ!
              </p>
            </div>
          </div>
          <div className="countries-box">
            <div className="countries-box__list">
              <div className="countries-box__list__item">
                <h2>🇹🇷 Turkey</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="user-address">
          <div className="user-address__list">
            <div className="user-address__list__item">
              <p className="user-address__list__item__title">სახელი</p>
              <h4 className="user-address__list__item__input">
                {user.firstName}
              </h4>
            </div>
            <div className="user-address__list__item">
              <p className="user-address__list__item__title">გვარი</p>
              <h4 className="user-address__list__item__input">
                {user.lastName}
              </h4>
            </div>
            <div className="user-address__list__item">
              <p className="user-address__list__item__title">ტელეფონი</p>
              <h4 className="user-address__list__item__input">
                {user.phoneNumber}
              </h4>
            </div>
            <div className="user-address__list__item">
              <p className="user-address__list__item__title">პროვინცია</p>
              <h4 className="user-address__list__item__input">
                {user.addressOneTurkey}
              </h4>
            </div>
            <div className="user-address__list__item">
              <p className="user-address__list__item__title">რაიონი</p>
              <h4 className="user-address__list__item__input">
                {user.addressTwoTurkey}
              </h4>
            </div>
            <div className="user-address__list__item">
              <p className="user-address__list__item__title">სამეზობლო</p>
              <h4 className="user-address__list__item__input">
                {user.addressThreeTurkey}
              </h4>
            </div>
            <div className="user-address__list__item">
              <p className="user-address__list__item__title">საფოსტო კოდი</p>
              <h4 className="user-address__list__item__input">
                {user.zipCodeTurkey}
              </h4>
            </div>
            <div className="user-address__list__item">
              <p className="user-address__list__item__title">ელ.ფოსტა</p>
              <h4 className="user-address__list__item__input">{user.email}</h4>
            </div>
          </div>
        </div>
      </div>
      <LoggedInBar user={user} setUser={setUser} />
    </div>
  );
};

export default LoggedIn;
