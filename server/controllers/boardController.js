// controllers/boardController.js
const Board = require('../models/BoardModel');

const createBoard = async (req, res) => {
    try {
        const { title, ownerId, bgColor } = req.body;
        const newBoard = await Board.create({ title, ownerId, bgColor });
        res.status(201).json(newBoard);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const addListToBoard = async (req, res) => {
    try {
        const { boardId } = req.params;
        const { title } = req.body;
        const board = await Board.findById(boardId);
        if (!board) {
            return res.status(404).json({ error: 'Board not found' });
        }
        board.lists.push({ title });
        await board.save();
        res.status(201).json(board);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const addCardToList = async (req, res) => {
    try {
        const boardId = req.params.boardId;
        const listId = req.params.listId;
        const { title } = req.body;
        const board = await Board.findById(boardId);
        if (!board) {
            return res.status(404).json({ error: 'Board not found' });
        }

        const list = board.lists.id(listId);
        if (!list) {
            return res.status(404).json({ error: 'List not found' });
        }

        list.cards.push({ title });
        await board.save();
        res.status(201).json(board);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteBoardCtrl = async (req, res) => {
    try {
        const boardId = req.params.boardId;
        const board = await Board.findByIdAndDelete(boardId)
        res.status(200).json({ message: "board deleted successfully", success: true, board })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const deleteListCtrl = async (req, res) => {
    try {
        const boardId = req.params.boardId;
        const listId = req.params.listId;
        const board = await Board.findById(boardId)
        if (!board) {
            return res.status(404).json({ error: 'Board not found' });
        }
        const list = board.lists.id(listId)
        if (!list) {
            return res.status(404).json({ error: 'List not found' });
        }
        board.lists.pull({ _id: listId });
        await board.save()
        res.status(200).json({ message: "list deleted successfully", success: true, board })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteCardCtrl = async (req, res) => {
    try {
        const boardId = req.params.boardId;
        const listId = req.params.listId;
        const cardId = req.params.cardId
        const board = await Board.findById(boardId)
        if (!board) {
            return res.status(404).json({ error: 'Board not found' });
        }
        const list = board.lists.id(listId)
        if (!list) {
            return res.status(404).json({ error: 'List not found' });
        }
        const card = list.cards.id(cardId)
        if (!card) {
            return res.status(404).json({ error: 'card not found' });
        }
        card.pull({ _id: cardId });
        await board.save()
        res.status(200).json({ message: "Card deleted successfully", success: true, board })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getSingleBoardCtrl = async (req, res) => {
    try {
        const { boardId } = req.params;
        const board = await Board.findById(boardId)
        if (!board) {
            return res.status(404).json({ message: "Board Not found", success: false })
        }
        res.status(200).json({ message: "board get successfully", success: true, board })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const getAllBoardCtrl = async (req, res) => {
    try {
        const { boardId } = req.params;
        const board = await Board.find({})
        if (!board) {
            return res.status(404).json({ message: "something went wrong while fetching board", success: false })
        }
        res.status(200).json({ message: "board get successfully", success: true, board })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const updateBoard = async (req, res) => {
    try {
        const { boardId } = req.params;
        const board = await Board.findByIdAndUpdate(boardId, { title }, { new: true })
        res.status(200).json({ message: "Board updated successfully", success: true, board })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const updateList = async (req, res) => {
    const { boardId, listId } = req.params;
    const { title } = req.body;

    try {
        const board = await Board.findById(boardId);

        if (!board) {
            return res.status(404).json({ error: 'Board not found' });
        }

        const list = board.lists.id(listId);

        if (!list) {
            return res.status(404).json({ error: 'List not found' });
        }

        list.title = title; // Update the list title
        await board.save();

        res.status(200).json({ message: 'List updated successfully' });
    } catch (error) {
        console.error('Error updating list:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const updateCard = async (req, res) => {
    const { boardId, listId, cardId } = req.params;
    const { title } = req.body;

    try {
        const board = await Board.findById(boardId);

        if (!board) {
            return res.status(404).json({ error: 'Board not found' });
        }

        const list = board.lists.id(listId);

        if (!list) {
            return res.status(404).json({ error: 'List not found' });
        }

        const card = list.cards.id(cardId);

        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }

        card.title = title; // Update the card title
        await board.save();

        res.status(200).json({ message: 'Card updated successfully' });
    } catch (error) {
        console.error('Error updating card:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = {
    createBoard,
    addCardToList,
    addListToBoard,
    deleteBoardCtrl,
    deleteListCtrl,
    deleteCardCtrl,
    getSingleBoardCtrl,
    getAllBoardCtrl,
    updateBoard,
    updateList,
    updateCard
}