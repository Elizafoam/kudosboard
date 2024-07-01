import React from "react";
import "./Card.css";

const Card = () => {
    return (
        <div className="Card">
            <img src="/src/assets/spongebob.gif" alt="card image" />
            <h1>title</h1>
            <p>description</p>
            <div className="button">
                <button>Like</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Card;