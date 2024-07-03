import React from "react";
import "./NewBoard.css";

export const NewBoard = ({ onSubmit, closeModal, title, setTitle, author, setAuthor, category, setCategory }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal("Modal was closed")}>
          <p className="close">x</p>
        </div>
        <div className="modal-content">
            <h1 className="modalHeader">Create a New Board</h1>
            <form>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="defaultOption">Select a Category</option>
                    <option value="Recent">Recent</option>
                    <option value="Celebration">Celebration</option>
                    <option value="Thank You">Thank You</option>
                    <option value="Inspiration">Inspiration</option>
                </select>

            </div>
                
            </form>
            <div className="modal-footer">
          <button
            type="submit"
            className="btn btn-submit"
            onClick={() => onSubmit("Submit button was clicked")}
          >
            Create New Board
          </button>
 
        </div>

        </div>
      </div>
    </div>
  );
};

export default NewBoard;
