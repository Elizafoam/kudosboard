import React, { useState } from 'react';
import './NavBar.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            
            <div className='nav'>
                <img src="src/assets/greeting-card.png" alt="logo" className='weblogo' />
                <Link to={"/"} onClick={() => console.log("switch")}> 
                <h1 className='navtext'>KudoBoard</h1>
                </Link>
            </div>
            
      
        </nav>
    );
};

export default NavBar;
