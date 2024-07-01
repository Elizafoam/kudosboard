import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Banner from './components/Banner/Banner';
import CardGrid from './components/CardGrid/CardGrid';

function App() {
  return (
    <div className='App'>
      <Banner/>
      <CardGrid/>
      
    </div>
  )
}

export default App
