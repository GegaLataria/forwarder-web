import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [errorMessages, setErrorMessages] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
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
      const newRegistered = [
        ...JSON.parse(localStorage.getItem("registered")),
        array,
      ];

      setErrorMessages("თქვენ წარმატებით გაიარეთ რეგისტრაცია");
      window.localStorage.setItem("registered", JSON.stringify(newRegistered));
    } else {
      setErrorMessages("შეავსეთ ყველა ცარიელი ველი");
    }
  };

  const inputChange = () => {
    setErrorMessages("");
  };
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
        <button onClick={handleRegister} className="register-button">
          რეგისტრაცია
        </button>
        {errorMessages ? (
          <h2
            className={
              errorMessages !== "თქვენ წარმატებით გაიარეთ რეგისტრაცია"
                ? "incorrect-message"
                : "success-register"
            }
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

export default Register;
