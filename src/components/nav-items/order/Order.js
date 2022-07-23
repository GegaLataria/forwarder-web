import React from "react";
import "./Order.css";
import Footer from "../../footer/Footer";

const Order = () => {
    return <div>{buildOrderScreen()}</div>
};

const buildOrderScreen = () => {
    return (
        <div>
            <section className="order">
                <div className="order__text">
                    <h2>როგორ შევუკვეთო?</h2>
                    <p>ჩასქროლე გვერდი ვიდეოს ინსტრუქციის სანახავად.თუ გაქვს კითხვები შეგიძლია მოგვწერო ან დაგვიკავშირდე, ჩვენი გუნდი მუდმივად მზად არის დაგეხმაროთ.</p>
                </div>
                <div className="order__contact">
                    <div className="order__contact__item">
                        <p>ტელეფონი</p>
                        <p>555123456</p>
                    </div>
                    <div className="order__contact__item">
                        <p>ელ.ფოსტა</p>
                        <p>info@company.ge</p>
                    </div>
                    <div className="order__contact__item">
                        <p>10:00-19:00</p>
                        <p>ორშაბათი-პარასკევი</p>
                    </div>
                </div>
            </section>
            <section className="youtube">
            <iframe
                className="youtube__link"
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                width={'70%'}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
            />{" "}
            </section>
            <section>
                <Footer/>
            </section>
            
        </div>
    );
}

export default Order;