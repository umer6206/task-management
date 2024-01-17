import { createSlice } from "@reduxjs/toolkit";
const boardSlice = createSlice({
    name: "boardSlice",
    initialState: {
        board: []
    },
    reducers: {
        addBoard: (state, action) => {
            state.board.push(action.payload)
        },
        addList: (state, action) => {
            state.board.forEach((item) => {
                if (item.id === action.payload.parentId) {
                    if (!item.list) {
                        item.list = [];
                    }
                    item.list.push(action.payload);
                }
            });
        },
        addCard: (state, action) => {
            state.board.forEach((item) => {
                if (item.id === action.payload.parentId) {
                    const targetList = item.list.find((l) => l.id === action.payload.listId);

                    if (targetList) {
                        if (targetList.card) {
                            targetList.card.push(action.payload);
                        } else {
                            targetList.card = [action.payload];
                        }
                    }
                }
            });
        },

    }
})
export const { addBoard, addList, addCard } = boardSlice.actions
export default boardSlice.reducer