import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return <div>{buildFooter()}</div>
};

const buildFooter = () => {
    return (
        <div className="footer">
            <div className="footer__box">
                <div className="footer__box__item">
                    <Link to="/" className="footer__box__item__link">მთავარი</Link>
                    <Link to="/faq" className="footer__box__item__link">FAQ</Link>
                    <Link to="/how-to-order" className="footer__box__item__link">როგორ შევუკვეთო?</Link>
                    <Link to="/flights" className="footer__box__item__link">რეისი</Link>
                    <Link to="/shops" className="footer__box__item__link">მაღაზიები</Link>
                    <Link to="/terms-and-conditions" className="footer__box__item__link">წესები და პირობები</Link>
                </div>
            </div>
            <div className="footer__rights">
                <p>@2021 წ, ყველა უფლება დაცულია</p>
            </div>
        </div>
    );
};

export default Footer;