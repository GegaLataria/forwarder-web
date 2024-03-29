import React, { useContext } from "react";
import { Context } from "../../../../App";
import LoggedInBar from "../loggedInBar/LoggedInBar";
import "./Transactions.css";
import HelperTransactions from "./HelperTransactions";
// import Home from "../../../home/Home";
import logo from "./transactions.png";
import Login from "../../Login";

const Transactions = () => {
  const value = useContext(Context);
  const usdCurrency = 3;
  const pricePerKg = 3;
  if (value.loggedInUser) {
    return (
      <div className="transactions-page">
        <div className="login-column-left">
          <h1 className="transactions-title">ტრანზაქციები</h1>
          <HelperTransactions
            className={"transactions-list"}
            logo={logo}
            actionType={"ტიპი"}
            dataType={"ჩარიცხვა"}
            weightText={"წონა"}
            weight={value.loggedInUser.transactions.weightOne + "კგ"}
            date={value.loggedInUser.transactions.dateOne}
            money={
              (
                value.loggedInUser.transactions.weightOne *
                usdCurrency *
                pricePerKg
              ).toFixed(1) + "₾"
            }
          />
          <HelperTransactions
            className={"transactions-list"}
            logo={logo}
            actionType={"ტიპი"}
            dataType={"ჩარიცხვა"}
            weightText={"წონა"}
            weight={value.loggedInUser.transactions.weightTwo + "კგ"}
            date={value.loggedInUser.transactions.dateTwo}
            money={
              (
                value.loggedInUser.transactions.weightTwo *
                usdCurrency *
                pricePerKg
              ).toFixed(1) + "₾"
            }
          />
          <HelperTransactions
            className={"transactions-list"}
            logo={logo}
            actionType={"ტიპი"}
            dataType={"ჩარიცხვა"}
            weightText={"წონა"}
            weight={value.loggedInUser.transactions.weightThree + "კგ"}
            date={value.loggedInUser.transactions.dateThree}
            money={
              (
                value.loggedInUser.transactions.weightThree *
                usdCurrency *
                pricePerKg
              ).toFixed(1) + "₾"
            }
          />
          <HelperTransactions
            className={"transactions-list"}
            logo={logo}
            actionType={"ტიპი"}
            dataType={"ჩარიცხვა"}
            weightText={"წონა"}
            weight={value.loggedInUser.transactions.weightFour + "კგ"}
            date={value.loggedInUser.transactions.dateFour}
            money={
              (
                value.loggedInUser.transactions.weightFour *
                usdCurrency *
                pricePerKg
              ).toFixed(1) + "₾"
            }
          />
          <HelperTransactions
            className={"transactions-list"}
            logo={logo}
            actionType={"ტიპი"}
            dataType={"ჩარიცხვა"}
            weightText={"წონა"}
            weight={value.loggedInUser.transactions.weightFour + "კგ"}
            date={value.loggedInUser.transactions.dateFour}
            money={
              (
                value.loggedInUser.transactions.weightFour *
                usdCurrency *
                pricePerKg
              ).toFixed(1) + "₾"
            }
          />
          <div className="only-for-mobile">
            <HelperTransactions
              className={"transactions-list"}
              logo={logo}
              actionType={"ტიპი"}
              dataType={"ჩარიცხვა"}
              weightText={"წონა"}
              weight={value.loggedInUser.transactions.weightFour + "კგ"}
              date={value.loggedInUser.transactions.dateFour}
              money={
                (
                  value.loggedInUser.transactions.weightFour *
                  usdCurrency *
                  pricePerKg
                ).toFixed(1) + "₾"
              }
            />
            <HelperTransactions
              className={"transactions-list"}
              logo={logo}
              actionType={"ტიპი"}
              dataType={"ჩარიცხვა"}
              weightText={"წონა"}
              weight={value.loggedInUser.transactions.weightFour + "კგ"}
              date={value.loggedInUser.transactions.dateFour}
              money={
                (
                  value.loggedInUser.transactions.weightFour *
                  usdCurrency *
                  pricePerKg
                ).toFixed(1) + "₾"
              }
            />
          </div>
        </div>
        <LoggedInBar
          user={value.loggedInUser}
          setUser={value.setLoggedInUser}
        />
      </div>
    );
  }
  return <Login />;
};

export default Transactions;
