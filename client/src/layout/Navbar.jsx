import React, { useState } from 'react';
import { TbBellRinging2 } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaPlus } from 'react-icons/fa';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap p-3 bg-gray-800 border-b text-gray-200 ">
            <div className="flex items-center flex-shrink-0  mr-6">
                <h1 className="w-100 text-2xl font-bold ml-6" alt="Logo">Trello</h1>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block  flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
                <div className="text-sm lg:flex-grow items-center">
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 p-1 hover:cursor-pointer rounded-md">
                        Workspace <IoIosArrowDown size={20} className='text-gray-200 inline-block' />
                    </a>

                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4  transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 p-1 hover:cursor-pointer rounded-md">
                        Recent <IoIosArrowDown size={20} className='text-gray-200 inline-block' />
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 p-1 hover:cursor-pointer rounded-md">
                        Starred <IoIosArrowDown size={20} className='text-gray-200 inline-block' />
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4  transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 p-1 hover:cursor-pointer rounded-md">
                        More <IoIosArrowDown size={20} className='text-gray-200 inline-block' />
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block font-bold lg:mt-0 text-white-200 mr-4  transition-all ease-in-out hover:bg-gray-700 hover:border-transparent hover:border-solid hover:border-gray-600 p-1 hover:cursor-pointer rounded-md">
                        <FaPlus size={20} className='text-gray-200 inline-block bg-gray-700 ' />
                    </a>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className="flex items-center justify-center">
                        <div className="flex border  border-gray-500 rounded">
                            <input type="text" className="px-4 py-1 w-50 bg-gray-700 outline-none" placeholder="Search..." />
                            <button className="flex items-center justify-center px-4 border-l">
                                <svg className="w-6 h-6 text-gray-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <TbBellRinging2 size={30} className='text-gray-200 cursor-pointer' />
                    <button className="inline-flex items-center bg-gray-800 border p-1 rounded-full text-white">
                        user
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;