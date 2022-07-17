import React from "react";
import './Home.css';

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
                    <h2 className="desc-htag">იშოპინგე ჭკვიანურად</h2>
                    <p className="desc-ptag">თურქეთში ყველაფერი გაცილებით იაფია! იშოპინგე ვებგვერდზე Trendyol.com, ან სხვა ნებისმიერ თურქულ პლატფორმაზე და შეიძინე: ტანსაცმელი, ავეჯი, თავის მოვლის საშუალებები, სამშენებლო მასალები, სათამაშოები თუ სხვა შენთვის სასურველი ნივთები და ჩვენ მოგვანდე მათი სწრაფად და უსაფრთხოდ ტრანსპორტირება. სლიქ - ამანათები თურქეთიდან</p>
                    <a id="get-more" href="https://sleek.ge/">გაიგე მეტი</a>
                </div>
            </section>
            
        </div>
    );
};


export default Home;