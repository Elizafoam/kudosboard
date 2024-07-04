import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";

const Card = ({ title, description, img_url, author, card_id }) => {
  const [deleted, setDeleted] = useState(false);
  const [upvotes, setUpvotes] = useState(0);

  useEffect(() => {
    // Function to fetch initial upvotes from server
    const fetchUpvotes = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cards/${card_id}`);
        setUpvotes(response.data.upvotes);
      } catch (error) {
        console.error("Error fetching upvotes:", error);
        // Handle error state or notify user of fetch failure
      }
    };

    fetchUpvotes();
  }, [card_id]); // Fetch upvotes when card_id changes

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/cards/${card_id}`);
      console.log("Card deleted:", response.data);
      setDeleted(true); // Update local state to reflect deletion
    } catch (error) {
      console.error("Error deleting card:", error);
      // Handle error state or notify user of deletion failure
    }
  };

  const handleUpvote = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/cards/${card_id}`, {
        upvotes: upvotes + 1,
      });
      console.log("Card upvoted:", response.data);
      setUpvotes(upvotes + 1); // Update local state to reflect upvote
    } catch (error) {
      console.error("Error upvoting card:", error);
      // Handle error state or notify user of upvote failure
    }
  };

  if (deleted) {
    return null; // Hide the card if it has been deleted
  }

  return (
    <div className="Card">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={img_url} alt="GIF" />
      <p>{author}</p>
      <div className="button">
        <button onClick={handleUpvote}>Upvote {upvotes}</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;





