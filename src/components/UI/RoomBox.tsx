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
    <Link to={linkTo} className="overflow-hidden rounded-3xl bg-white ">
      <div className="m-3 grid grid-cols-2 gap-2 sm:gap-3 md:m-5">
        {plantImgs.map((plantImg: string, index: number) => (
          <div
            className="aspect-square w-full rounded-md bg-cover bg-center"
            style={{
              backgroundImage: `url("${process.env.REACT_APP_BACKEND_API}${plantImg}")`,
            }}
          ></div>
        ))}
      </div>
      <div className="m-2 text-center text-green">
        <p className="text-xl font-bold">{roomLabel}</p>
        <p className="font-light">{plantCount} Pflanzen</p>
      </div>
    </Link>
  );
}
