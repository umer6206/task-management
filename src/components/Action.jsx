import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteList } from '../redux/slice/listSlice';

const Action = ({ listId }) => {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteList(id))
    }
    return (
        <div>
            <p className='bg-red-600 text-white p-2 rounded-md my-1 cursor-pointer' onClick={() => handleDelete(listId)}>Delete</p>
            <p className='bg-blue-600 text-white p-2 rounded-md cursor-pointer'>Edit</p>
        </div>
    )
}

export default Action