import React from "react";
import { Context } from "../../../../../App";
import Home from "../../../../home/Home";
import LoggedInBar from "../../loggedInBar/LoggedInBar";
import HelperTransactions from "../../transactions/HelperTransactions";
import "./Parcels.css";
import ParcelsList from "../ParcelsList";
import logo from "./parcel.png";

const Parcels = () => {
  const value = React.useContext(Context);
  if (value.loggedInUser) {
    return (
      <div className="parcels-page">
        <div className="login-column-left">
          <ParcelsList />
          <HelperTransactions
            className={"parcels-page__list"}
            logo={logo}
            actionType={"Tracking"}
            dataType={value.loggedInUser.parcels.trackingOne}
            weightText={"წონა"}
            weight={value.loggedInUser.parcels.weightOne + "კგ"}
            date={value.loggedInUser.parcels.dateOne}
            money={(value.loggedInUser.parcels.weightOne * 9).toFixed(1) + "₾"}
          />
          <HelperTransactions
            className={"parcels-page__list"}
            logo={logo}
            actionType={"Tracking"}
            dataType={value.loggedInUser.parcels.trackingTwo}
            weightText={"წონა"}
            weight={value.loggedInUser.parcels.weightTwo + "კგ"}
            date={value.loggedInUser.parcels.dateTwo}
            money={(value.loggedInUser.parcels.weightTwo * 9).toFixed(1) + "₾"}
          />
          <HelperTransactions
            className={"parcels-page__list"}
            logo={logo}
            actionType={"Tracking"}
            dataType={value.loggedInUser.parcels.trackingThree}
            weightText={"წონა"}
            weight={value.loggedInUser.parcels.weightThree + "კგ"}
            date={value.loggedInUser.parcels.dateThree}
            money={
              (value.loggedInUser.parcels.weightThree * 9).toFixed(1) + "₾"
            }
          />
          <HelperTransactions
            className={"parcels-page__list"}
            logo={logo}
            actionType={"Tracking"}
            dataType={value.loggedInUser.parcels.trackingFour}
            weightText={"წონა"}
            weight={value.loggedInUser.parcels.weightFour + "კგ"}
            date={value.loggedInUser.parcels.dateFour}
            money={(value.loggedInUser.parcels.weightFour * 9).toFixed(1) + "₾"}
          />
        </div>
        <LoggedInBar user={value.loggedInUser} />
      </div>
    );
  }
  return <Home />;
};

export default Parcels;
