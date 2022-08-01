import React, { useContext } from "react";
import { Context } from "../../../../App";
import LoggedInBar from "../loggedInBar/LoggedInBar";
import "./Transactions.css";

const Transactions = () => {
  const value = useContext(Context);
  return (
    <div className="transactions-page">
      <p className="login-column-left">Transactions</p>
      <LoggedInBar user={value.loggedInUser} />
    </div>
  );
};

export default Transactions;
