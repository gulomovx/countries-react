import React from 'react'
import moon from '../assets/Group 3 (2).svg'
const Menu = () => {
  return (
    <div>
         <div className="bg-[#fff] shadow-md">
        <div className="flex justify-between max-w-md-[1340px] shadow-md-[0px 2px 4px 0px rgba(156, 45, 45, 0.06)] px-20 py-[29px] container">
          <div className="">
            <h2 className="">Where in the world</h2>
          </div>
          <div className="flex gap-2">
            <img src={moon} alt="" />
            <p>Dark Mode</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu