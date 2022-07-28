import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./LoggedIn.css";

const LoggedIn = ({ user, setUser }) => {
  const handleClick = () => {
    window.localStorage.removeItem("user");
    setUser("");
  };
  return (
    <div>
      <button className="sign-out-button" onClick={handleClick}>
        Log out
      </button>
      <div className="address-box">
        <div className="address-box__text">
          <p>
            <span className="address-box__text__username">
              {user.username},{" "}
            </span>{" "}
            აქ ნახავ თურქეთის საწყობის მისამართსა და სხვა მნიშვნელოვან
            ინფორმაციას, რაც დაგჭირდება თურქული საიტებიდან ნივთების გამოწერის
            დროს. მარტივად დააკოპირე მარჯვენა კუთხეში მითითებული ღილაკის
            მეშვეობით და თურქულ საიტზე მისამართის მითითებისას ჩასვი შესაბამის
            ველში. თუ რაიმე კითხვა გაქვს, დაგვიკავშირდი. სასიამოვნო შოპინგს
            გისურვებთ!
          </p>
        </div>
      </div>
      <div className="countries-box">
        <div className="countries-box__list">
          <div className="countries-box__list__item">
            <h2>Turkey</h2>
          </div>
          <div className="countries-box__list__item">
            <h2>Dubai</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;

//   if (document.getElementsByClassName("login")[0] !== undefined) {
//     document.getElementsByClassName("login")[0].style.display = "none";
//   }
//   <MyLink to="/loggedin" className="login" applyStyles text={"გასვლა"} />;
