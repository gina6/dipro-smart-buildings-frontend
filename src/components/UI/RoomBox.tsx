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
      className="bg-white rounded-3xl overflow-hidden "
    >
      <div className="grid grid-cols-2 gap-2 sm:gap-3 m-3 md:m-5">
        {plantImgs.map((plantImg: string, index: number) => (
          <img
            key={index}
            alt="Pflanze"
            src={`${process.env.REACT_APP_BACKEND_API}${plantImg}`}
            className="h-full aspect-square drop-shadow-lg object-cover rounded-lg"
          />
        ))}
      </div>
      <div className="text-center text-green m-2">
        <p className="font-bold text-xl">{roomLabel}</p>
        <p className="font-light">{plantCount} Pflanzen</p>
      </div>
    </Link>
  );
}
