// import React from "react";
// import "./Card.css";

// const Card = ({title, description, img_url, author}) => {

    
//     return (
//         <div className="Card">
//             {/* <img src="/src/assets/spongebob.gif" alt="card image" /> */}
//             <h1>{title}</h1>
//             <p>{description}</p>
//             <img src={img_url} alt="GIF"/>
//             <p>{author}</p>
//             <div className="button">
//                 <button>Upvote</button>
//                 <button>Delete</button>
//             </div>
//         </div>
//     )
// }

// export default Card;

import React, { useState } from "react";
import axios from "axios";
import "./Card.css";

const Card = ({ title, description, img_url, author, card_id }) => {
  const [deleted, setDeleted] = useState(false);
  const [upvotes, setUpvote] = useState(Card.upvotes || 0);

  const handleDelete = async () => {
    try {
      console.log(card_id);
      const response = await axios.delete(`http://localhost:3000/cards/${card_id}`);
      console.log("Card deleted:", response.data);
      setDeleted(true); // Update local state to reflect deletion
    } catch (error) {
      console.error("Error deleting card:", error);
      // Handle error state or notify user of deletion failure
    }
  };

  //maybe
  const handleUpvote = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/boards/${board_id}/cards/${card_id}/upvote`, {
        upvotes: upvotes +1,
      }
    );
      console.log("Card upvoted:", response.data);
      setUpvote(upvotes +1); // Update local state to reflect upvote
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
      <button onClick={handleUpvote} > Upvote {upvotes}</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
