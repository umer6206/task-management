import { configureStore } from '@reduxjs/toolkit'
import listSlice from '../slice/listSlice'
import boardSlice from '../slice/boardSlice'
import baordId from '../slice/boardIdSlice'
const store = configureStore({
    reducer: {
        listSlice: listSlice,
        boardSlice: boardSlice,
        boardIdSlice: baordId
    }
})

export default store