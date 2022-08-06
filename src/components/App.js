import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./nav-items/home/Home";
import Calculator from "./nav-items/calculator/Calculator";
import FAQ from "./nav-items/faq/FAQ";
import Order from "./nav-items/order/Order";
import Shops from "./nav-items/shops/Shops";
import Contact from "./nav-items/contact/Contact";
import Login from "./nav-items/login/Login";
import Conditions from "./terms-and-cond/Conditions";
import Parcels from "./nav-items/login/loggedInItems/parcels/allParcels/Parcels";
import "./App.css";
import Footer from "./footer/Footer";
import Notifications from "./nav-items/login/loggedInItems/notifications/Notifications";
import Transactions from "./nav-items/login/loggedInItems/transactions/Transactions";
import SentParcels from "./nav-items/login/loggedInItems/parcels/allParcels/SentParcels";
import ArrivedParcels from "./nav-items/login/loggedInItems/parcels/allParcels/ArrivedParcels";
import TakenParcels from "./nav-items/login/loggedInItems/parcels/allParcels/TakenParcels";
import LogOutMob from "./nav-items/login/LogOutMob";

export const Context = React.createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  return (
    <div>
      <BrowserRouter>
        <Context.Provider value={{ loggedInUser, setLoggedInUser }}>
          <Header />
          <div>
            <Route exact path="/main">
              <Home />
            </Route>
            <Route exact path="/faq">
              <FAQ />
            </Route>
            <Route path="/how-to-order">
              <Order />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/shops">
              <Shops />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">{loggedInUser ? <LogOutMob /> : ""}</Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/terms-and-conditions">
              <Conditions />
            </Route>
            <Route exact path="/login/parcels">
              <Parcels />
            </Route>
            <Route path="/login/notifications">
              <Notifications />
            </Route>
            <Route path="/login/transactions">
              <Transactions />
            </Route>
            <Route path={"/login/parcels/sent"}>
              <SentParcels />
            </Route>
            <Route path={"/login/parcels/arrived"}>
              <ArrivedParcels />
            </Route>
            <Route path={"/login/parcels/taken"}>
              <TakenParcels />
            </Route>
          </div>
          <Footer />
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
