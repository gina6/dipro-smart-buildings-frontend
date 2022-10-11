import React from "react";
import { BiBell, BiSearch, BiBuildings } from 'react-icons/bi';
import { BrowserRouter as Link } from "react-router-dom";

export default function MobileBottomNav() {
    return (
        <div className="flex flex-row w-full h-14 bottom-0 fixed justify-evenly items-center bg-gray-300">

            <div>
                <a href="http://localhost:3000/notifications"><BiBell className="scale-150" />
                </a>
            </div>
            <div>
                <BiSearch className="scale-150" />
            </div>
            <div>
                <a href="http://localhost:3000/building"><BiBuildings className="scale-150" />
                </a>

            </div>
        </div>
    )
}