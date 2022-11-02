import React from "react";
import { Link } from "react-router-dom";

interface BottomNavButtonProps {
  linkTo: string;
  childIcon: JSX.Element;
  active: boolean;
  setActiveTab: () => void;
}

export default function MobileBottomNavButton({
  linkTo,
  childIcon,
  active,
  setActiveTab,
}: BottomNavButtonProps) {
  return (
    <div
      className={`h-full w-1/2 ${
        active ? "border-b-2 border-green" : "stroke-plantGreen"
      }`}
      onClick={setActiveTab}
    >
      <Link
        className="flex justify-center items-center h-full w-full"
        to={linkTo}
      >
        {childIcon}
      </Link>
    </div>
  );
}
