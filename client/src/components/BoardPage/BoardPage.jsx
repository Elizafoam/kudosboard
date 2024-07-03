import { useState, useEffect } from "react";
import './BoardPage.css';
import axios from "axios";
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Modal from '../NewBoard/NewBoard';
import Board from "../Board/Board";

const BoardPage = () => {
    // const [boards, setBoards] = useState({})
    const [boards, setBoards] = useState([]) //made into array instead of object to not cause dependency issues
    //implementing search functionality and filtering
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")


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
        
      }, []);

    //handling the category filter
    const handleCategoryFilter = (category) => {
      setSelectedCategory(category);
    }  

    //implementation of search

    const filteredBoards = boards.filter(board => {
      const matchesSearchQuery = board.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "" || board.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearchQuery && matchesCategory;
  });
  

  
  // Modal & Create Board Stuff
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
    
  const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setTitle("");
        setAuthor("");
        setCategory("");
    };

    const handleSubmit = () => {
        console.log("Submitting with:", { title, author, category });
        addBoard();
        handleCloseModal();
    };

    const addBoard = async () => {
        try {
            let boardData = {
                title: title,
                category: category,
                author: author,
            };
            const response = await axios.post("http://localhost:3000/boards", boardData);
            console.log("Board created:", response.data);
        } catch (error) {
            console.error("Error creating board:", error);
        }
    };
    
    

  return (
    <div className='BoardPage'>
      
      <NavBar />
      <Banner/>
      <h1 style={{ color: 'black' }}>BOARD PAGE</h1>
      {/* the search function */}
      <main className="search">
        <input
          type="text"
          placeholder="Search boards..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
      </main>
      <button className='button-link' onClick={handleOpenModal}>Create New Board</button>
            {modalOpen && (
                <Modal
                    onSubmit={handleSubmit}
                    closeModal={handleCloseModal}
                    title={title}
                    setTitle={setTitle}
                    author={author}
                    setAuthor={setAuthor}
                    category={category}
                    setCategory={setCategory}
                />
            )}

      <div className="category-buttons">
        <button className="category-button" onClick={() => handleCategoryFilter("")}>All</button>
        <button className="category-button" onClick={() => handleCategoryFilter("Recent")}>Recent</button>
        <button className="category-button" onClick={() => handleCategoryFilter("Celebration")}> Celebration</button>
        <button className="category-button" onClick={() => handleCategoryFilter("Thank You")}>Thank You</button>
        <button className="category-button" onClick={() => handleCategoryFilter("Inspiration")}>Inspiration</button>
      </div>

      {/* code below was added to perform the search functionality */}
      <div className="b">
                <div className="boardGrid">
                    {filteredBoards.map(board => (
                        <Board
                            key={board.board_id}
                            title={board.title}
                            category={board.category}
                            author={board.author}
                        />
                    ))}
                </div>
      </div>



      {/* <div className="b">
        <div className="boardGrid">
            {
            Object.entries(boards).map((board) => (
                <Board title={board[1]["title"]} category={board[1]["category"]} author={board[1]["author"]}/>
            ))
            }
        </div>
      </div> */}
      <Footer />
    </div>
  )
}

export default BoardPage;
