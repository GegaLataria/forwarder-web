import React from "react";
import Footer from "../../footer/Footer";
import "./FAQ.css";


const FAQ = () => {
    return <div>{buildFaqScreen()}</div>
};

const buildFaqScreen = () => {
    return (
        <div>
            <section className="categories">
                <div className="categories__list">
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=1">
                            <h4>დეკლარაცია</h4>
                        </a>
                    </div>
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=2">
                            <h4>განბაჟება</h4>
                        </a>
                    </div>
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=3">
                            <h4>ტრანსპორტირება</h4>
                        </a>
                    </div>
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=4">
                            <h4>გამოწერა</h4>
                        </a>
                    </div>
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=5">
                            <h4>გადახდა</h4>
                        </a>
                    </div>
                    <div className="categories__list__item">
                        <a className="shops-section__list__item__link" href="?id=6">
                            <h4>საკურიერო მომსახურება</h4>
                        </a>
                    </div>
                </div>
            </section>
            <section className="questions-bar">
                <div className="questions-bar__title">
                    <h1>ხშირად დასმული კითხვები</h1>
                </div>
                <div className="questions-bar__list">
                    <div className="questions-bar__list__item">
                        
                    </div>  
                </div>
            </section>

            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default FAQ;