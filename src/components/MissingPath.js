import React from "react";
import { Redirect } from "react-router-dom";

function MissingPath({ path }) {
  return <Redirect to={{ pathname: path }} />;
}

export { MissingPath };
