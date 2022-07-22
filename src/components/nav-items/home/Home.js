import React from "react";
import './Home.css';
import WebMap from "../../../apis/WebMap";
import Footer from "../../footer/Footer";

const Home = () => {
    return <div>{buildHomeScreen()}</div>
};

const buildHomeScreen = () => {
    return (
        <div className="box">
            <div className="box-home">დარეგისტრირდი, გამოიწერე სასურველი ნივთები უფრო დაბალ ფასად. თუ გაქვს კითხვები, მოგვწერე. სლიქი - ამანათები თურქეთიდან. 1კგ=3$ 
                <br/>
                <a id="shops-btn" href="https://sleek.ge/">მაღაზიები</a>
            </div>
            <section className="desciption-box">
                <div className="column">
                    <h2 className="desc-h">იშოპინგე ჭკვიანურად</h2>
                    <p className="desc-p">თურქეთში ყველაფერი გაცილებით იაფია! იშოპინგე ვებგვერდზე Trendyol.com, ან სხვა ნებისმიერ თურქულ პლატფორმაზე და შეიძინე: ტანსაცმელი, ავეჯი, თავის მოვლის საშუალებები, სამშენებლო მასალები, სათამაშოები თუ სხვა შენთვის სასურველი ნივთები და ჩვენ მოგვანდე მათი სწრაფად და უსაფრთხოდ ტრანსპორტირება. სლიქ - ამანათები თურქეთიდან</p>
                    <a id="get-more-btn" href="https://sleek.ge/">გაიგე მეტი</a>
                </div>
                <div className="column">
                    <div className="platform-shop">
                        <div className="platform-shop__item">
                            <figure>
                                <a className="platform-shop_link" href="https://trendyol.com" target="_blank" rel="noreferrer">Trendyol</a>
                            </figure>
                        </div>
                        <div className="platform-shop__item">
                            <figure>
                                <a className="platform-shop_link" href="https://Hepsiburada.com" target="_blank" rel="noreferrer">Hepsiburada</a>
                            </figure>
                        </div>
                        <div className="platform-shop__item">
                            <figure>
                                <a className="platform-shop_link" href="https://penti.com" target="_blank" rel="noreferrer">Penti</a>
                            </figure>
                        </div>
                        <div className="platform-shop__item">
                            <figure>
                                <a className="platform-shop_link" href="https://puma.com" target="_blank" rel="noreferrer">Puma</a>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flights">
                    <div className="flights_column">
                        <div className="flights_box">
                            <div className="flights_box_item">
                                <h3>რეისი TR003 გზაშია</h3>
                            </div>
                        </div>
                        <div className="flights_box">
                            <div className="flights_box_item">
                                <h3>რეისი TR002 ჩამოსულია</h3>
                            </div>
                        </div>
                        <div className="flights_box">
                            <div className="flights_box_item">
                                <h3>რეისი TR001 ჩამოსულია</h3>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="map-box"> 
                <div className="column">
                    <WebMap />
                </div>
                <div className="column-contact">
                    <div className="contact-info">
                        <h1>მის: ლორთქიფანიძის 26</h1>
                        <h1>ტელ: 555123456</h1>
                        <h1>სამუშაო საათები: 10:00-19:00</h1>
                    </div>
                </div>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
};


export default Home;