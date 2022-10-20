import React from "react";
import { FiChevronRight } from 'react-icons/fi'
import { IoWaterOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function NotificationAlert() {
  return (
    <div className="flex items-center justify-between p-3 my-5 bg-gray-200 rounded-lg h-fit">
      <img src="" alt="" />
      <div>
        <div className="flex items-center">
          <h3>DI Space</h3>
          <h3 className="text-gray-500 text-xs ml-3">ID 401_02</h3>
        </div>
        <p>Mexikanische Bergpalme</p>
        <div className="flex w-fit my-1">
          <div className="bg-sky-200 rounded-full p-2 drop-shadow-md">
            <IoWaterOutline />
          </div>
        </div>
      </div>
      <Link to="/rooms/openOffice_401/plant401_02">
        <div className="flex items-center h-20">
          <FiChevronRight className="scale-150" />
        </div>
      </Link>
    </div>
  )
}