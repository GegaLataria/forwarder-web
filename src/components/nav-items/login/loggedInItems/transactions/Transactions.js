import React, { useContext } from "react";
import { Context } from "../../../../App";
import LoggedInBar from "../loggedInBar/LoggedInBar";
import "./Transactions.css";
import HelperTransactions from "./HelperTransactions";

const Transactions = () => {
  const value = useContext(Context);
  console.log(value.loggedInUser);
  return (
    <div className="transactions-page">
      <div className="login-column-left">
        <HelperTransactions
          date={value.loggedInUser.transactions.dateOne}
          money={value.loggedInUser.transactions.moneyOne}
        />
        <HelperTransactions
          date={value.loggedInUser.transactions.dateTwo}
          money={value.loggedInUser.transactions.moneyTwo}
        />
        <HelperTransactions
          date={value.loggedInUser.transactions.dateThree}
          money={value.loggedInUser.transactions.moneyThree}
        />
        <HelperTransactions
          date={value.loggedInUser.transactions.dateFour}
          money={value.loggedInUser.transactions.moneyFour}
        />
      </div>
      <LoggedInBar user={value.loggedInUser} />
    </div>
  );
};

export default Transactions;
