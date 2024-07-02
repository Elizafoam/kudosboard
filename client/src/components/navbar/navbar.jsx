import React, {useState,useEffect} from 'react';
import './navbar.css';
import Modal from '../modal/modal';



const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");


    const handleOpenModal =() =>{
        setModalOpen(true)
    }

    const handleCloseModal = (message) =>{
        setModalOpen(false);
        setTitle("");
        setAuthor("");
        setCategory("");
    }

    const handleSubmit = (message) => {
        console.log(message, { title, author, category });
        handleCloseModal("Modal was closed after submit");
    }

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
                {/* change the create button  from anchor tag to button*/}
                <button className='button-link' onClick={handleOpenModal}> Create New Board</button>
            </div>

            {modalOpen && (
                <Modal 
                onSubmit ={handleSubmit}
                closeModal ={handleCloseModal}
                title = {title}
                setTitle={setTitle}
                author={author}
                setAuthor={setAuthor}
                category={category}
                setCategory={setCategory}
                />
            )}

      
    </nav>
  );
};

export default Navbar;