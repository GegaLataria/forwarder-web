import React, { useContext } from "react";
import { Context } from "../../../../../App";
import Home from "../../../../home/Home";
import LoggedInBar from "../../loggedInBar/LoggedInBar";
import HelperTransactions from "../../transactions/HelperTransactions";
import logo from "../parcel.png";
import ParcelsList from "../ParcelsList";

const ArrivedParcels = () => {
  const value = useContext(Context);
  if (value.loggedInUser) {
    return (
      <div className="user-parcels-page">
        <div className="login-column-left">
          <ParcelsList />
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
            dataType={value.loggedInUser.arrivedParcels.trackingOne}
            weightText={"წონა"}
            weight={value.loggedInUser.arrivedParcels.weightOne + "კგ"}
            date={value.loggedInUser.arrivedParcels.dateOne}
            money={
              (value.loggedInUser.arrivedParcels.weightOne * 9).toFixed(1) + "₾"
            }
          />
        </div>
        <LoggedInBar user={value.loggedInUser} />
      </div>
    );
  }
  return <Home />;
};

export default ArrivedParcels;
