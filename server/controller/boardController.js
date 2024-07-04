const boardModel = require("../models/boardModel");

//get all boards calling the model
const getAllBoards = async (req, res) => {
  try {
    const boards = await boardModel.getAllBoards();
    res.status(200).json(boards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all boards by id calling the model
const getBoardById = async (req, res) => {
  try {
    const board = await boardModel.getBoardById(req.params.board_id);
    if (board) {
      res.status(200).json(board);
    } else {
      res.status(404).json({ error: "Board not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create all boards calling the model
const createBoard = async (req, res) => {
  try {
    const newBoard = await boardModel.createBoard(req.body);
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update all boards calling the model
const updateBoard = async (req, res) => {
  try {
    const updatedBoard = await boardModel.updateBoard(req.params.board_id, req.body);
    if (updatedBoard) {
      res.status(200).json(updatedBoard);
    } else {
      res.status(404).json({ error: "Board not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete all boards calling the model
const deleteBoard = async (req, res) => {
  try {
    const deletedBoard = await boardModel.deleteBoard(req.params.board_id);
    if (deletedBoard) {
      res.status(200).json(deletedBoard);
    } else {
      res.status(404).json({ error: "Board not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//add cards to the board calling the modal
const addCards = async (req, res) => {
  try {
    const { board_id } = req.params;
    const cardData = req.body; // Assuming cardData is sent from the request body
    const newCard = await boardModel.addCardToBoard(board_id, cardData);
    res.status(200).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete cards from the board calling the modal
const deleteCards = async (req, res) => {
  try {
    const { board_id, card_id } = req.params;
    const deletedCard = await boardModel.deleteCardFromBoard(board_id, card_id);
    res.status(200).json(deletedCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all cards to the board calling the modal
const getCardsIn = async (req, res) => {
  try {
    const { board_id } = req.params;
    const cards = await boardModel.getCardsInBoard(board_id);
    res.status(200).json(cards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update cards to the board calling the modal
const upvoteCardNow = async (req, res) => {
  try {
    const { board_id, card_id } = req.params;
    const updatedCard = await boardModel.upvoteCard(board_id, card_id);
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
  addCards,
  deleteCards,
  getCardsIn,
  upvoteCardNow
};
