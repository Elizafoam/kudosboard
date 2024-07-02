import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import NavBar from './components/navbar/navbar';
import Banner from './components/Banner/Banner';
import CardGrid from './components/CardGrid/CardGrid';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner/>
      <CardGrid/>
      <Footer />
    </div>
  )
}

export default App
