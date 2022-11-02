import React from "react";
import { Link } from "react-router-dom";

interface RoomBoxProp {
  linkTo: string;
  roomLabel: string;
  plantCount: number;
  plantImgs: Array<string>;
}

export default function RoomBox({
  linkTo,
  roomLabel,
  plantCount,
  plantImgs,
}: RoomBoxProp) {
  return (
    <Link
      to={linkTo}
      className="flex flex-col items-center justify-center p-2 w-1/2 rounded-3xl bg-white"
    >
      <div className="flex flex-wrap ">
        {plantImgs.map((plantImg: string, index: number) => (
          <img
            key={index}
            alt="Pflanze"
            src={`${process.env.REACT_APP_BACKEND_API}${plantImg}`}
            className="aspect-square rounded-lg w-2/5 m-1 drop-shadow-md"
          />
        ))}
      </div>
      <div className="m-2">
        <p className="font-bold text-green">{roomLabel}</p>
        <p className="font-light">{plantCount} Pflanzen</p>
      </div>
    </Link>
  );
}
