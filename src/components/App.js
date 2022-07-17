import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./Header";
import Home from "./nav-items/Home";
import Flights from "./nav-items/Flights";
import FAQ from "./nav-items/FAQ";
import Order from "./nav-items/Order";
import Shops from "./nav-items/Shops";
import Contact from "./nav-items/Contact";
import Login from "./nav-items/Login";




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
                    <Route path="/flights">
                        <Flights/>
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
