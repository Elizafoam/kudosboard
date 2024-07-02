import { useState, useEffect } from "react";
import './BoardPage.css';
import axios from "axios";
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Board from "../Board/Board";

const BoardPage = () => {
    const [boards, setBoards] = useState({})

    const populateBoards = async (params = {}) => {
        try {
            const response = await axios.get("http://localhost:3000/boards", {params});
            setBoards(response.data);

        }
        catch (error){
            console.log("Error fetching boards", error);
        }
    }

    useEffect(() => {
        populateBoards();
        
      }, [boards]);
    
    

  return (
    <div className='BoardPage'>
      <NavBar />
      <Banner/>
      <div className="b">
        <div className="boardGrid">
            {
            Object.entries(boards).map((board) => (
                <Board title={board[1]["title"]} category={board[1]["category"]} author={board[1]["author"]}/>
            ))
            }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BoardPage;
