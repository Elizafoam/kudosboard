import React from "react";
import "./board.css";

const board = () => {
    return (
        <div className="board">
            <img src="/src/assets/spongebob.gif" alt="card image" />
            <h1>title</h1>
            <p>description</p>
            <div className="button">
                <button>View Board</button>
                <button>Delete Board</button>
            </div>
        </div>
    )
}

export default board;