import { createSlice } from "@reduxjs/toolkit";
const baordId = createSlice({
    name: "bid",
    initialState: {
        boardId: ""
    },
    reducers: {
        addId: (state, action) => {
            state.boardId = action.payload
        }
    }
})

export default baordId.reducer
export const { addId } = baordId.actions