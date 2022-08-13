import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayWorkers from "./DisplayWorkers";
import "./AboutUs.css";

const AboutUs = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    axios
      .get(url)
      .then(function (response) {
        setLoading(true);
        setTimeout(() => {
          setUsers(response.data);
          setLoading(false);
          setErrorMessage("");
        }, 1000);
      })
      .catch(() => {
        setErrorMessage("Fail to load");
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <div className="about-page">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="about-page__container">
          <h2 className="about-page__title">ჩვენი გუნდი</h2>
        </div>
      )}
      {errorMessage.length > 0 ? (
        <h2 style={{ color: "red" }}>{errorMessage}</h2>
      ) : (
        ""
      )}

      {users.map((user, i) => {
        return <DisplayWorkers key={i} user={user} />;
      })}
    </div>
  );
};

export default AboutUs;
