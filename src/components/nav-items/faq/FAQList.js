import React from "react";

const FAQList = () => {
  return (
    <div>
      <section className="categories">
        <div className="categories__list">
          <a className="categories__list__item" href="?id=1">
            <h4 className="shops-section__list__item__link">დეკლარაცია</h4>
          </a>
          <a className="categories__list__item" href="?id=2">
            <h4 className="shops-section__list__item__link">განბაჟება</h4>
          </a>
          <a className="categories__list__item" href="?id=3">
            <h4 className="shops-section__list__item__link">ტრანსპორტირება</h4>
          </a>
          <a className="categories__list__item" href="?id=4">
            <h4 className="shops-section__list__item__link">გამოწერა</h4>
          </a>
          <a className="categories__list__item" href="?id=5">
            <h4 className="shops-section__list__item__link">გადახდა</h4>
          </a>
          <a className="categories__list__item" href="?id=6">
            <h4 className="shops-section__list__item__link">
              საკურიერო მომსახურება
            </h4>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQList;
