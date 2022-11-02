import React from "react";
import { Link } from "react-router-dom";

interface plantBoxProps {
  linkTo: string;
  plantLabel: string;
  plantImg: string;
}

export default function PlantBox({
  linkTo,
  plantLabel,
  plantImg,
}: plantBoxProps) {
  return (
    <Link
      to={linkTo}
      className="relative flex items-center justify-center w-full aspect-square rounded-3xl overflow-hidden"
    >
      <p className="text-white text-lg font-medium text-center drop-shadow-md p-5 -z-10">
        {plantLabel}
      </p>

      <img
        src={`${process.env.REACT_APP_BACKEND_API}${plantImg}`}
        alt="Plant in the room"
        className="absolute w-full h-full object-cover brightness-[.75] bg-darkGrey -z-20"
      />
    </Link>
  );
}
