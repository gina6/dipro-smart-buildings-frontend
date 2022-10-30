import React, { useState } from "react";
import { ReactComponent as ChevronDown } from "../../icons/Chevron-Dropdown.svg";
import { FloorsInterface } from "../../hook/dataInterfaces";
import { useApiGet } from "../../hook/useApiHook";

interface DrowpdownProps {
  changeFloorId: (selectedID: string) => void;
}

export default function Dropdown({ changeFloorId }: DrowpdownProps) {
  const floorsData = useApiGet<FloorsInterface[]>(`/floors`).data;
  const [floorId, setFloorId] = useState("floor4");
  const [showDropdown, setShowDropdown] = useState(false);

  const onChange = (id: string): void => {
    changeFloorId(id);
    setFloorId(id);
  };

  const getLabel = (id: string): string => {
    let label = "";
    floorsData?.forEach((floor) => {
      if (floor.floorId === id) {
        label = floor.floorLabel;
      }
    });
    return label;
  };

  return (
    <div className="flex">
      <button className="px-4 py-2 font-bold text-green text-xl hover:text-gray-700 hover:bg-gray-50 rounded-l-md">
        {getLabel(floorId)}
      </button>

      <div className="relative">
        <button
          type="button"
          onClick={() => {
            showDropdown ? setShowDropdown(false) : setShowDropdown(true);
          }}
          className="inline-flex items-center justify-center h-full px-2 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
        >
          <ChevronDown></ChevronDown>
        </button>

        {showDropdown && (
          <div className="absolute right-0 z-10 w-56 origin-top-right bg-green rounded-b-lg">
            <div className="p-2">
              {floorsData?.map((floor) => (
                <button
                  key={floor.floorId}
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                  onClick={() => {
                    onChange(floor.floorId);
                    setShowDropdown(false);
                  }}
                >
                  {floor.floorLabel}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
