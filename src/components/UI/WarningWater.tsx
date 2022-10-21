import React from "react";
import { IoWaterOutline } from 'react-icons/io5';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from "react";

interface WarningProps {
  date: string;
}

export default function WarningWater({ date }: WarningProps) {

  const [detailsOpen, setDetailsOpen] = useState(false);

  const toggleDetail = () => {
    setDetailsOpen(!detailsOpen);
  }

  return (
    <div className="flex flex-col p-3 my-5 bg-sky-200 rounded-lg">
      <div className="flex items-center justify-evenly">
        <IoWaterOutline className="scale-150" />
        <div>
          <h3>Wasserbestand kritisch</h3>
          <p>{date}</p>
        </div>
        <div onClick={toggleDetail}>
          {detailsOpen ? <FiChevronUp className="scale-150 ml-3" /> : <FiChevronDown className="scale-150 ml-3" />}

        </div>
      </div>
      {detailsOpen && (
        <div className="px-3 pt-3 text-sm">
          <p>
            Der Wasserbestand befindet sich unter dem kritischen Schwellwert.
            Bitte das Reservoir bis zur Markierung mit Wasser auffüllen.
          </p>
        </div>
      )}
    </div>
  )
}