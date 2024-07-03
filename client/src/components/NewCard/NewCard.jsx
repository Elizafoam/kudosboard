import React, { useState } from "react";
import axios from "axios";
import "./NewCard.css";

const NewCard = ({ onSubmit, closeModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gif, setGif] = useState("");
  const [owner, setOwner] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [gifOptions, setGifOptions] = useState([]);
  const [selectedGifUrl, setSelectedGifUrl] = useState("");

  const apiKey = import.meta.env.GIPHY_API_KEY;

  const handleSearch = async () => {
    try {
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: apiKey,
          q: searchTerm,
          limit: 10,
        },
      });

      setGifOptions(response.data.data);
    } catch (error) {
      console.error("Error searching for GIFs:", error);
    
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !selectedGifUrl) {
      alert("Please fill out all required fields.");
      return;
    }
    onSubmit({ title, description, gif: selectedGifUrl, owner });
    setTitle("");
    setDescription("");
    setGif("");
    setOwner("");
    closeModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Owner (optional):</label>
          <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
        </div>
        <div>
          <label>Search GIF:</label>
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div>
          {gifOptions.map((gif) => (
            <img
              key={gif.id}
              src={gif.images.fixed_height.url}
              alt={gif.title}
              onClick={() => setSelectedGifUrl(gif.images.fixed_height.url)}
              style={{
                cursor: "pointer",
                border: selectedGifUrl === gif.images.fixed_height.url ? "2px solid blue" : "none",
              }}
            />
          ))}
        </div>
        <button type="submit">Create Card</button>
      </form>
    </div>
  );
};

export default NewCard;
