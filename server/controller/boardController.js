const boardModel = require("../models/boardModel");

const getAllBoards = async (req, res) => {
  try {
    const boards = await boardModel.getAllBoards();
    res.status(200).json(boards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

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

const createBoard = async (req, res) => {
  try {
    const newBoard = await boardModel.createBoard(req.body);
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

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

//THIS WORKS BUT TRYING WITH THE LIKE
/*const addCards = async (req, res) => {
  try {
    const newCard = await boardModel.addCardToBoard(req.params.board_id, req.body);
    res.status(200).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};*/


const addCards = async (req, res) => {
  try {
    const { board_id } = req.params;
    const cardData = {
      ...req.body,
      upvotes: 0  // Set initial upvotes to 0
    };
    const newCard = await boardModel.addCardToBoard(board_id, cardData);
    res.status(200).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCards = async (req, res) => {
  try {
    const { board_id, card_id } = req.params;
    const deletedCard = await boardModel.deleteCardFromBoard(board_id, card_id);
    res.status(200).json(deletedCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getCardsIn = async (req, res) => {
  try {
    const { board_id } = req.params;
    const cards = await boardModel.getCardsInBoard(board_id);
    res.status(200).json(cards);
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
  getCardsIn
};
