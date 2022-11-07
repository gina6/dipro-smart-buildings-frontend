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
        className={`h-full w-1/2 border-b-4 border-white lg:hidden ${
          active ? " !border-green" : "stroke-plantGreen"
        }`}
        onClick={setActiveTab}
      >
        <Link
          className="flex h-full w-full items-center justify-center"
          to={linkTo}
        >
          {childIcon}
        </Link>
      </div>

      {/* Desktop NavBar Button */}
      <Link
        className="hidden cursor-pointer p-5 lg:block"
        to={linkTo}
        onClick={setActiveTab}
      >
        <div
          className={`flex h-full w-full items-center justify-center ${
            active ? "fill-green" : "stroke-plantGreen"
          }`}
        >
          {childIcon}
          {buttonText && (
            <h3
              className={`pl-2 text-xl ${
                active ? "text-green" : "text-darkGrey"
              }`}
            >
              {buttonText}
            </h3>
          )}
        </div>
      </Link>
    </>
  );
}
