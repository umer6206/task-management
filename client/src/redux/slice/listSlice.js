import { createSlice } from "@reduxjs/toolkit"
const listSlice = createSlice({
    name: 'listSlice',
    initialState: {
        list: []
    },
    reducers: {
        addList: (state, action) => {
            state.list.push(action.payload)
        },
        deleteList: (state, action) => {
            const listIndex = state.list.findIndex(item => item.id === action.payload);
            if (listIndex !== -1) {
                state.list.splice(listIndex, 1);
            }
        },
        addCard: (state, action) => {
            state.list.forEach((item) => {
                if (item.id === action.payload.parentId) {
                    if (Object.hasOwn(item, "card")) {
                        item.card.push(action.payload)
                    }
                    else {
                        item.card = []
                        item.card.push(action.payload)
                    }
                }
            })
        },
        deleteCard: (state, action) => {
            const { id, parentId } = action.payload;
            const listIndex = state.list.findIndex(item => item.id === parentId)
            if (listIndex !== -1) {
                const cardIndex = state.list[listIndex].card.findIndex(
                    (item) => item.id === id
                )
                if (cardIndex !== -1) {
                    state.list[listIndex].card.splice(cardIndex, 1)
                }
            }
        }
    }
})

export const { addList, deleteList, addCard, deleteCard } = listSlice.actions
export default listSlice.reducer