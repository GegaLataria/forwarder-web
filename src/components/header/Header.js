import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const [selected, setSelected] = useState('');

    const handleClick = event => {
        if(document.getElementsByClassName("active")[0]){
            document.getElementsByClassName("active")[0].classList.remove("active");
        }
        if(selected !== event.target && selected){
            selected.classList.remove("active");
        }
        setSelected(event.currentTarget);
        event.currentTarget.className += " active";
      };
 
    return (
        <div className="topnav">
            <Link id="main" onClick={handleClick} className="active" to="/">მთავარი</Link>
            <Link id="faq" onClick={handleClick} to="/faq">FAQ</Link>
            <Link id="order" onClick={handleClick} to="/how-to-order">როგორ შევუკვეთო?</Link>
            <Link id="flights" onClick={handleClick} to="/flights">რეისები</Link>
            <Link id="shops" onClick={handleClick} to="/shops">მაღაზიები</Link>
            <Link id="contact" onClick={handleClick} to="/contact">კონტაქტი</Link>
            <Link id="login" onClick={handleClick} to="/login">შესვლა</Link>
        </div>
    );
};

export default Header;