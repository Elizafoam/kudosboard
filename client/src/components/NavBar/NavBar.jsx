import React, { useState } from 'react';
import './NavBar.css';
import Modal from '../NewBoard/NewBoard';
import axios from 'axios';

const NavBar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setTitle("");
        setAuthor("");
        setCategory("");
    };

    const handleSubmit = () => {
        console.log("Submitting with:", { title, author, category });
        addBoard();
        handleCloseModal();
    };

    const addBoard = async () => {
        try {
            let boardData = {
                title: title,
                category: category,
                author: author,
            };
            const response = await axios.post("http://localhost:3000/boards", boardData);
            console.log("Board created:", response.data);
        } catch (error) {
            console.error("Error creating board:", error);
        }
    };

    return (
        <nav>
            <div className='nav'>
                <img src="src/assets/greeting-card.png" alt="logo" className='weblogo' />
                <h1 className='navtext'>KudoBoard</h1>
            </div>
      
            <div className='search-box'>
                <input type="text" placeholder='Search ...' />
                <img src="src/assets/glass.png" alt="Search" className='search-icon' />
            </div>
            <div>
            <div>
            <button className='button-link' onClick={handleOpenModal}>Create New Board</button>
            {modalOpen && (
                <Modal
                    onSubmit={handleSubmit}
                    closeModal={handleCloseModal}
                    title={title}
                    setTitle={setTitle}
                    author={author}
                    setAuthor={setAuthor}
                    category={category}
                    setCategory={setCategory}
                />
            )}
        </div>
            </div>
        </nav>
    );
};

export default NavBar;
