import React from "react";
import "./DisplayWorkers.css";

const DisplayWorkers = ({ user }) => {
  return (
    <div>
      <div className="workers-item">
        <h2>
          <span className="workers-name-text">სახელი:</span> {user.name}
        </h2>
        <h2>
          <span className="workers-name-text">ელ.ფოსტა:</span> {user.email}
        </h2>
      </div>
    </div>
  );
};

export default DisplayWorkers;
