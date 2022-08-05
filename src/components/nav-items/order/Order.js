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
            <p className="order__contact__item__input">555123456</p>
          </div>
          <div className="order__contact__item">
            <p className="order__contact__item__header">ელ.ფოსტა</p>
            <p className="order__contact__item__input">info@company.ge</p>
          </div>
          <div className="order__contact__item">
            <p className="order__contact__item__header">საათები: 10:00-19:00</p>
            <p className="order__contact__item__input">ორშაბათი-პარასკევი</p>
          </div>
        </div>
      </section>
      <div className="services">
        <h2 className="services__title">სერვისები</h2>
        <div className="services__list">
          <div className="services__list__item">
            <h3 className="services__list__item__header">თურქეთის მისამართი</h3>
            <hr className="services__list__item__hr"></hr>
            <p className="services__list__item__input">
              რეგისტრაციისას მოგანიჭებთ თურქულ მისამართს
            </p>
          </div>
          <div className="services__list__item">
            <h3 className="services__list__item__header">გამოწერა</h3>
            <hr className="services__list__item__hr"></hr>
            <p className="services__list__item__input">
              გამოიწერე სასურველი ნივთები
            </p>
          </div>
          <div className="services__list__item">
            <h3 className="services__list__item__header">ტრანპორტირება</h3>
            <hr className="services__list__item__hr"></hr>
            <p className="services__list__item__input">
              შენ მიიღებ შეტყობინებას როცა ამანათი მოვა შენს მისამართზე
            </p>
          </div>
          <div className="services__list__item">
            <h3 className="services__list__item__header">გატანა</h3>
            <hr className="services__list__item__hr"></hr>
            <p className="services__list__item__input">
              შეგიძლია გაიტანო ოფისიდან ან ისარგებლო კურიერის მომსახურებით
            </p>
          </div>
        </div>
      </div>
      <h2 className="youtube__header">რეგისტრაციის ინსტრუქცია</h2>
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
