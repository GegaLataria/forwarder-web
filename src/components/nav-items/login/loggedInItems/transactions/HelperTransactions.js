import React from "react";
import "./HelperTransactions.css";

const HelperTransactions = ({
  className,
  logo,
  actionType,
  dataType,
  weightText,
  weight,
  date,
  money,
}) => {
  return (
    <div className={className}>
      <div className="transactions-list__item">
        <img
          className="transactions-list__item__logo"
          src={logo}
          alt={"transactions-logo"}
        ></img>
      </div>
      <div className="transactions-list__item">
        <h3 className="transactions-list__item__title">{actionType}</h3>
        <h3 className="transactions-list__item__input">{dataType}</h3>
      </div>
      <div className="transactions-list__item">
        <h3 className="transactions-list__item__title">{weightText}</h3>
        <h3 className="transactions-list__item__input">{weight}</h3>
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
