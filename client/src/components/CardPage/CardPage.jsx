import React, { useState, useEffect } from 'react';
import axios from "axios"
import './CardPage.css';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import NewCard from '../NewCard/NewCard';

const CardPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const { board_id } = useParams();

  const populateCards = async (params = {}) => {
    try {
      const response = await axios.get(`http://localhost:3000/boards/${board_id}/cards`, {params});
      setCards(response.data);
      console.log(cards);
    }
    catch (error){
      console.log("Error fetching board cards", error);
    }
  }

  useEffect(() => {
    populateCards();
      
  }, []);


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateSuccess = (newCard) => {
    console.log("New card created", newCard);
    setCards([...cards, newCard]); // Append newCard to the existing cards array
    handleCloseModal();
  };

return (
  <div className='CardPage'>
    <NavBar />
    <Banner />
    <button className='button-link' onClick={handleOpenModal}>Create New Card</button>
    {modalOpen && (
      <NewCard
        board_id={board_id}
        onSubmit={handleCreateSuccess}
        closeModal={handleCloseModal}
      />
    )}

    <div className='CardGrid'>
      {cards.map((card) => (
        <Card
          key={card.card_id}
          card_id={card.card_id}
          title={card.title}
          description={card.description}
          author={card.author}
          img_url={card.img_url} // Add img_url if necessary
        />
      ))}
    </div>
    <Footer />
  </div>
);
};

export default CardPage;

// import { useState } from 'react';
// import './CardPage.css';
// import { useParams } from 'react-router-dom';
// import NavBar from '../NavBar/NavBar';
// import Banner from '../Banner/Banner';
// import Card from '../Card/Card';
// import Footer from '../Footer/Footer';
// import NewCard from '../NewCard/NewCard';
// import axios from 'axios';

// const CardPage = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [cards, setCards] = useState([]);
//   const { boardId } = useParams();

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleAddCard = (newCard) => {
//     setCards([...cards, newCard]);
//     handleCloseModal();
//   };

//   return (
//     <div className='CardPage'>
//       <h1>Card</h1>
//       <NavBar />
//       <Banner />
//       <button className='button-link' onClick={handleOpenModal}>Create New Card</button>
//       {modalOpen && (
//         <NewCard
//           onSubmit={handleAddCard}
//           closeModal={handleCloseModal}
//           board_id={boardId}
//         />
//       )}
//       <div className="CardGrid">
//         {cards.map((card) => (
//           <Card key={card.id} {...card} />
//         ))}
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default CardPage;

