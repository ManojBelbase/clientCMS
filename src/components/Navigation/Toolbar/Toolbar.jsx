import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'

const Toolbar = () => {
  const data = [
    {
      name: "dashboard",
    },
    {
      name: "about",
    },
    {
      name: "contact",
    },
    {
      name: "detail",
    },
    {
      name: "services",
    },
  ]
  const [show, setShow] = React.useState(false);
  const [Arrow, setArrow] = useState('down');
  return (
    <div className='fixed top-0 bg-[#14327d] w-screen shadow-md shadow-slate-800 z-10'>
      <div className='w-full  h-full gap-6 flex justify-between items-center text-white
      pl-4'>
        <div className="logo bg-red-400 rounded-full h-10 w-10">
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYyoZuaiIrBKygBUDqYOYy0IurIMFTvxt0A&usqp=CAU'} alt="Logo" className='rounded-3xl' />
        </div>
        <div className="searchbox flex items-center relative">
          <GoSearch className='absolute left-3 text-black' />
          <input type="search" className='text-black focus:outline-none rounded-3xl p-2 pl-10 font-4xl' placeholder='search...' />
        </div>
        {/* <SignUp /> */}
        <div className='flex justify-between items-center gap-3 p-4'>
          <div className="bg-red-400 rounded-full h-10 w-10">
            <img src={'https://th.bing.com/th/id/OIP.RdxS9u-w00MM-81ESAivhQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7'} alt="logo" className='rounded-3xl' />
          </div>
          <div>Manoj Belbase</div>
          <div className='relative '>
            <MdKeyboardArrowDown tableindex={0}
              onBlur={() => {
                setShow(false)

              }} onClick={() => {
                setArrow("up")

                setShow(!show)

              }} className={`text-4xl relative cursor-pointer ${show ? "hidden" : "block"}  `} />
            <MdKeyboardArrowUp className={`text-4xl relative  text-white  cursor-pointer   ${Arrow === "down" ? 'hidden  ' : 'block '}`}
              onClick={() => {
                setArrow("down")
                setShow(!show);
              }}
            />
            {
              show && <div className='w-48 text-black absolute top-12 bg-yellow-500 right-0 z-20 p-2 '>
                {data.map((val, i) => {
                  return (
                    <div className='capitalize' key={i}>
                      {val.name}
                    </div>
                  )
                })}
              </div>
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Toolbar
