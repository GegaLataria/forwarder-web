import React from "react";
import { MyLink } from "../../../../footer/MyLink";
import "./ParcelsList.css";

const ParcelsList = () => {
  return (
    <div className="parcels-list">
      <div className="parcels-list__item">
        <MyLink
          className="parcels-list__item__link"
          text={"საწყობში"}
          to={"/login/parcels"}
        ></MyLink>
      </div>
      <div className="parcels-list__item">
        <MyLink
          className="parcels-list__item__link"
          text={"გამოგზავნილი"}
          to={"/login/parcels/sent"}
        ></MyLink>
      </div>
      <div className="parcels-list__item">
        <MyLink
          className="parcels-list__item__link"
          text={"ჩამოსული"}
          to={"/login/parcels/arrived"}
        ></MyLink>
      </div>
      <div className="parcels-list__item">
        <MyLink
          className="parcels-list__item__link"
          text={"გაცემული"}
          to={"/login/parcels/taken"}
        ></MyLink>
      </div>
    </div>
  );
};

export default ParcelsList;
