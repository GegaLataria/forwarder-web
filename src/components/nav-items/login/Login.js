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
      weightOne: 2.8,
      dateTwo: "01.04.2022",
      weightTwo: 1.9,
      dateThree: "25.03.2022",
      weightThree: 0.9,
      dateFour: "10.02.2022",
      weightFour: 3.7,
    },
    parcels: {
      trackingOne: "5342317879",
      weightOne: 3.8,
      dateOne: "15.07.2022",
      trackingTwo: "1352317723",
      weightTwo: 3.1,
      dateTwo: "07.07.2022",
      trackingThree: "9134231787",
      weightThree: 0.7,
      dateThree: "30.06.2022",
      trackingFour: "7825409870",
      weightFour: 7.1,
      dateFour: "25.06.2022",
    },
  },
  {
    email: "anano@gmail.com",
    password: "123",
    firstName: "ანანო",
    lastName: "კაპანაძე",
    phoneNumber: "555123456",
    addressOneTurkey: "Istanbul",
    addressTwoTurkey: "Fatih",
    addressThreeTurkey: "Aksaray Mah",
    zipCodeTurkey: "34096",
    transactions: {
      dateOne: "15.07.2022",
      weightOne: 2.1,
      dateTwo: "11.06.2022",
      weightTwo: 4.5,
      dateThree: "10.05.2022",
      weightThree: 2.5,
      dateFour: "18.02.2022",
      weightFour: 0.7,
    },
    parcels: {
      trackingOne: "3452317111",
      weightOne: 3.1,
      dateOne: "18.07.2022",
      trackingTwo: "1882317744",
      weightTwo: 1.5,
      dateTwo: "10.07.2022",
      trackingThree: "3194231770",
      weightThree: 0.9,
      dateThree: "25.06.2022",
      trackingFour: "2355409871",
      weightFour: 5.5,
      dateFour: "15.06.2022",
    },
  },
];

const Login = () => {
  const value = React.useContext(Context);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.email === uname.value);
    if (!uname.value || !pass.value) {
      return setErrorMessages("You must fill both inputs");
    }
    if (userData) {
      if (userData.password === pass.value) {
        setErrorMessages("");
        setIsSubmitted(true);
        value.setLoggedInUser(userData);
      } else {
        setErrorMessages("Invalid Username or Password");
      }
    } else {
      setErrorMessages("Invalid Username or Password");
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
              required
            ></input>
          </div>
          <div className="login-form__item">
            <p className="login-form__item__title">პაროლი</p>
            <input
              className="login-form__item__input"
              name="pass"
              type={"password"}
              required
            ></input>
          </div>
          <div>
            <input
              className="login-form__button"
              type={"submit"}
              onClick={handleSubmit}
              value="შესვლა"
            ></input>
          </div>
          <a className="register-button" href="/register">
            რეგისტრაცია
          </a>

          {!value.loggedInUser && errorMessages ? (
            <h2 className="incorrect-message">{errorMessages}</h2>
          ) : (
            ""
          )}
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
