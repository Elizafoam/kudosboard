import React from "react";
import "./Board.css";

const Board = ({title, category, author}) => {
    return(
        <div className="board">
            <img src="/src/assets/spongebob.gif" alt="card image" />
            <h1>{title}</h1>
            <p>{category}</p>
            <p>By: {author} </p>
            <div className="button">
                <button>View Board</button>
                <button>Delete Board</button>
            </div>
        </div>
    )
}

export default Board;