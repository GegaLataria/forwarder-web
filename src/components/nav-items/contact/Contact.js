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
            <p>555123456</p>
          </div>
          <div className="order__contact__item">
            <p className="contact__text__header">ელ.ფოსტა</p>
            <p>info@company.ge</p>
          </div>
          <div className="order__contact__item">
            <p className="contact__text__header">მისამართი</p>
            <p>ლორთქიფანიძის 26</p>
          </div>
          <div className="order__contact__item">
            <p className="contact__text__header">საათები: 10:00-19:00</p>
            <p>ორშაბათი-პარასკევი</p>
          </div>
        </div>
      </section>
      <section className="map">
        <WebMap />
      </section>
    </div>
  );
};

export default Contact;
