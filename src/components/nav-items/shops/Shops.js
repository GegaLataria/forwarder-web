import React from "react";
import Footer from "../../footer/Footer";
import "./Shops.css";

const Shops = () => {
    return <div>{buildShopsScreen()}</div>
};

const buildShopsScreen = () => {
    return (
        <div>
            <section className="categories">
                <div className="categories__list">
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=1">
                            <h4>ტანსაცმელი</h4>
                        </a>
                    </div>
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=2">
                            <h4>სათამაშოები</h4>
                        </a>
                    </div>
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=3">
                            <h4>ავტონაწილები</h4>
                        </a>
                    </div>
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=4">
                            <h4>სამკაული</h4>
                        </a>
                    </div>
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=5">
                            <h4>სილამაზე</h4>
                        </a>
                    </div>
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=6">
                            <h4>საყოფაცხოვრებო</h4>
                        </a>
                    </div>
                </div>
            </section>
            <section className="shops-section">
                <div className="shops-section__title">
                    <h2>მაღაზიები</h2>
                </div>
                <div className="shops-section__list">
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                    <div className="shops-section__list__item">
                        <a className="shops-section__list__item__link" href="https://www.trendyol.com/butik/liste/1/kadin" target="_blank" rel="noreferrer">Trendyol</a>
                    </div>
                </div>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
        
    );
};


export default Shops;