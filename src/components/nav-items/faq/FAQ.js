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
                    <a className="categories__list__item" href="?id=1">
                        <h4 className="shops-section__list__item__link">დეკლარაცია</h4>
                    </a>
                    <a className="categories__list__item" href="?id=1">
                        <h4 className="shops-section__list__item__link">განბაჟება</h4>
                    </a>
                    <a className="categories__list__item" href="?id=1">
                        <h4 className="shops-section__list__item__link">ტრანსპორტირება</h4>
                    </a>
                    <a className="categories__list__item" href="?id=1">
                        <h4 className="shops-section__list__item__link">გამოწერა</h4>
                    </a>
                    <a className="categories__list__item" href="?id=1">
                        <h4 className="shops-section__list__item__link">გადახდა</h4>
                    </a>
                    <a className="categories__list__item" href="?id=1">
                        <h4 className="shops-section__list__item__link">საკურიერო მომსახურება</h4>
                    </a>
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