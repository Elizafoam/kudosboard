const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


//gets all the cards with prisma 
const getAllCards = async () => {
  return prisma.card.findMany();
};

//gets all the cards by using id with prisma 
const getCardById = async (card_id) => {
  return prisma.card.findUnique({
    where: { card_id: parseInt(card_id) }
  });
};

//creates all the cards with prisma 
const createCard = async (cardData) => {
  return prisma.card.create({
    data: cardData
  });
};

//updates the card by id inside the boards with prisma 
const updateCard = async (card_id, cardData) => {
  return prisma.card.update({
    where: { card_id: parseInt(card_id) },
    data: cardData,
  });
};

//deletes the card by id using prisma 
const deleteCard = async (card_id) => {
  return prisma.card.delete({
    where: { card_id: parseInt(card_id) }
  });
};

module.exports = {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
};


