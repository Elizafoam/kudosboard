const express = require("express");
const router = express.Router();
const cardController = require("../controller/cardController");

router.get("/", cardController.getAllCards);
router.get("/:card_id", cardController.getCardById);
router.post("/", cardController.createCard);
router.put("/:card_id", cardController.updateCard);
router.delete("/:card_id", cardController.deleteCard);

module.exports = router;



