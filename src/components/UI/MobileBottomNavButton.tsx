import React from "react";
import { Link } from "react-router-dom";

interface BottomNavButtonProps {
  linkTo: string;
  childIcon: JSX.Element;
  active: boolean;
  buttonText?: string;
  setActiveTab: () => void;
}

export default function MobileBottomNavButton({
  linkTo,
  childIcon,
  active,
  buttonText,
  setActiveTab,
}: BottomNavButtonProps) {
  return (
    <>
    {/* Mobile and Tablet NavBar Button */}
    <div
      className={`h-full border-b-4 w-1/2 border-white lg:hidden ${
        active ? " !border-green" : "stroke-plantGreen"
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

    {/* Desktop NavBar Button */}
    <div
      className={`hidden lg:block p-5 ${
        active ? "fill-green" : "stroke-plantGreen"
      }`}
      onClick={setActiveTab}
    >
      <Link
        className="flex justify-center items-center h-full w-full"
        to={linkTo}
      >
        {childIcon}
        {buttonText && <h3 className={`text-xl pl-2 ${
        active ? "text-green" : "text-darkGrey"
      }`}>{buttonText}</h3>}
        
      </Link>
    </div>
        </>
  );
}
