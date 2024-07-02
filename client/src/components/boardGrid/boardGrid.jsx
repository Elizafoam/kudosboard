import React from "react";
import "./boardGrid.css";
import Board from '../Board/Board';

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