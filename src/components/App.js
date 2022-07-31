import React from "react";
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
import Parcels from "./nav-items/login/loggedInItems/Parcels";
import "./App.css";
import Footer from "./footer/Footer";

export const Context = React.createContext();

const App = () => {
  const value = {
    name: "gega",
    gvari: "lataria",
  };
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Route exact path="/main">
            <Home />
          </Route>
          <Route path="/faq">
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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/terms-and-conditions">
            <Conditions />
          </Route>
          <Route path="/login/parcels">
            <Context.Provider value={value}>
              <Parcels />
            </Context.Provider>
          </Route>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
