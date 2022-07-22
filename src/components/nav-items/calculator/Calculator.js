import React from "react";
import Footer from "../../footer/Footer";
import "./Calculator.css";

const Calculator = () => {
    return <div>{buildCalculatorScreen()}</div>
};


const handleClick = (event) => {
    let lengthInput = Number(document.getElementById("length-input").value);
    let widthInput = Number(document.getElementById("width-input").value);
    let heightInput = Number(document.getElementById("height-input").value);
    let convertToRealWeight = (lengthInput*widthInput*heightInput)/6000;
    let finalResult = (Math.round((convertToRealWeight+Number.EPSILON)*100)/100);
    document.getElementById("weight-result").innerHTML = finalResult + " კგ";
     
};

const buildCalculatorScreen = () => {
    return (
        <div>
            <section className="calculator">
                <div className="calculator__title">
                    <p>მოცულობითი წონის გამოთვლა</p>
                </div>
                <div className="calculator__item">
                    <p>სიგრძე(სმ)</p>
                    <input type="number" id="length-input" className="calculator__item__input" name="length"/>
                </div>
                <div className="calculator__item">
                    <p>სიგანე(სმ)</p>
                    <input type="number" id="width-input" className="calculator__item__input" name="width"/>
                </div>
                <div className="calculator__item">
                    <p>სიმაღლე(სმ)</p>
                    <input type="number" id="height-input" className="calculator__item__input" name="height"/>
                </div>
                <div>
                    <button onClick={handleClick} className="calculator__button">გამოთვლა</button>
                    <p id="weight-result"></p>
                </div>
            </section>    
        
            <section>
                <Footer/>
            </section>
        </div>
    );
};


export default Calculator;

