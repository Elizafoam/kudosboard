import React, { useState } from "react";
import axios from "axios";
import "./NewCard.css";

const NewCard = ({ onSubmit, closeModal, board_id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img_url, setImgUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [gifOptions, setGifOptions] = useState([]);
  const [selectedGifUrl, setSelectedGifUrl] = useState("");

  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

  const handleSearch = async () => {
    try {
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: apiKey,
          q: searchTerm,
          limit: 6,
        },
      });

      const gifData = response.data.data;
      const gifUrls = gifData.map((gif) => gif.images.original.url);
      setGifOptions(gifUrls);
    } catch (error) {
      console.error("Error searching for GIFs:", error);
    }
  };

  const handleSelectGif = (gifUrl) => {
    setSelectedGifUrl(gifUrl);
    setImgUrl(gifUrl);
    setGifOptions([]);
  };

  const handleCopyGifUrl = () => {
    setImgUrl(selectedGifUrl);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !description || !selectedGifUrl) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3000/boards/${board_id}/cards`,
        {
          title,
          description,
          img_url,
          author,
        }
      );
      const newCard = response.data;
      onSubmit(newCard);
      setTitle("");
      setDescription("");
      setImgUrl("");
      setAuthor("");
      closeModal();
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
        <button className="close" onClick={closeModal}>X</button>
        <h1>Create a New Card</h1>
        <div>
          <label htmlFor="title">Title: </label>
            <input
              type="text"
              placeholder="Enter card title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            placeholder="Enter card description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="GIFs">GIFs: </label>
          <input
            type="text"
            placeholder="Search GIFs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" type="button" onClick={handleSearch}>Search</button>
          {gifOptions.length > 0 && (
            <div className="gif-options">
              {gifOptions.map((gifUrl) => (
                <div className="gif-container" key={gifUrl}>
                  <img
                    className="gif"
                    src={gifUrl}
                    alt="GIF"
                    onClick={() => handleSelectGif(gifUrl)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter GIF URL"
            value={img_url}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <button
            className="copy-button"
            type="button"
            onClick={handleCopyGifUrl}>
            Copy GIF URL
          </button>
        </div>
        <div>
        </div> 
          <input
            type="text"
            placeholder="Enter author (optional)"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="submit" onClick={handleSubmit}>
            Create Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
