import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import "./MyLink.css";

export const MyLink = ({
  logo,
  to,
  text,
  className,
  applyStyles,
  selectedClassname,
}) => {
  const location = useLocation();
  let isSelected = to === location.pathname;

  if (location.pathname.includes("/login") && text !== "მისამართები") {
    isSelected = location.pathname.includes(to);
  }

  return (
    <Link
      className={`${className} ${
        isSelected && applyStyles ? selectedClassname : ""
      }`}
      to={to}
    >
      {logo ? <img src={logo} alt="logo" className="linkLogo"></img> : ""}
      {text}
    </Link>
  );
};
