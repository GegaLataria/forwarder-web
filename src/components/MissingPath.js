import React from "react";
import { Redirect } from "react-router-dom";

function MissingPath() {
  return <Redirect to={{ pathname: "/main" }} />;
}

export { MissingPath };
