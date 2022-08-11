import React from "react";
import "./Shops.css";

const Shops = () => {
  return <div>{buildShopsScreen()}</div>;
};

const buildShopsScreen = () => {
  return (
    <div>
      <section className="categories">
        <div className="categories__list">
          <a className="categories__list__item" href="?id=1">
            <h4 className="shops-section__list__item__link">ტანსაცმელი</h4>
          </a>
          <a className="categories__list__item" href="?id=2">
            <h4 className="shops-section__list__item__link">სათამაშოები</h4>
          </a>
          <a className="categories__list__item" href="?id=3">
            <h4 className="shops-section__list__item__link">ავტონაწილები</h4>
          </a>
          <a className="categories__list__item" href="?id=4">
            <h4 className="shops-section__list__item__link">სამკაული</h4>
          </a>
          <a className="categories__list__item" href="?id=5">
            <h4 className="shops-section__list__item__link">სილამაზე</h4>
          </a>
          <a className="categories__list__item" href="?id=6">
            <h4 className="shops-section__list__item__link">საყოფაცხოვრებო</h4>
          </a>
        </div>
      </section>
      <section className="shops-section">
        <div className="shops-section__title">
          <h2>მაღაზიები</h2>
        </div>
        <div className="shops-section__list">
          <a
            className="shops-section__list__item"
            href="https://www.trendyol.com/butik/liste/1/kadin"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Trendyol</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.hepsiburada.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Hepsiburada</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.nike.com/tr/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Nike</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.adidas.com.tr/tr/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Adidas</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://tr.puma.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Puma</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.zara.com/gr/en/satin-camisole-dress-with-chain-strap-detail-p07756362.html?v1=179894033&v2=2113503"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Zara</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.bershka.com/tr/en/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Bershka</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.penti.com/tr/?gclid=CjwKCAjw0dKXBhBPEiwA2bmObZexzUI1Ps4-DDishwDqPxw8LMnFuffpiGxAjTaS94FdZowT2wh3RhoCUeMQAvD_BwE"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Penti</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.flo.com.tr/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Flo</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.massimodutti.com/tr/en/session-expired.html"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Massimo</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.stradivarius.com/tr/en/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Stradivarius</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.defacto.com.tr/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Defacto</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://shop.mango.com/tr/erkek"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Mango</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.pandora.net/tr-tr"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Pandora</h4>
          </a>
          <a
            className="shops-section__list__item"
            href="https://www.swarovski.com.tr/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="shops-section__list__item__link">Swarovski</h4>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Shops;
