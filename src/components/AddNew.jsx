import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addList, addCard } from '../redux/slice/boardSlice'
const AddNew = ({ type, parentId, listId }) => {
    const [inputVal, setInputVal] = useState()
    const [openForm, setFormOpen] = useState(false)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        setInputVal("")
        if (type) {
            dispatch(addCard({ id: Math.random() * 100, title: inputVal, parentId: parentId, listId: listId }))
        } else {
            dispatch(addList({ id: Math.random() * 100, title: inputVal, parentId: parentId }))
        }
        setFormOpen(false)
    }
    return (
        <>

            <div className='flex justify-center flex-col p-3'>
                <button type='submit' onClick={() => setFormOpen(true)} className="bg-blue-500 mb-2 hover:bg-blue-700 text-white font-bold py-2 rounded-lg ">
                    {
                        type === 'card' ? "+ Add a card" : "+ Add a List"
                    }
                </button>
                {
                    openForm && (
                        <form onSubmit={handleSubmit} className='flex flex-col'>

                            <input value={inputVal} required onChange={(e) => setInputVal(e.target.value)} className='w-full rounded-md p-2 resize-y mb-2 text-gray-700' placeholder={type === 'card' ? 'add new card' : 'add new list'} />

                            <div className='flex justify-end gap-1'>
                                <button onClick={() => setFormOpen(false)} className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ">
                                    cancel
                                </button>
                                <button type='submit' className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ">
                                    Add
                                </button>
                            </div>

                        </form>
                    )
                }

            </div>
        </>
    )
}

export default AddNew