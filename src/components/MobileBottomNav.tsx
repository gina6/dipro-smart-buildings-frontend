import React from "react";
import { BiBell, BiSearch, BiBuildings } from 'react-icons/bi';
import { Link } from "react-router-dom";
import PlantSearch from "./UI/PlantSearch";
import { useState } from "react";

export default function MobileBottomNav() {

  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationNavIndicator, setNavIndicator] = useState(true);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  }

  return (
    <div className="bottom-0 fixed w-screen">
      {searchOpen && (
        <PlantSearch closeSearch={toggleSearch}></PlantSearch>
      )}
      <div className="flex justify-center">
        <div className="flex justify-center bottom-5 z-10 bg-gray-900 rounded-full fixed ">
          <div className="p-6">
            <BiSearch className="scale-150 text-white" onClick={toggleSearch} />
          </div>
        </div>
        <div className="flex flex-col w-full h-14">
          {notificationNavIndicator ? <div className="flex self-start bg-gray-900 w-1/2 h-1"></div> : <div className="flex self-end bg-gray-900 w-1/2 h-1"></div>}
          <div className="flex flex-row w-full h-14 items-center bg-gray-300">
            <Link id="notificationTab" className="h-full w-1/2 flex justify-center items-center" to="/" onClick={() => setNavIndicator(true)}>
              <BiBell className="scale-150" />
            </Link>
            <Link id="buildingTab" className="h-full w-1/2 flex justify-center items-center" to="/floors" onClick={() => setNavIndicator(false)}>
              <BiBuildings className="scale-150" />
            </Link>
          </div >
        </div>
      </div>
    </div >
  )
}