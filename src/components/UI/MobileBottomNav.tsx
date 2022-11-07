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
      <div className="fixed bottom-0 w-full lg:hidden">
        {searchOpen && <PlantSearch closeSearch={toggleSearch}></PlantSearch>}
        <div className="flex justify-center drop-shadow-md">
          <div
            className="fixed bottom-5 z-10 flex cursor-pointer justify-center rounded-full bg-green drop-shadow-md"
            onClick={toggleSearch}
          >
            <div className="p-3">
              <Pflanzensuche />
            </div>
          </div>
          <div className="flex h-14 w-full flex-col ">
            <div
              className="flex h-14 w-full flex-row items-center rounded-t-2xl bg-white shadow-top"
              onClick={() => setSearchOpen(false)}
            >
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
      <div className="absolute top-16 hidden w-full bg-white lg:block">
        <div className="m-auto h-16 max-w-6xl ">
          <div className="relative flex h-full w-full flex-row items-center">
            <MobileBottomNavButton
              linkTo="/"
              active={activeTab}
              childIcon={<Notficationbell />}
              buttonText={"Benachrichtigungen"}
              setActiveTab={() => setActiveTab(true)}
            />
            <div className="mx-2 h-9 w-px self-center rounded-full bg-lightGrey"></div>
            <MobileBottomNavButton
              linkTo="/floors/"
              active={!activeTab}
              buttonText={"Pflanzenlexikon"}
              childIcon={<Pflanzenlexikon />}
              setActiveTab={() => setActiveTab(false)}
            />
            {searchOpen && (
              <PlantSearch closeSearch={toggleSearch}></PlantSearch>
            )}
            <div className="absolute right-0 flex h-full items-center justify-end px-5">
              <div
                className="flex cursor-pointer items-center justify-center rounded-lg bg-green px-3 py-2 drop-shadow-md"
                onClick={toggleSearch}
              >
                <Pflanzensuche />
                <h3 className="pl-1 text-lightGrey">Pflanzensuche</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
