import React from "react";
import { ReactComponent as Pflanzensuche } from "../../icons/Planzensuche.svg";
import { ReactComponent as Pflanzenlexikon } from "../../icons/Pflanzenlexikon.svg";
import { ReactComponent as Notficationbell } from "../../icons/Notification-bell.svg";

import PlantSearch from "./PlantSearch";
import { useState } from "react";
import MobileBottomNavButton from "./MobileBottomNavButton";

export default function MobileBottomNav() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(true);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      {/* Mobile and Tablet Navbar */}
      <div className="bottom-0 fixed w-full lg:hidden">
        {searchOpen && <PlantSearch closeSearch={toggleSearch}></PlantSearch>}
        <div className="flex justify-center drop-shadow-md">
          <div
            className="flex justify-center bottom-5 z-10 bg-green rounded-full fixed drop-shadow-md cursor-pointer"
            onClick={toggleSearch}
          >
            <div className="p-3">
              <Pflanzensuche />
            </div>
          </div>
          <div className="flex flex-col w-full h-14 ">
            <div className="flex flex-row w-full h-14 items-center bg-white rounded-t-2xl shadow-top">
              <MobileBottomNavButton
                linkTo="/"
                active={activeTab}
                childIcon={<Notficationbell />}
                setActiveTab={() => setActiveTab(true)}
              />
              <MobileBottomNavButton
                linkTo="/floors/"
                active={!activeTab}
                childIcon={<Pflanzenlexikon />}
                setActiveTab={() => setActiveTab(false)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="absolute top-16 w-full hidden lg:block bg-white">
          <div className="flex flex-col max-w-6xl m-auto h-16 ">
            <div className="flex flex-row w-full h-full items-center">
              <MobileBottomNavButton
                linkTo="/"
                active={activeTab}
                childIcon={<Notficationbell />}
                buttonText={"Benachrichtigungen"}
                setActiveTab={() => setActiveTab(true)}
                />
                <div className="h-9 w-px mx-2 rounded-full self-center bg-lightGrey"></div>
              <MobileBottomNavButton
                linkTo="/floors/"
                active={!activeTab}
                buttonText={"Pflanzenlexikon"}
                childIcon={<Pflanzenlexikon />}
                setActiveTab={() => setActiveTab(false)}
              />
            </div>
          </div>
      </div>
    </>
  );
}
