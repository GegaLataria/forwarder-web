import React from "react";
import "./Contact.css";
import WebMap from "../../../apis/WebMap";

const Contact = () => {
  return <div>{buildContactScreen()}</div>;
};

const buildContactScreen = () => {
  return (
    <div>
      <section className="order">
        <div className="contact__text">
          <h2>დაგვიკავშირდი</h2>
        </div>
        <div className="order__contact">
          <div className="order__contact__item">
            <p className="contact__text__header">ტელეფონი</p>
            <p className="contact__text__input">555123456</p>
          </div>
          <div className="order__contact__item">
            <p className="contact__text__header">ელ.ფოსტა</p>
            <p className="contact__text__input">info@company.ge</p>
          </div>
          <div className="order__contact__item">
            <p className="contact__text__header">მისამართი</p>
            <p className="contact__text__input">ლორთქიფანიძის 26</p>
          </div>
          <div className="order__contact__item">
            <p className="contact__text__header">საათები: 10:00-19:00</p>
            <p className="contact__text__input">ორშაბათი-პარასკევი</p>
          </div>
        </div>
      </section>
      <div className="about-us-container">
        <p className="about-us-text">
          ჩვენი გუნდი დაკომპლექტებულია პროფესიონალებით. ვთანამშრომლობთ 5000-ზე
          მეტ ფიზიკურ პირთან და 300-ზე მეტ კომპანიასთან. თუ გსურთ მეტი გაიგოთ
          ჩვენს გუნდზე, დააწკაპუნეთ ღილაკს.{" "}
        </p>
        <br></br>
        <div className="about-us-button-container">
          <a className="about-us-button" href="/about">
            ჩვენი გუნდი
          </a>
        </div>
      </div>
      <div className="map__contact">
        <h2 className="map__contact__title">მისამართი</h2>
        <section className="map">
          <WebMap />
        </section>
      </div>
    </div>
  );
};

export default Contact;
