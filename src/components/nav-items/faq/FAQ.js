import React from "react";
import Footer from "../../footer/Footer";


const FAQ = () => {
    return <div>{buildFaqScreen()}</div>
};

const buildFaqScreen = () => {
    return (
        <div>
            FAQ
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default FAQ;