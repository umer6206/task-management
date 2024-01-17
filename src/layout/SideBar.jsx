import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp, IoIosArrowBack } from "react-icons/io";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaPlus, FaTableList } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Modal from '../components/Modal';
import AddBoard from '../components/AddBoard';
import BoardList from '../components/BoardList';
const SideBar = () => {
    const [workspaceOpen, setWorkspaceOpen] = useState(false)
    const [closeSideBar, setCloseSidebar] = useState(true)
    return (
        <>
            <div className="font-sans bg-gray-100 ">
                <div className="flex ">
                    {
                        !closeSideBar && <IoIosArrowForward size={30} onClick={() => setCloseSidebar(true)} className={`${closeSideBar} ? ' hidden' : 'absolute  border-gray-700 text-black mr-[30px]'  `} />
                    }
                    <div className={`bg-gray-800 min-h-[96vh]  p-2 border-r text-white ${closeSideBar ? "  w-56" : " hidden"}  sm:w-72 `}>
                        <div className='lg:flex justify-between items-center border-b'>
                            <div className='flex px-3 items-center'>
                                <h1 className='text-white bg-green-600 p-2 text-2xl w-10 h-10  flex justify-center items-center font-bold'>T</h1>
                                <div>
                                    <div className="pl-4 font-semibold">Trello Wrokspace</div>
                                    <span className='pl-4 text-sm text-gray-300'>Free</span>
                                </div>
                            </div>
                            <IoIosArrowBack size={30} onClick={() => setCloseSidebar(false)} className='text-white cursor-pointer' />
                        </div>
                        <div className='mt-4'>
                            <div className='p-2 flex gap-4 transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 cursor-pointer rounded-md'>
                                <TbLayoutBoardSplit size={20} />
                                <p className='font-semibold '>Boards</p>
                            </div>
                            <div className='p-2 flex justify-between transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 cursor-pointer rounded-md'>
                                <div className='flex gap-4'>
                                    <FaUser size={20} />
                                    <p className='font-semibold'>Members</p>
                                </div>
                                <Modal />
                            </div>
                            <div className='p-2 flex justify-between relative transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 cursor-pointer rounded-md '>
                                <div className='flex gap-4 '>
                                    <CiSettings size={20} />
                                    <p className='font-semibold'>workspace setting</p>
                                </div>
                                {
                                    !workspaceOpen ? <IoIosArrowDown size={20} className='mr-3 cursor-pointer' onClick={() => setWorkspaceOpen(!workspaceOpen)} /> :
                                        <IoIosArrowUp size={20} className='mr-3 cursor-pointer' onClick={() => setWorkspaceOpen(!workspaceOpen)} />
                                }

                                {
                                    workspaceOpen && <div className='absolute transition duration-500 ease-linear top-4 right-[-190px] w-[200px] rounded-xl  bg-gray-800'>
                                        <ul>
                                            <li className='p-3 transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 cursor-pointer rounded-md'>home</li>
                                            <li className='p-3 transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 cursor-pointer rounded-md'>setting</li>
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='mt-4 pl-2'>
                            <h1 className=' font-bold pb-5'>Workspace views</h1>
                            <div className='p-2 flex gap-4 transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 cursor-pointer rounded-md'>
                                <FaTableList size={20} />
                                <p className='font-semibold italic'>Tables</p>
                            </div>
                            <div className='p-2 flex gap-4 transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 cursor-pointer rounded-md'>
                                <SlCalender size={20} />
                                <p className='font-semibold italic'>calenders</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='p-2 flex  justify-between'>
                                <p className='font-semibold'>Your boards</p>
                                <AddBoard />
                            </div>
                            <BoardList />
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default SideBar 