import React, { useState } from "react";
import { ReactComponent as HeaderBG } from "../../assets/BG-Secondary-Green.svg";
import { ReactComponent as Logo } from "../../icons/Logo.svg";

interface HeaderProps {
  headerTitle?: string | undefined;
  headerSubtitle?: string | undefined;
}

export default function Header({
  headerTitle,
  headerSubtitle,
}: HeaderProps) {
  return (
    <div className="w-full">
      {/* Mobile and Tablet Navbar */}
      <div className="relative w-full h-[150px] lg:hidden">
        <div className="w-full h-1/3 flex items-center justify-end px-5">
          <Logo className="w-8 h-8"></Logo>
        </div>
        <div className="w-full h-2/3 flex flex-col items-center justify-center">
          <div className="flex flex-col mx-14 items-center justify-center text-green text-center">
            <p>{headerSubtitle}</p>
            <h1 className="leading-snug">{headerTitle}</h1>
          </div>
        </div>
        <HeaderBG className="absolute top-0 -z-10 w-full h-[120%]" />
      </div>

      {/* Desktop Navbar */}
      <div className="w-full h-16 bg-plantGreen hidden lg:block"></div>
    </div>
  );
}
