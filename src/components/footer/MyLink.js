import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

export const MyLink = ({ to, text, className, applyStyles }) => {
  const location = useLocation();
  const isSelected = to === location.pathname;

  return (
    <Link
      className={`${className} ${isSelected && applyStyles ? " active" : ""}`}
      to={to}
    >
      {text}
    </Link>
  );
};
