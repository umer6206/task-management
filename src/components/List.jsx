import React from 'react'
import Card from './Card'
import AddNew from './AddNew'


const List = ({ parentId }) => {
    return (
        <div className='flex flex-col gap-2 m-2'>
            <div className='bg-gray-800 text-gray-200 hover:bg-gray-700 rounded-md shadow-gray-400 w-[300px] p-1'>
                <AddNew parentId={parentId} />
            </div>
            <Card parentId={parentId} />
        </div>
    )
}

export default List