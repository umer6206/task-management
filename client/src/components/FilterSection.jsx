import React from 'react'
import { ImStarEmpty } from "react-icons/im";
import { HiOutlineUsers } from "react-icons/hi2";
import { BsBarChart } from "react-icons/bs";
import { IoIosArrowDown } from 'react-icons/io';
import { MdElectricBolt } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
const FilterSection = () => {
    return (
        <div className='flex items-center justify-between h-16 flex-wrap p-3 bg-gray-900 text-gray-200'>
            <div className='flex items-center gap-4'>
                <h1 className='font-bold text-xl italic'>My Trello Board</h1>
                <ImStarEmpty />
                <HiOutlineUsers />
                <button className='flex items-center justify-between gap-2 bg-slate-800 py-2 px-4 rounded'>
                    <BsBarChart className='rotate-180' />
                    Board
                    <IoIosArrowDown />
                </button>
            </div>
            <div className='flex items-center gap-4'>
                <MdElectricBolt className='cursor-pointer' />
                <div className='flex items-center gap-2 bg-gray-700 p-2 rounded cursor-pointer hover:bg-gray-600'>
                    <IoFilterOutline />
                    Filters
                </div>
                <div className='text-gray-400'>|</div>
                <button className="inline-flex items-center bg-gray-800 border-none p-1 rounded-full text-white">
                    user
                </button>
                <div className='flex items-center gap-1 bg-gray-700 p-2 rounded cursor-pointer hover:bg-gray-600'>
                    <AiOutlineUserAdd />
                    Share
                </div>
                <BsThreeDots className='cursor-pointer' />
            </div>
        </div>
    )
}

export default FilterSection