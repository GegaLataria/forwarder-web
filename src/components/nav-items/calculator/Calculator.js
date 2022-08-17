import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [lengthInput, setLengthInput] = useState();
  const [widthInput, setWidthInput] = useState();
  const [heightInput, setHeightInput] = useState();
  const [total, setTotal] = useState();

  const handleClick = () => {
    if (lengthInput && widthInput && heightInput) {
      let convertToRealWeight = (lengthInput * widthInput * heightInput) / 6000;
      setTotal(Math.round((convertToRealWeight + Number.EPSILON) * 100) / 100);
    }
  };

  return (
    <div>
      <section className="calculator">
        <div className="calculator__title">
          <p>მოცულობითი წონის გამოთვლა</p>
        </div>
        <div className="calculator__item">
          <p>სიგრძე(სმ)</p>
          <input
            onChange={(e) => setLengthInput(+e.target.value)}
            type="number"
            id="length-input"
            className="calculator__item__input"
            name="length"
          />
        </div>
        <div className="calculator__item">
          <p>სიგანე(სმ)</p>
          <input
            onChange={(e) => setWidthInput(+e.target.value)}
            type="number"
            id="width-input"
            className="calculator__item__input"
            name="width"
          />
        </div>
        <div className="calculator__item">
          <p>სიმაღლე(სმ)</p>
          <input
            onChange={(e) => setHeightInput(+e.target.value)}
            type="number"
            id="height-input"
            className="calculator__item__input"
            name="height"
          />
        </div>
        <div>
          <button onClick={handleClick} className="calculator__button">
            გამოთვლა
          </button>
          {total ? <p id="weight-result">{total} კგ</p> : ""}
        </div>
      </section>
      <div className="calculator__title">
        <p>მოცულობითი წონის გამოთვლა</p>
      </div>
    </div>
  );
};

export default Calculator;
