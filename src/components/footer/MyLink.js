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
  const isSelected = to === location.pathname;

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
