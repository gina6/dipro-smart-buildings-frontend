import React from "react";
import { BiBell, BiSearch, BiBuildings} from 'react-icons/bi';
import { Link } from "react-router-dom";
import PlantSearch from "./UI/PlantSearch";
import { useState } from "react";

export default function MobileBottomNav() {

  const [searchOpen, setSearchOpen] = useState(false)

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  }

  return (
    <div className="bottom-0 fixed w-screen">
      <PlantSearch isOpen={searchOpen}></PlantSearch>
      <div className="flex justify-center">
        <div className="flex justify-center bottom-5 z-10 bg-gray-900 rounded-full fixed ">
          <div className="p-6">
            <BiSearch className="scale-150 text-white" onClick={toggleSearch} />
          </div>
        </div>

        <div className="flex flex-row w-full h-14 justify-around items-center bg-gray-300">

          <div>
              <Link to="/"><BiBell className="scale-150" /></Link>

          </div>
          <div>
              <Link to="/floors"><BiBuildings className="scale-150" /></Link>
          </div>
        </div >
      </div>
    </div>
    )
}