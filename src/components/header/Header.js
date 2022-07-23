import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Header.css';



const Header = () => {
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
    };
    return (
        <div className="topnav">
            <Link id="/main" onClick={handleClick} to="/main">მთავარი</Link>
            <Link id="/faq" onClick={handleClick} to="/faq">FAQ</Link>
            <Link id="/how-to-order" onClick={handleClick} to="/how-to-order">როგორ შევუკვეთო?</Link>
            <Link id="/calculator" onClick={handleClick} to="/calculator">კალკულატორი</Link>
            <Link id="/shops" onClick={handleClick} to="/shops">მაღაზიები</Link>
            <Link id="/contact" onClick={handleClick} to="/contact">კონტაქტი</Link>
            <Link id="/login" className="login" onClick={handleClick} to="/login">შესვლა</Link>
        </div>
    );
};

export default Header;