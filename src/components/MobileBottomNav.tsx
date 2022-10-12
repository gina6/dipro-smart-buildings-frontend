import React from "react";
import { BiBell, BiSearch, BiBuildings } from 'react-icons/bi';
import { Link } from "react-router-dom";

export default function MobileBottomNav() {
    return (
        <div className="flex flex-row w-full h-14 bottom-0 fixed justify-evenly items-center bg-gray-300">

            <div>
                <Link to="/"><BiBell className="scale-150" /></Link>

            </div>
            <div>
                <BiSearch className="scale-150" />
            </div>
            <div>
                <Link to="/building"><BiBuildings className="scale-150" /></Link>

            </div>
        </div >
    )
}