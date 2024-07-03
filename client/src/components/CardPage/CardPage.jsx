import { useState } from 'react';
import './CardPage.css';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

const CardPage = () => {
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <div className='CardPage'>
      <h1>Card</h1>
      <NavBar />
      <Banner/>
      <button className='button-link' onClick={handleOpenModal}>Create New Card</button>
      <div className="CardGrid">
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default CardPage;
