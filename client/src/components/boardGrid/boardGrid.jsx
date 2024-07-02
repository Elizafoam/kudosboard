import React from "react";
import "./boardGrid.css";
import board from '../board/board';

const boardGrid = () => {
    return (
        <div className="boardGrid">
            <board />
            <board />
            <board />
            <board />
        </div>
    )
}

export default boardGrid;