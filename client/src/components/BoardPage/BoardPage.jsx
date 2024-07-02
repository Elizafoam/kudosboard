import React from "react";
import Modal from '../modal/modal';

const BoardPage = ({ handleOpenModal, modalOpen, handleSubmit, handleCloseModal, title, setTitle, author, setAuthor, category, setCategory }) => {
    return (
        <div>
            <button className='button-link' onClick={handleOpenModal}>Create New Board</button>
            {modalOpen && (
                <Modal
                    onSubmit={handleSubmit}
                    closeModal={handleCloseModal}
                    title={title}
                    setTitle={setTitle}
                    author={author}
                    setAuthor={setAuthor}
                    category={category}
                    setCategory={setCategory}
                />
            )}
        </div>
    );
}

export default BoardPage;
