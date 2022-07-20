import React from "react";
import Footer from "../../footer/Footer";

const Flights = () => {
    return <div>{buildFlightsScreen()}</div>
};

const buildFlightsScreen = () => {
    return (
        <div>
            Flights
            <section>
                <Footer/>
            </section>
        </div>
    );
};


export default Flights;

