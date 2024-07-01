const cardModel = require("../models/cardModel");

const getAllCards = async (req, res) => {
  try {
    const cards = await cardModel.getAllCards();
    res.status(200).json(cards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCardById = async (req, res) => {
  try {
    const card = await cardModel.getCardById(req.params.card_id);
    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ error: "Card not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createCard = async (req, res) => {
  try {
    const newCard = await cardModel.createCard(req.body);
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCard = async (req, res) => {
  try {
    const updatedCard = await cardModel.updateCard(req.params.card_id, req.body);
    if (updatedCard) {
      res.status(200).json(updatedCard);
    } else {
      res.status(404).json({ error: "Card not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCard = async (req, res) => {
  try {
    const deletedCard = await cardModel.deleteCard(req.params.card_id);
    if (deletedCard) {
      res.status(200).json(deletedCard);
    } else {
      res.status(404).json({ error: "Card not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
};

