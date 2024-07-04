const express = require("express");
const router = express.Router();
const boardController = require("../controller/boardController");

//gets all boards 
router.get("/", boardController.getAllBoards);
//gets a board by id
router.get("/:board_id", boardController.getBoardById);
//creates a board
router.post("/", boardController.createBoard);
//updates a board by its id
router.put("/:board_id", boardController.updateBoard);
//deletes a board by its id 
router.delete("/:board_id", boardController.deleteBoard);
//creates cards inside a board id 
router.post("/:board_id/cards", boardController.addCards);
//deletes a board with its id and the card //not implemented 
router.delete("/:board_id/cards/:card_id", boardController.deleteCards);
//gets the board by its id and the cards inside it 
router.get("/:board_id/cards", boardController.getCardsIn);
//updates the upvote//not implemented 
router.put("/:board_id/cards/:card_id/upvote", boardController.upvoteCardNow);


module.exports = router;




