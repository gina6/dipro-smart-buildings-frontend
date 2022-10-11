import React from "react";
import { BiBell, BiSearch, BiBuildings } from 'react-icons/bi'

export default function MobileBottomNav() {
    return (
        <div className="flex flex-row w-full h-14 bottom-0 fixed justify-evenly items-center bg-gray-300">

            <div>
                <BiBell className="scale-150" />
            </div>
            <div>
                <BiSearch className="scale-150" />
            </div>
            <div>
                <BiBuildings className="scale-150" />
            </div>
        </div>
    )
}