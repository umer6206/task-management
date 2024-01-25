const express = require("express");
const { createBoard, addListToBoard, addCardToList, deleteBoardCtrl, deleteListCtrl, deleteCardCtrl, getSingleBoardCtrl, getAllBoardCtrl, updateBoard, updateList, updateCard } = require("../controllers/boardController");
const router = express.Router()

router.post('/create-board', createBoard);
router.post('/create-list/:boardId', addListToBoard);
router.post('/create-card/:boardId/lists/:listId', addCardToList);
router.delete("/delete-board/:boardId", deleteBoardCtrl);
router.delete("/delete-list/:boardId/lists/:listId", deleteListCtrl);
router.delete("/delete-card/:boardId/lists/:listId/cards/:cardId", deleteCardCtrl)
router.get("/get-single-board/:boardId", getSingleBoardCtrl)
router.get("/get-all-board", getAllBoardCtrl)
router.put('/update-board/:boardId', updateBoard)
router.put('/upate-list/:boardId/lists/:listId', updateList)
router.put('/upate-list/:boardId/lists/:listId/cards/:cardId', updateCard)
module.exports = router