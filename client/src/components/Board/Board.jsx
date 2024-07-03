import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CardPage from '../CardPage/CardPage';
import axios from "axios";
import "./Board.css";

const Board = ({ board_id, title, category, author }) => {
    const [deleted, setDeleted] = useState(false);
  
    const handleDelete = async () => {
      try {
        const response = await axios.delete(`http://localhost:3000/boards/${board_id}`);
        console.log("Board deleted:", response.data);
        setDeleted(true); // Update local state to reflect deletion
      } catch (error) {
        console.error("Error deleting board:", error);
        // Handle error state or notify user of deletion failure
      }
    };
  
    if (deleted) {
      return null; // Hide the board if it has been deleted
    }
  
    return (
      <div className="board">
        <h1 className="boardtitle">{title}</h1>
          <img src={`https://picsum.photos/200/300?random=${board_id}`} alt="card image" />
          
          <p className="boardCategory">{category}</p>
          <p className="boardAuthor">By: {author}</p>
          <div className="button">
              <Link to={`boards/${board_id}`} onClick={() => console.log("switch")}>
                <button className="buttonTitle">View</button>
                </Link>
            <button className="buttonTitle" onClick={handleDelete}>Delete</button>
          </div>
      </div>
    );
  };
  
  export default Board;