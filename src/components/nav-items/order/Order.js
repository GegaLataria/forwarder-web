import React from "react";
import "./Order.css";

const Order = () => {
  return <div>{buildOrderScreen()}</div>;
};

const buildOrderScreen = () => {
  return (
    <div>
      <section className="order">
        <div className="order__text">
          <h2 className="order__text__header">როგორ შევუკვეთო?</h2>
          <p className="order__text__input">
            ჩასქროლე გვერდი ვიდეოს ინსტრუქციის სანახავად.თუ გაქვს კითხვები
            შეგიძლია მოგვწერო ან დაგვიკავშირდე, ჩვენი გუნდი მუდმივად მზად არის
            დაგეხმაროთ.
          </p>
        </div>
        <div className="order__contact">
          <div className="order__contact__item">
            <p className="order__contact__item__header">ტელეფონი</p>
            <p>555123456</p>
          </div>
          <div className="order__contact__item">
            <p className="order__contact__item__header">ელ.ფოსტა</p>
            <p>info@company.ge</p>
          </div>
          <div className="order__contact__item">
            <p className="order__contact__item__header">საათები: 10:00-19:00</p>
            <p>ორშაბათი-პარასკევი</p>
          </div>
        </div>
      </section>
      <section className="youtube">
        <iframe
          className="youtube__link"
          width="70%"
          src="https://www.youtube.com/embed/HgzGwKwLmgM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default Order;
