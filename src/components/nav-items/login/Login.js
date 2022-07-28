import React, { useEffect, useState } from "react";
import LoggedIn from "./LoggedIn";
import "./Login.css";

const database = [
  {
    username: "Gega",
    password: "1234",
  },
  {
    username: "Anano",
    password: "123",
  },
];

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [test, setTest] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    let { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
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

  const checkUser = () => {
    if (window.localStorage.getItem("user")) {
      if (window.localStorage.getItem("user").length !== 0) {
        return true;
      }
    }
    return false;
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

// function Login() {
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     let { uname, pass } = document.forms[0];

//     const userData = database.find((user) => user.username === uname.value);

//     if (userData) {
//       if (userData.password !== pass.value) {
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>სახელი </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>პაროლი </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         <div className="title">შესვლა</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
// }

export default Login;
