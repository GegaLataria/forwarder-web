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
      <MyLink
        to="/main"
        text={"მთავარი"}
        applyStyles
        selectedClassname={"active"}
      />
      <MyLink to="/faq" applyStyles text={"FAQ"} selectedClassname={"active"} />
      <MyLink
        to="/how-to-order"
        applyStyles
        text={"როგორ შევუკვეთო?"}
        selectedClassname={"active"}
      />
      <MyLink
        to="/calculator"
        applyStyles
        text={"კალკულატორი"}
        selectedClassname={"active"}
      />
      <MyLink
        to="/shops"
        applyStyles
        text={"მაღაზიები"}
        selectedClassname={"active"}
      />
      <MyLink
        to="/contact"
        applyStyles
        text={"კონტაქტი"}
        selectedClassname={"active"}
      />
      <MyLink
        to="/login"
        className="login"
        applyStyles
        text={text}
        selectedClassname={"active"}
      />
    </div>
  );
};

export default Header;
