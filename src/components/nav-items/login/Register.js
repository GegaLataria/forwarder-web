import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="login-container">
      <div className="login-form">
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
          <p className="register-title">სახელი</p>
          <input
            className="login-form__item__input"
            name="register-lastname"
            type={"text"}
            required
          ></input>
        </div>
        <div className="register-form__item">
          <p className="register-title">სახელი</p>
          <input
            className="login-form__item__input"
            name="register-email"
            type={"email"}
            required
          ></input>
        </div>
        <div className="register-form__item">
          <p className="register-title">სახელი</p>
          <input
            className="login-form__item__input"
            name="register-number"
            type={"number"}
            required
          ></input>
        </div>
        <button className="register-button">რეგისტრაცია</button>
      </div>
    </div>
  );
};

export default Register;
