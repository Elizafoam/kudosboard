import React from "react";
import "./NewCard.css";

export const NewCard = ({ closeModal}) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}>
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal("Modal was closed")}>
          <p className="close">x</p>
        </div>
        <div className="modal-content">
            <h1 className="modalHeader">Create a New Card</h1>
            <form>
            <div className="form-group">
                <input
                type="text"
                id="title"/>
            </div>
            </form>

        </div>
        <div className="modal-footer">
          <button
            type="submit"
            className="btn btn-submit"
            onClick={() => onSubmit("Submit button was clicked")}
          >
            Create Card
          </button>
 
        </div>
      </div>
    </div>
  );
};

export default NewBoard;
