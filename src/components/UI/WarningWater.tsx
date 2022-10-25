import React from "react";
import { IoWaterOutline } from 'react-icons/io5';

interface WarningProps {
  date: string;
}

export default function WarningWater({ date }: WarningProps) {

  return (
    <div className="flex flex-col p-3 my-5 bg-sky-200 rounded-lg">
      <div className="flex items-center justify-evenly">
        <IoWaterOutline className="scale-150" />
        <div>
          <h3>Wasserbestand kritisch</h3>
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}