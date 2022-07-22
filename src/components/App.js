import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./header/Header";
import Home from "./nav-items/home/Home";
import Calculator from "./nav-items/calculator/Calculator";
import FAQ from "./nav-items/faq/FAQ";
import Order from "./nav-items/order/Order";
import Shops from "./nav-items/shops/Shops";
import Contact from "./nav-items/contact/Contact";
import Login from "./nav-items/login/Login";
import './App.css';




const App = () => {
    return (
        <div>
            <BrowserRouter>
                    <Header/>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/faq">
                        <FAQ/>
                    </Route>
                    <Route path="/how-to-order">
                        <Order/>
                    </Route>
                    <Route path="/calculator">
                        <Calculator/>
                    </Route>
                    <Route path="/shops">
                        <Shops/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
            </BrowserRouter>
            
        </div>
    );
};

export default App;
