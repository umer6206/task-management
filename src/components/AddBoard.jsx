import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addBoard } from "../redux/slice/boardSlice";
const AddBoard = () => {
    const [showModal, setShowModal] = useState(false);
    const [bgcolor, setBgColor] = useState("#rrggbb")
    const [boardName, setBoardName] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addBoard({ id: Math.random() * 100, bgcolor, boardName }))
        setBoardName("")
        setBgColor("#rrggbb")
        setShowModal(false)
    }
    return (
        <>
            <FaPlus size={20} className='mr-3 cursor-pointer' onClick={() => setShowModal(true)} />
            {showModal ? (
                <>
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center backdrop-opacity-10 backdrop-invert bg-black/60 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="flex flex-col bg-white w-[500px] border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                    <h3 className="font-bold text-gray-800 dark:text-white">
                                        Add New Board
                                    </h3>
                                    <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-focus-management-modal">
                                        <span className="sr-only" >Close</span>
                                        <p onClick={() => setShowModal(false)}>X</p>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-white">Select background color</label>
                                    <input type="color" value={bgcolor} onChange={(e) => setBgColor(e.target.value)} className="w-24 h-24 rounded-full" />
                                </div>
                                <div className="p-2 overflow-y-auto">
                                    <label htmlFor="input-label" className="block text-sm font-medium mb-2 text-gray-800 dark:text-white">Enter Board Title</label>
                                    <input type="text" id="input-label" required className="py-2 px-4 block w-full text-gray-800 border-gray-800  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="board name" autoFocus value={boardName} onChange={(e) => setBoardName(e.target.value)} />
                                    <label htmlFor="input-label" className="text-sm block mb-2 text-red-600 ">board title is required</label>
                                </div>
                                <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                                    <button type="button" onClick={() => setShowModal(false)} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-focus-management-modal">
                                        Cancel
                                    </button>
                                    <input type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer" value="Add Board" />
                                </div>
                            </div>
                        </div>
                    </form>
                </>
            ) : null}
        </>
    );
};

export default AddBoard;