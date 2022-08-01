import React from "react";
import "./HelperTransactions.css";
import logo from "./transactions.png";

const HelperTransactions = ({ date, money }) => {
  return (
    <div className="transactions-list">
      <div className="transactions-list__item">
        <img
          className="transactions-list__item__logo"
          src={logo}
          alt={"transactions-logo"}
        ></img>
      </div>
      <div className="transactions-list__item">
        <h3 className="transactions-list__item__title">ტიპი</h3>
        <h3 className="transactions-list__item__input">ჩარიცხვა</h3>
      </div>
      <div className="transactions-list__item">
        <h3 className="transactions-list__item__title">თარიღი</h3>
        <h3 className="transactions-list__item__input">{date}</h3>
      </div>
      <div className="transactions-list__item">
        <h3 className="transactions-list__item__title">თანხა</h3>
        <h3 className="transactions-list__item__input">{money}</h3>
      </div>
    </div>
  );
};

export default HelperTransactions;
