import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './components/navbar/navbar';



function App() {
  return (
  //   <div className='App'>
  //     <header className='App-header'>
  //     <div class='alert alert-primary' role='alert'>
  //     <p style={{ display: "none" }} className='d-block'>
  //       Bootstrap is now successfully installed 😃
  //      </p>
  //     <p className='d-none'>
  //     Bootstrap is not installed if you can see this 😢
  //     </p>
  //     </div>
  //     </header>
  // </div>
    <div className='container'>
      <Navbar/>
      
    </div>
  );
  }
  
  
  export default App;