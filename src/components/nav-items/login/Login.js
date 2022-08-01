import React, { useEffect, useState } from "react";
import { Context } from "../../App";
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
    transactions: {
      dateOne: "05.05.2022",
      moneyOne: "25.7",
      dateTwo: "01.04.2022",
      moneyTwo: "19.8",
      dateThree: "25.03.2022",
      moneyThree: "10.5",
      dateFour: "10.02.2022",
      moneyFour: "40.4",
    },
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
    transactions: {
      dateOne: "15.07.2022",
      moneyOne: "12.7",
      dateTwo: "11.06.2022",
      moneyTwo: "45.8",
      dateThree: "10.05.2022",
      moneyThree: "9.5",
      dateFour: "18.02.2022",
      moneyFour: "30.4",
    },
  },
];

const Login = () => {
  const value = React.useContext(Context);
  const [isSubmitted, setIsSubmitted] = useState(false);
  //there was useState
  const handleSubmit = (event) => {
    event.preventDefault();
    let { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.email === uname.value);
    if (userData) {
      if (userData.password === pass.value) {
        setIsSubmitted(true);
        value.setLoggedInUser(userData);
      }
    }
  };
  useEffect(() => {
    if (value.loggedInUser.length !== 0) {
      window.localStorage.setItem("user", JSON.stringify(value.loggedInUser));
    }
  }, [value.loggedInUser]);

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
      {value.loggedInUser ? (
        <LoggedIn user={value.loggedInUser} setUser={value.setLoggedInUser} />
      ) : (
        renderForm()
      )}
    </div>
  );
};

export default Login;
