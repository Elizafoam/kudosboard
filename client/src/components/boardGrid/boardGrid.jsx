import React from "react";
import "./boardGrid.css";
import Board from '../board/board';

const boardGrid = () => {
    return (
        <div className="boardGrid">
            <Board />
            <Board />
            <Board />
            <Board />
        </div>
    )
}

export default boardGrid;