import React from "react";
import { FiChevronRight } from 'react-icons/fi'
import { IoWaterOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

interface NotificationDetails {
  roomLabel: string;
  roomID: string;
  plantID: string;
  plantLabel: string;
  plantImg: string;
}

export default function NotificationAlert({ roomLabel, roomID, plantID, plantLabel, plantImg }: NotificationDetails) {
  return (
    <div className="flex items-center my-5 bg-gray-200 rounded-lg h-fit">
      <div className="h-fit w-1/3">
        <img className="object-cover rounded-l-lg" src={`${process.env.REACT_APP_BACKEND_API}${plantImg}`} alt="plant in room" />
      </div>
      <div className="flex justify-between p-3">
        <div>
          <div className="flex items-center">
            <h3>{roomLabel}</h3>
            <h3 className="text-gray-500 text-xs ml-3">{plantID}</h3>
          </div>
          <p>{plantLabel}</p>
          <div className="flex w-fit my-1">
            <div className="bg-sky-200 rounded-full p-2 drop-shadow-md">
              <IoWaterOutline />
            </div>
          </div>
        </div>
        <Link to={`/rooms/${roomID}/${plantID}`}>
          <div className="flex items-center h-20">
            <FiChevronRight className="scale-150" />
          </div>
        </Link>
      </div>
    </div>
  )
}