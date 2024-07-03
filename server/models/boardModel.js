const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllBoards = async () => {
  return prisma.board.findMany({
    include: {
      cards: true
    }
  });
};

const getBoardById = async (board_id) => {
  return prisma.board.findUnique({
    where: { board_id: parseInt(board_id) }
  });
};

const createBoard = async (boardData) => {
  return prisma.board.create({
    data: boardData
  });
};

const updateBoard = async (board_id, boardData) => {
  return prisma.board.update({
    where: { board_id: parseInt(board_id) },
    data: boardData,
  });
};
//WORKS FOR POSTMAN BUT NOT THE CODE 
const deleteBoard = async (board_id) => {
  return prisma.board.delete({
    where: { board_id: parseInt(board_id) }
  });
};



const addCardToBoard = async (board_id, cardData) => {
  const board = await prisma.board.findUnique({
    where: { board_id: parseInt(board_id) }
  });

  if (!board) {
    throw new Error("Board not found");
  }

  const newCard = await prisma.card.create({
    data: {
      ...cardData,
      board: {
        connect: { board_id: parseInt(board_id) }
      }
    }
  });

  return newCard;
};

const deleteCardFromBoard = async (board_id, card_id) => {
  const board = await prisma.board.findUnique({
    where: { board_id: parseInt(board_id) }
  });

  if (!board) {
    throw new Error("Board not found");
  }

  const card = await prisma.card.findUnique({
    where: { card_id: parseInt(card_id) }
  });

  if (!card) {
    throw new Error("Card not found");
  }

  await prisma.card.delete({
    where: { card_id: parseInt(card_id) }
  });

  return card;
};

const getCardsInBoard = async (board_id) => {
  const cards = await prisma.card.findMany({
    where: {
      board_id: parseInt(board_id)
    }
  });
  return cards;
};



module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
  addCardToBoard,
  deleteCardFromBoard,
  getCardsInBoard
};

