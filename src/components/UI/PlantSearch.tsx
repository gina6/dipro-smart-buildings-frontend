import React from "react";
import { RiCloseLine } from 'react-icons/ri';

interface OverlayProps {
  isOpen: boolean;
}

export default function PlantSearch({isOpen}: OverlayProps) {
    return (
      <div>
        {isOpen && (
          <div className="flex flex-col items-center p-5 pb-10 bg-gray-100 rounded-t-lg mx-5">
            <RiCloseLine className="self-end scale-150"></RiCloseLine>
            <h3 className="pb-5">
              ID eingeben
            </h3>
            <input type="text" className="p-2 bg-transparent border-2 border-transparent border-b-gray-600 rounded-sm outline-none text-center" placeholder="plant000_00"/>
            <button className="mt-3">Suchen</button>
          </div>
        )}
      </div>
    )
}