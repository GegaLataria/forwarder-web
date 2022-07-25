import React from "react";
import { MyLink } from "../footer/MyLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="topnav">
      <MyLink to="/main" text={"მთავარი"} applyStyles />
      <MyLink to="/faq" applyStyles text={"FAQ"} />
      <MyLink to="/how-to-order" applyStyles text={"როგორ შევუკვეთო?"} />
      <MyLink to="/calculator" applyStyles text={"კალკულატორი"} />
      <MyLink to="/shops" applyStyles text={"მაღაზიები"} />
      <MyLink to="/contact" applyStyles text={"კონტაქტი"} />
      <MyLink to="/login" className="login" applyStyles text={"შესვლა"} />
    </div>
  );
};

export default Header;
