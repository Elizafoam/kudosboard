import React from 'react';
import './navbar.css';



const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleButtonClick = (value) => {
        setModalOpen(false);
        setMessage(value);
    };

    return (
        <nav>
            <div className='nav'>
                <img src="src/assets/greeting-card.png" alt="logo"  className='weblogo'/>
                <h1 className='navtext'>KudoBoard</h1>
            </div>
      
            <div className='search-box'>
                <input type="text" placeholder='Search ...' />
                <img src="src/assets/glass.png" alt="Search"  className='search-icon'/>
            </div>
            <div>
                <a href="/createBoard" className='button-link'>Create New Board</a>
            </div>
      
    </nav>
  );
};

export default Navbar;