import React, { useEffect, useRef, useState } from "react";
import { RiCloseLine } from 'react-icons/ri';
import { generatePath, useNavigate } from "react-router-dom";
import { useApiGet } from "../../hook/useApiHook";
import { PlantInterface } from "../../hook/dataInterfaces"

interface OverlayProps {
  closeSearch: () => void;
}

export default function PlantSearch({ closeSearch }: OverlayProps) {

  const [error, setError] = useState(false);
  const [route, setRoute] = useState<string | null>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const plantData = useApiGet<PlantInterface>(route);
  let navigate = useNavigate();

  function searchPlantPage() {
    setRoute(`/plants/plant${searchInput.current?.value}`);
  }

  useEffect(() => {
    if (plantData.data) {
      setError(false);
      navigate(generatePath("/rooms/:roomID/:plantID", {
        roomID: plantData?.data.roomId,
        plantID: plantData?.data.plantId,
      }))
      closeSearch();
    } else if (plantData.error) {
      setError(true)
    }
  }, [plantData, navigate, closeSearch]);


  return (
    <div>
      <div className="flex flex-col items-center p-5 pb-10 bg-gray-100 rounded-t-lg mx-5">
        <div onClick={closeSearch} className="self-end scale-150">
          <RiCloseLine></RiCloseLine>
        </div>
        <h3 className="pb-5">
          ID eingeben
        </h3>
        <input ref={searchInput} type="text" name="searchInput" autoComplete="off" className="p-2 bg-transparent border-2 border-transparent border-b-gray-600 rounded-sm outline-none text-center" placeholder="plant000_00" />
        {error && (<p className="text-red-700">Pflanze nicht gefunden!</p>)
        }
        <button onClick={searchPlantPage} className="mt-3">Suchen</button>
      </div>
    </div>
  )
}