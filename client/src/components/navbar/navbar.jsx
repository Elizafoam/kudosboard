import React from 'react';
import './navbar.css';


const Navbar = () => {
  return (
    <nav>
      <div className='nav'>
        <a href="/" className='weblogo'>Kuodos</a>
        <ul>
          <li className='active'>
            <a href="/home">Home</a>
          </li>
        </ul>
       
      </div>
      
      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src="src/assets/navbarSearch.png" alt="Search"  className='search-icon'/>
      </div>
      <a href="/createBoard" className="button-link">CreateBoard</a>
      
    </nav>
  );
};

export default Navbar;
