import React from "react";
import { useState, useEffect } from "react";
import './BoardPage.css';
import axios from "axios";
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Modal from '../NewBoard/NewBoard';
import Board from "../Board/Board";

const BoardPage = () => {
    // const [boards, setBoards] = useState({})
    const [boards, setBoards] = useState([]) //made into array instead of object to not cause dependency issues
    //implementing search functionality and filtering
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")

    // Modal & Create Board Stuff
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


    const populateBoards = async (params = {}) => {
      try {
        const response = await axios.get("http://localhost:3000/boards", {params});
        setBoards(response.data);
      }
      catch (error){
        console.log("Error fetching boards", error);
      }
    }

    useEffect(() => {
      populateBoards();
        
      }, [title]);

    //handling the category filter
    const handleCategoryFilter = (category) => {
      setSelectedCategory(category);
    }  

    const filteredBoards = boards.filter(board => {
      const matchesSearchQuery = board.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "" || board.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearchQuery && matchesCategory;
  });

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
    <div className='BoardPage'>
      <Banner/>

      <div className="board-container">
      <div className="board-container2">
      <main className="searchbox">
        <input
          type="text"
          placeholder="Search boards..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src="src/assets/glass.png" alt="Search" className='search-icon' />
      </main>

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
          setCategory={setCategory}/>
      )}
      </div>

      <div className="category-buttons">
        <button className="category-button" onClick={() => handleCategoryFilter("")}>All</button>
        <button className="category-button" onClick={() => handleCategoryFilter("Recent")}>Recent</button>
        <button className="category-button" onClick={() => handleCategoryFilter("Celebration")}> Celebration</button>
        <button className="category-button" onClick={() => handleCategoryFilter("Thank You")}>Thank You</button>
        <button className="category-button" onClick={() => handleCategoryFilter("Inspiration")}>Inspiration</button>
      </div>
      </div>

      <div className="b">
        <div className="boardGrid">
          {filteredBoards.map(board => (
            <Board
              key={board.board_id}
              board_id={board.board_id}
              title={board.title}
              category={board.category}
              author={board.author}/>
          ))}
        </div>
      </div>
      

      <Footer />
    </div>
  )
}

export default BoardPage;
