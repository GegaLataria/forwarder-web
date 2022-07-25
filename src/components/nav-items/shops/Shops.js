import React from "react";
import "./Shops.css";

const Shops = () => {
    return <div>{buildShopsScreen()}</div>
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

                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                    <a className="shops-section__list__item" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">
                        <h4 className="shops-section__list__item__link">Trendyol</h4>
                    </a>
                </div>
            </section>
        </div>
        
    );
};


export default Shops;