const express = require("express");
const router = express.Router();
const boardController = require("../controller/boardController");

router.get("/", boardController.getAllBoards);
router.get("/:board_id", boardController.getBoardById);
router.post("/", boardController.createBoard);
router.put("/:board_id", boardController.updateBoard);
router.delete("/:board_id", boardController.deleteBoard);
router.post("/:board_id/cards", boardController.addCards);

module.exports = router;




