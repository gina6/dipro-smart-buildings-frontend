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
      className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl"
    >
      <p className="-z-10 p-5 text-center text-lg font-medium text-white drop-shadow-md">
        {plantLabel}
      </p>

      <img
        src={"/images/" + plantImg}
        alt="Plant in the room"
        className="absolute -z-20 h-full w-full bg-darkGrey object-cover brightness-[.75]"
      />
    </Link>
  );
}
