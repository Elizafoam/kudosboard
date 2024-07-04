const express = require("express");
const router = express.Router();
const cardController = require("../controller/cardController");

//gets all cards
router.get("/", cardController.getAllCards);
//gets the card by its id
router.get("/:card_id", cardController.getCardById);
//creates a card
router.post("/", cardController.createCard);
//updates the card by its id 
router.put("/:card_id", cardController.updateCard);
//deletes a card by its id 
router.delete("/:card_id", cardController.deleteCard);

module.exports = router;



