import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import { MyLink } from "./MyLink";

const Footer = () => {
    const location = useLocation();
    const [selected, setSelected] = useState('');
    // useEffect(() => {
    //     const currentItem = document.getElementById(location.pathname);
    //     if(currentItem !== null){
    //         if(currentItem.classList.contains("active")){
    //             currentItem.classList.remove("active");
    //         }
            
    //         setSelected(currentItem);
    //         currentItem.classList.add("active");
    //     }
    //     },[location]);
    //     const handleClick = event => {        
    //         if(selected !== event.target && selected){
    //             selected.classList.remove("active");
    //         }
    //         setSelected(event.target);
    //         event.target.classList.add("active");
            
        
    // }

    return (
        <div className="footer">
            <div className="footer__box">
                <div className="footer__box__item">
                    <MyLink to="/main" text={"მთავარი"} className="footer__box__item__link" />
                    <MyLink to="/faq" text="FAQ" className="footer__box__item__link" />
                    <MyLink to="/how-to-order" text={"როგორ შევუკვეთო?"} className="footer__box__item__link" />
                    <MyLink to="/calculator" text={"კალკულატორი"} className="footer__box__item__link" />
                    <MyLink to="/shops" text={"მაღაზიები"} className="footer__box__item__link" />
                    <MyLink to="/terms-and-conditions" text={"წესები და პირობები"} className="footer__box__item__link"/> 
                </div>
            </div>
            <div className="footer__rights">
                <p>@2022 წ, ყველა უფლება დაცულია</p>
            </div>
        </div>
    );
};

export default Footer;