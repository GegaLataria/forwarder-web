import React from "react";
import "./Register.css";

const Register = () => {
  console.log(document.forms);
  const handleRegister = () => {
    console.log(JSON.parse(window.localStorage.getItem("user")));
  };
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="register-form__item">
          <p className="register-title">სახელი</p>
          <input
            className="login-form__item__input"
            name="register-firstname"
            type={"text"}
            required
          ></input>
        </div>
        <div className="register-form__item">
          <p className="register-title">გვარი</p>
          <input
            className="login-form__item__input"
            name="register-lastname"
            type={"text"}
            required
          ></input>
        </div>
        <div className="register-form__item">
          <p className="register-title">ელ.ფოსტა</p>
          <input
            className="login-form__item__input"
            name="register-email"
            type={"email"}
            required
          ></input>
        </div>
        <div className="register-form__item">
          <p className="register-title">ტელეფონი</p>
          <input
            className="login-form__item__input"
            name="register-number"
            type={"number"}
            required
          ></input>
        </div>
        <button onClick={handleRegister} className="register-button">
          რეგისტრაცია
        </button>
      </form>
    </div>
  );
};

export default Register;
