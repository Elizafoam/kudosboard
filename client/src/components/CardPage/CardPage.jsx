import { useState } from 'react';
import './BoardPage.css';
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner';
import CardGrid from '../CardGrid/CardGrid';
import Footer from '../Footer/Footer';

const CardPage = () => {
  return (
    <div className='App'>
      <NavBar />
      <Banner/>
      <CardGrid/>
      <Footer />
    </div>
  )
}

export default CardPage;
