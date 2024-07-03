import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardPage from './components/BoardPage/BoardPage';
import CardPage from './components/CardPage/CardPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BoardPage/>}></Route>
          <Route path='boards/:board_id' element={<CardPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
