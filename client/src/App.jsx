import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner';
import CardGrid from './components/CardGrid/CardGrid';
import Footer from './components/Footer/Footer';
import BoardGrid from './components/BoardGrid/BoardGrid';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner/>
      <BoardGrid/>
      <Footer />
    </div>
  )
}

export default App
