import React from "react";
import { Context } from "../App";
import { MyLink } from "../footer/MyLink";
import "./Header.css";

const Header = () => {
  const value = React.useContext(Context);
  let text = "შესვლა";
  if (value.loggedInUser) {
    text = "კაბინეტი";
  }
  return (
    <div className="topnav">
      <MyLink to="/main" text={"მთავარი"} applyStyles />
      <MyLink to="/faq" applyStyles text={"FAQ"} />
      <MyLink to="/how-to-order" applyStyles text={"როგორ შევუკვეთო?"} />
      <MyLink to="/calculator" applyStyles text={"კალკულატორი"} />
      <MyLink to="/shops" applyStyles text={"მაღაზიები"} />
      <MyLink to="/contact" applyStyles text={"კონტაქტი"} />
      <MyLink to="/login" className="login" applyStyles text={text} />
    </div>
  );
};

export default Header;
