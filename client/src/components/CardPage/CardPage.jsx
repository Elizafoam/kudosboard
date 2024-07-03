import { useState } from 'react';
import './CardPage.css';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import NewCard from '../NewCard/NewCard';

const CardPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const { boardId } = useParams();


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateSuccess = (newCard) => {
    console.log("New card created", newCard)
    setCards([...cards, newCard]);
    handleCloseModal();
  }

  return (
    <div className='CardPage'>
      <h1>Card</h1>
      <NavBar />
      <Banner/>
      <button className='button-link' onClick={handleOpenModal}>Create New Card</button>
      {modalOpen && (
        <NewCard
          boardId={boardId}
          onSuccess={handleCreateSuccess}
          onClose={handleCloseModal}
        />
      )}

      <div className="CardGrid">
        {/* <Card /> */}
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default CardPage;



