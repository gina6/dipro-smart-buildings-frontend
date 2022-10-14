import React from "react";
import { Link } from "react-router-dom";

interface RoomBoxProp {
    linkTo: string;
    roomLabel: string;
    plantCount: string;
}


export default function RoomBox({ linkTo, roomLabel, plantCount }: RoomBoxProp) {

    return (
        <div className="flex flex-col items-center bg-zinc-800 text-white p-5 m-1.5 rounded-full">
            <Link to={linkTo}>{roomLabel}</Link>
            {plantCount}
        </div>
    )

}