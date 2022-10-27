import React from "react";
import { Link } from "react-router-dom";

interface RoomBoxProp {
    linkTo: string;
    roomLabel: string;
    plantCount: string;
    plantImgs: string;
}


export default function RoomBox({ linkTo, roomLabel, plantCount, plantImgs }: RoomBoxProp) {

    console.log({plantImgs})
    return (
        <Link to={linkTo} className="flex flex-col items-center bg-zinc-800 text-white p-5 m-1.5 rounded-full">
            <p>{roomLabel}</p>
            <p>{plantCount}</p>
            {/* {plantImgs.map((plantImg, index: number) => (
                <img alt="Pflanze" src={`${process.env.REACT_APP_BACKEND_API}${plantImg}`} />
            )) } */}
        </Link>
    )

}