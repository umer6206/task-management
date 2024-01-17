import React, { useState } from 'react';
import { BsThreeDots, BsTrash } from 'react-icons/bs';
import { LiaEditSolid } from "react-icons/lia";
import { useDispatch, useSelector } from 'react-redux';
import AddNew from './AddNew';
import Action from './Action';
import { deleteCard } from '../redux/slice/listSlice';
const Card = ({ parentId }) => {
    const boardList = useSelector(state => state.boardSlice.board);
    const [showAction, setShowAction] = useState({});
    const dispatch = useDispatch();

    const toggleShowAction = (listId) => {
        setShowAction(prevState => ({
            ...prevState,
            [listId]: !prevState[listId]
        }));
    };

    const handleDeleteCard = (id, parentId) => {
        console.log(id, parentId);
        dispatch(deleteCard({ id, parentId }));
    };

    return (
        <div className='flex gap-1 flex-wrap'>
            {boardList.map((board) => {
                if (board.id === parentId) {
                    return board?.list?.map((l) => (
                        <div key={l.id} className='bg-gray-800 p-3 w-[300px] text-gray-200 hover:bg-gray-700 rounded-md shadow-gray-400'>
                            <div className='flex justify-between '>
                                <h1 className='font-semibold'>{l.title}</h1>
                                {
                                    showAction[l.id] ? <p className='mr-2 cursor-pointer' onClick={() => toggleShowAction(l.id)}>X</p> :
                                        <BsThreeDots className='mr-2 cursor-pointer' onClick={() => toggleShowAction(l.id)} />
                                }
                            </div>
                            {
                                showAction[l.id] && <Action listId={l?.id} />
                            }
                            {
                                l?.card?.map((item) => (
                                    <div key={item.id} className={`bg-gray-600 rounded-md shadow-2xl p-3 mt-3 flex justify-between`}>
                                        <h1 className='font-semibold'>{item.title}</h1>
                                        <div className="flex items-center">
                                            <BsTrash className=' text-red-300 rounded-md cursor-pointer' size={20} onClick={() => handleDeleteCard(item.id, l.id)} />
                                            <LiaEditSolid className=' text-blue-300  ml-1 rounded-md cursor-pointer' size={20} />
                                        </div>
                                    </div>
                                ))
                            }
                            <div>
                                <AddNew type='card' parentId={parentId} listId={l.id} />
                            </div>
                        </div>
                    ));
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default Card;
