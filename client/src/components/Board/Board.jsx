import React from "react";
import axios from "axios";
import "./Board.css";

const Board = ({ board_id, title, category, author}) => {
    const handleDelete = async () => {
      try {
        // Send DELETE request to backend API
        console.log(board_id);
        const response = await axios.delete(`http://localhost:3000/boards/${board_id}`);
        console.log("Board deleted:", response.data);
        // Optionally handle UI update or notification of successful deletion
      } catch (error) {
        console.error("Error deleting board:", error);
        // Handle error state or notify user of deletion failure
      }
    };
  
    return (
      <div className="board">
        <img src="/src/assets/spongebob.gif" alt="card image" />
        <h1>{title}</h1>
        <p>{category}</p>
        <p>By: {author}</p>
        <div className="button">
          <button>View Board</button>
          <button onClick={handleDelete}>Delete Board</button>
        </div>
      </div>
    );
  };
  
  export default Board;