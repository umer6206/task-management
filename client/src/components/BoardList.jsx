import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addId } from '../redux/slice/boardIdSlice'

const BoardList = () => {
    const boardList = useSelector(state => state.boardSlice.board)
    const dispatch = useDispatch()

    const setBoardId = (id) => {
        dispatch(addId(id))
    }
    return (
        <div className='p-2'>
            {
                boardList?.map((item) => (
                    <p key={item.id} className={`bg-gray-600 rounded-md p-2 mb-2 transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 cursor-pointer`} style={{ backgroundColor: item.bgcolor }} onClick={() => setBoardId(item.id)}>{item?.boardName}</p>
                ))
            }
        </div>
    )
}

export default BoardList