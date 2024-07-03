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

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/boards/${card_id}`);
      console.log("Card deleted:", response.data);
      setDeleted(true); // Update local state to reflect deletion
    } catch (error) {
      console.error("Error deleting card:", error);
      // Handle error state or notify user of deletion failure
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
        <button>Upvote</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
