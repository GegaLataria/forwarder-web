import React from "react";
import { Context } from "../../../../App";
import Home from "../../../home/Home";
import LoggedInBar from "../loggedInBar/LoggedInBar";
import HelperTransactions from "../transactions/HelperTransactions";
import "./Parcels.css";
import ParcelsList from "./ParcelsList";
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
            dataType={value.loggedInUser.arrivedParcels.trackingOne}
            weightText={"წონა"}
            weight={value.loggedInUser.arrivedParcels.weightOne + "კგ"}
            date={value.loggedInUser.arrivedParcels.dateOne}
            money={
              (value.loggedInUser.arrivedParcels.weightOne * 9).toFixed(1) + "₾"
            }
          />
          <HelperTransactions
            className={"parcels-page__list"}
            logo={logo}
            actionType={"Tracking"}
            dataType={value.loggedInUser.arrivedParcels.trackingTwo}
            weightText={"წონა"}
            weight={value.loggedInUser.arrivedParcels.weightTwo + "კგ"}
            date={value.loggedInUser.arrivedParcels.dateTwo}
            money={
              (value.loggedInUser.arrivedParcels.weightTwo * 9).toFixed(1) + "₾"
            }
          />
          <HelperTransactions
            className={"parcels-page__list"}
            logo={logo}
            actionType={"Tracking"}
            dataType={value.loggedInUser.arrivedParcels.trackingThree}
            weightText={"წონა"}
            weight={value.loggedInUser.arrivedParcels.weightThree + "კგ"}
            date={value.loggedInUser.arrivedParcels.dateThree}
            money={
              (value.loggedInUser.arrivedParcels.weightThree * 9).toFixed(1) +
              "₾"
            }
          />
          <HelperTransactions
            className={"parcels-page__list"}
            logo={logo}
            actionType={"Tracking"}
            dataType={value.loggedInUser.arrivedParcels.trackingFour}
            weightText={"წონა"}
            weight={value.loggedInUser.arrivedParcels.weightFour + "კგ"}
            date={value.loggedInUser.arrivedParcels.dateFour}
            money={
              (value.loggedInUser.arrivedParcels.weightFour * 9).toFixed(1) +
              "₾"
            }
          />
        </div>
        <LoggedInBar user={value.loggedInUser} />
      </div>
    );
  }
  return <Home />;
};

export default Parcels;
