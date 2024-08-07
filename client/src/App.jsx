import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardPage from './components/BoardPage/BoardPage';
import CardPage from './components/CardPage/CardPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<BoardPage/>}></Route>
          <Route path='boards/:board_id' element={<CardPage/>}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
