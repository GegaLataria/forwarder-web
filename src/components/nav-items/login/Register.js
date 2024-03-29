import React, { useContext, useState } from "react";
import { Context } from "../../App";
import Loader from "./Loader";
import "./Register.css";

const Register = () => {
  const value = useContext(Context);

  const [errorMessages, setErrorMessages] = useState("");
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      registerHelper();
    }, 1000);
  };

  const registerHelper = () => {
    const defaultParcels = JSON.parse(localStorage.getItem("registered"))[0]
      .parcels;
    const defaultTransactions = JSON.parse(
      localStorage.getItem("registered")
    )[0].transactions;
    if (
      document.forms[0].registerFirstname.value &&
      document.forms[0].registerLastname.value &&
      document.forms[0].registerEmail.value &&
      document.forms[0].registerPassword.value
    ) {
      let array = {
        firstName: document.forms[0].registerFirstname.value,
        lastName: document.forms[0].registerLastname.value,
        email: document.forms[0].registerEmail.value,
        password: document.forms[0].registerPassword.value,
        parcels: defaultParcels,
        transactions: defaultTransactions,
        phoneNumber: "555123456",
        addressOneTurkey: "Istanbul",
        addressTwoTurkey: "Fatih",
        addressThreeTurkey: "Aksaray Mah",
        zipCodeTurkey: "34096",
      };

      const existingList = JSON.parse(localStorage.getItem("registered"));
      if (
        existingList.filter((users) => users.email === array.email).length > 0
      ) {
        setRegistered(false);
        setErrorMessages("ელ.ფოსტა უკვე დარეგისტრირებულია");
      } else {
        const newRegistered = [
          ...JSON.parse(localStorage.getItem("registered")),
          array,
        ];

        setRegistered(true);
        setErrorMessages("თქვენ წარმატებით გაიარეთ რეგისტრაცია");
        value.setLoggedInUser(array);
        window.localStorage.setItem("user", JSON.stringify(value.loggedInUser));

        window.localStorage.setItem(
          "registered",
          JSON.stringify(newRegistered)
        );
        document.forms[0].registerFirstname.value = "";
        document.forms[0].registerLastname.value = "";
        document.forms[0].registerEmail.value = "";
        document.forms[0].registerPassword.value = "";
      }
    } else {
      setRegistered(false);
      setErrorMessages("შეავსეთ ყველა ცარიელი ველი");
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    handleLoading();
  };

  const inputChange = () => {
    setErrorMessages("");
  };

  const renderForm = () => {
    return (
      <div className="login-container">
        <form className="login-form">
          <div className="register-form__item">
            <p className="register-title">სახელი</p>
            <input
              className="login-form__item__input"
              name="registerFirstname"
              type={"text"}
              onChange={inputChange}
              required
            ></input>
          </div>
          <div className="register-form__item">
            <p className="register-title">გვარი</p>
            <input
              className="login-form__item__input"
              name="registerLastname"
              type={"text"}
              onChange={inputChange}
              required
            ></input>
          </div>
          <div className="register-form__item">
            <p className="register-title">ელ.ფოსტა</p>
            <input
              className="login-form__item__input"
              name="registerEmail"
              type={"email"}
              onChange={inputChange}
              required
            ></input>
          </div>
          <div className="register-form__item">
            <p className="register-title">პაროლი</p>
            <input
              className="login-form__item__input"
              name="registerPassword"
              type={"password"}
              onChange={inputChange}
              required
            ></input>
          </div>
          {!loading ? (
            <button onClick={handleRegister} className="register-button">
              რეგისტრაცია
            </button>
          ) : (
            ""
          )}
          {loading ? <Loader /> : ""}
          {errorMessages ? (
            <h2
              className={!registered ? "incorrect-message" : "success-register"}
            >
              {errorMessages}
            </h2>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  };
  return renderForm();
};

export default Register;
