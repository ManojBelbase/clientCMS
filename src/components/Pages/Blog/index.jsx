import React, { useState } from 'react'
import AddForm from '../../PageComponent/Blog/Add/AddForm'
import ViewForm from '../../PageComponent/Blog/View/ViewForm'

const Index = () => {
    const [Active, setActive] = useState('add')
    const data = [
        {
            name: 'Add blog',
            id: 'add'
        },
        {
            name: 'View blog',
            id: 'view'
        },
    ]
    return (
        <div className='mx-12 relative flex flex-col w-full'>
            <div className="flex gap-4 w-fit">
                {
                    data.map((val, i) => {
                        return <div onClick={() => {
                            setActive(val.id)
                        }} className={`${Active === val.id ? "bg-blue-400" : "bg-white text-black"}  
                    cursor-pointer border-2  p-6 shadow-xl shadow-gray-300 font-bold`} key={i}>{val.name}</div>
                    })
                }
            </div>
            <div className='py-4 w-full bg-white'>
                {
                    Active === 'add' ? <AddForm /> : <ViewForm />

                }
            </div>
        </div>
    )
}

export default Index
