const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllCards = async () => {
  return prisma.card.findMany();
};

const getCardById = async (card_id) => {
  return prisma.card.findUnique({
    where: { card_id: parseInt(card_id) }
  });
};

const createCard = async (cardData) => {
  return prisma.card.create({
    data: cardData
  });
};

const updateCard = async (card_id, cardData) => {
  return prisma.card.update({
    where: { card_id: parseInt(card_id) },
    data: cardData,
  });
};

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


