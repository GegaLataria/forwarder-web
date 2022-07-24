import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { MyLink } from "../footer/MyLink";
import './Header.css';



const Header = () => {
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
    // const handleClick = event => {        
    //     if(selected !== event.target && selected){
    //         selected.classList.remove("active");
    //     }   
    //     setSelected(event.target);
    //     event.target.classList.add("active");
    // };
    return (
        <div className="topnav">
            <MyLink to="/main" text={"მთავარი"} applyStyles />
            <MyLink to="/faq" applyStyles text={"FAQ"}/>
            <MyLink to="/how-to-order" applyStyles text={"როგორ შევუკვეთო?"}/>
            <MyLink to="/calculator" applyStyles text={"კალკულატორი"}/>
            <MyLink to="/shops" applyStyles text={"მაღაზიები"}/>
            <MyLink to="/contact"  applyStyles text={"კონტაქტი"} />
            <MyLink to="/login" className="login" applyStyles text={"შესვლა"}/>
        </div>
    );
};

export default Header;