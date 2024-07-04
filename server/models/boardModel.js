const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//gets all the boards with prisma 
const getAllBoards = async () => {
  return prisma.board.findMany({
    include: {
      cards: true
    }
  });
};

//gets the boards by id with prisma 
const getBoardById = async (board_id) => {
  return prisma.board.findUnique({
    where: { board_id: parseInt(board_id) }
  });
};

//creates the boards with prisma 
const createBoard = async (boardData) => {
  return prisma.board.create({
    data: boardData
  });
};

//updates the boards by id with prisma 
const updateBoard = async (board_id, boardData) => {
  return prisma.board.update({
    where: { board_id: parseInt(board_id) },
    data: boardData,
  });
};

//deletes the boards by id with prisma 
const deleteBoard = async (board_id) => {
  return prisma.board.delete({
    where: { board_id: parseInt(board_id) }
  });
};


// adds cards the boards by id with prisma 
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

//deletes the cards inside boards by id with prisma 
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

////gets the cards in the boards by id with prisma 
const getCardsInBoard = async (board_id) => {
  const cards = await prisma.card.findMany({
    where: {
      board_id: parseInt(board_id)
    }
  });
  return cards;
};

//updatestheVotes in the cards in the boards by id with prisma 
const upvoteCard = async (board_id, card_id) => {
  const updatedCard = await prisma.card.update({
    where: {
      board_id_card_id: {
        board_id: parseInt(board_id),
        card_id: parseInt(card_id)
      }
    },
    data: {
      upvotes: {
        increment: 1 // Increment upvotes by 1
      }
    },
    include: {
      board: true
    }
  });
  return updatedCard;
};



module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
  addCardToBoard,
  deleteCardFromBoard,
  getCardsInBoard,
  upvoteCard
};

