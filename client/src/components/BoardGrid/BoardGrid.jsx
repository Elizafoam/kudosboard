import React from "react";
import "./BoardGrid.css";
import Board from "../Board/Board";
// import Board from "../board/board";

const BoardGrid = () => {
    return (
        <div className="boardGrid">
            <Board />
            <Board />
            <Board />
            <Board />
        </div>
    )
}

export default BoardGrid;