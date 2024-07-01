import React from "react";
import "./CardGrid.css";
import Card from '../Card/Card';

const CardGrid = () => {
    return (
        <div className="CardGrid">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardGrid;