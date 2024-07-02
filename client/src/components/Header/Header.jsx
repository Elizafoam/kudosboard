import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <div>kudosboard</div>
            <div>
                <button className="button">
                    <img src="/src/assets/search.png" alt="search"/>
                </button>
                <button className='button'>
                    <img src="/src/assets/filter.png" alt="filter" />
                </button>
                <button className='button'>
                    <img src="/src/assets/home.png" alt="home" />
                </button>
            </div>
        </div>
    )
}

export default Header;