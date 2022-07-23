import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const location = useLocation();
    const [selected, setSelected] = useState('');
    useEffect(() => {
        const currentItem = document.getElementById(location.pathname);
        if(currentItem !== null){
            if(currentItem.classList.contains("active")){
                currentItem.classList.remove("active");
            }
            
            setSelected(currentItem);
            currentItem.classList.add("active");
        }
        },[location]);
        const handleClick = event => {        
            if(selected !== event.target && selected){
                selected.classList.remove("active");
            }
            setSelected(event.target);
            event.target.classList.add("active");
            
        
    }

    return (
        <div className="footer">
            <div className="footer__box">
                <div className="footer__box__item">
                    <Link to="/main" className="footer__box__item__link" onClick={handleClick}>მთავარი</Link>
                    <Link to="/faq" className="footer__box__item__link" onClick={handleClick}>FAQ</Link>
                    <Link to="/how-to-order" className="footer__box__item__link" onClick={handleClick}>როგორ შევუკვეთო?</Link>
                    <Link to="/calculator" className="footer__box__item__link" onClick={handleClick}>კალკულატორი</Link>
                    <Link to="/shops" className="footer__box__item__link" onClick={handleClick}>მაღაზიები</Link>
                    <Link to="/terms-and-conditions" className="footer__box__item__link" onClick={handleClick}>წესები და პირობები</Link>
                </div>
            </div>
            <div className="footer__rights">
                <p>@2022 წ, ყველა უფლება დაცულია</p>
            </div>
        </div>
    );
};

export default Footer;