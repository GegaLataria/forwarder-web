import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";
import { MyLink } from "./MyLink";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__box">
        <div className="footer__box__item">
          <MyLink
            to="/main"
            text={"მთავარი"}
            className="footer__box__item__link"
          />
          <MyLink to="/faq" text="FAQ" className="footer__box__item__link" />
          <MyLink
            to="/how-to-order"
            text={"როგორ შევუკვეთო?"}
            className="footer__box__item__link"
          />
          <MyLink
            to="/calculator"
            text={"კალკულატორი"}
            className="footer__box__item__link"
          />
          <MyLink
            to="/shops"
            text={"მაღაზიები"}
            className="footer__box__item__link"
          />
          <MyLink
            to="/terms-and-conditions"
            text={"წესები და პირობები"}
            className="footer__box__item__link"
          />
        </div>
      </div>
      <div className="footer__rights">
        <p>@2022 წ, ყველა უფლება დაცულია</p>
      </div>
    </div>
  );
};

export default Footer;
