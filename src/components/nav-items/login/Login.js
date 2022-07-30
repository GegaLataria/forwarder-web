import React, { useEffect, useState } from "react";
import LoggedIn from "./loggedInItems/LoggedIn";
import "./Login.css";

const database = [
  {
    email: "gega@gmail.com",
    password: "1234",
    firstName: "გეგა",
    lastName: "ლატარია",
    phoneNumber: "555123456",
    addressOneTurkey: "Istanbul",
    addressTwoTurkey: "Fatih",
    addressThreeTurkey: "Aksaray Mah",
    zipCodeTurkey: "34096",
  },
  {
    email: "anano@gmail.com",
    password: "123",
    firstName: "Anano",
    lastName: "Kapanadze",
    phoneNumber: "555123456",
    addressOneTurkey: "Istanbul",
    addressTwoTurkey: "Fatih",
    addressThreeTurkey: "Aksaray Mah",
    zipCodeTurkey: "34096",
  },
];

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    let { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.email === uname.value);
    if (userData) {
      if (userData.password === pass.value) {
        setIsSubmitted(true);
        setLoggedInUser(userData);
      }
    }
  };
  useEffect(() => {
    if (loggedInUser.length !== 0) {
      window.localStorage.setItem("user", JSON.stringify(loggedInUser));
    }
  }, [loggedInUser]);

  const renderForm = () => {
    return (
      <div className="login-container">
        <form className="login-form">
          <div className="login-form__item">
            <p className="login-form__item__title">სახელი</p>
            <input
              className="login-form__item__input"
              name="uname"
              type={"email"}
            ></input>
          </div>
          <div className="login-form__item">
            <p className="login-form__item__title">პაროლი</p>
            <input
              className="login-form__item__input"
              name="pass"
              type={"password"}
            ></input>
          </div>
          <div>
            <input
              className="login-form__button"
              type={"submit"}
              onClick={handleSubmit}
              value="Login"
            ></input>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      {loggedInUser ? (
        <LoggedIn user={loggedInUser} setUser={setLoggedInUser} />
      ) : (
        renderForm()
      )}
    </div>
  );
};

export default Login;
