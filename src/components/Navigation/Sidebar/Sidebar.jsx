import React from 'react'
import siderarData from './Sidebardata';
// import { FaRegTimesCircle } from 'react-icons/fa'
import Sidebardata from './Sidebardata'
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
  const location = useLocation();
  console.log(Sidebardata);
  return (
    <div className='fixed top-14 left-0 h-screen bg-[#071D53] w-52 -z-10'>
      <div>
        {siderarData.map((curElem, i) => {
          return (
            <div key={i}>
              <div className={`text-white cursor-pointer py-2 w-11/12 text-center relative top-10 px-2`}>
                <Link to={curElem.path} className={`flex items-center gap-2 text-lg border-2 py-1 px-2 w-full ${location.pathname === curElem.path && "text-black bg-white"}`}>
                  <p className='font-bold text-2xl cursor-pointer'>{curElem.icons}</p>
                  <p className='cursor-pointer '>{curElem.Name}</p>
                </Link></div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Sidebar
