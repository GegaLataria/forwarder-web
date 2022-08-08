import React from "react";
import { MyLink } from "../../../../footer/MyLink";
import "./ParcelsList.css";

const ParcelsList = () => {
  return (
    <div className="parcels-list">
      <a className="parcels-list__item" href="/login/parcels">
        <p className="parcels-list__item__link">საწყობში</p>
      </a>
      <a className="parcels-list__item" href="/login/parcels/sent">
        <p className="parcels-list__item__link">გამოგზავნილი</p>
      </a>
      <a className="parcels-list__item" href="/login/parcels/arrived">
        <p className="parcels-list__item__link">ჩამოსული</p>
      </a>
      <a className="parcels-list__item" href="/login/parcels/taken">
        <p className="parcels-list__item__link">გაცემული</p>
      </a>
      {/* <div className="parcels-list__item">
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
      </div> */}
    </div>
  );
};

export default ParcelsList;
