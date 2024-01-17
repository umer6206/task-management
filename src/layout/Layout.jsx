import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import FilterSection from '../components/FilterSection'
import List from '../components/List'
import { useSelector } from 'react-redux'

const Layout = () => {
    const boardList = useSelector(state => state.boardSlice.board)
    const bid = useSelector(state => state.boardIdSlice.boardId)
    return (
        <div>
            <Navbar />
            <div className='flex'>
                <SideBar />
                <div className='w-full'>
                    <FilterSection />
                    {
                        boardList.map((item) => {
                            if (item.id === bid) {
                                return (
                                    <div key={item.id} className='p-5  min-h-[90vh]' style={{ backgroundColor: item.bgcolor }}>
                                        <List parentId={item.id} />
                                    </div>
                                )
                            } else {
                                return null
                            }
                        }
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Layout