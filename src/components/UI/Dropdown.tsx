import React, { useState } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as ChevronDown } from "../../icons/Chevron-Dropdown.svg";
import { placeholderFloors } from "../../hook/localData";
/* import { useApiGet } from "../../hook/useApiHook"; */

interface DrowpdownProps {
  changeFloorId: (selectedID: string) => void;
  fullWidth?: boolean;
}

export default function Dropdown({ changeFloorId, fullWidth }: DrowpdownProps) {
  const floorsData = placeholderFloors;
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

  const dropdownContent = (
    <div className="flex w-full justify-center">
      <div className="flex flex-col-reverse py-4">
        {floorsData?.map((floor) => (
          <button
            key={floor.floorId}
            className="px-12 py-4 text-xl font-bold text-plantGreen hover:text-white"
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
  );

  return (
    <div>
      <button
        className={`flex items-center rounded-md p-2 transition-colors ${
          fullWidth ? "" : "pl-0"
        } text-xl font-bold hover:bg-white hover:text-gray-700`}
        onClick={() => {
          showDropdown ? setShowDropdown(false) : setShowDropdown(true);
        }}
      >
        <span>{getLabel(floorId)}</span>
        <ChevronDown className="ml-2" />
      </button>

      {showDropdown &&
        (fullWidth ? (
          createPortal(
            <div className="absolute right-0 left-0 top-0 flex justify-center rounded-b-2xl bg-green pt-[150px]">
              {dropdownContent}
            </div>,
            document.body
          )
        ) : (
          <div className="absolute z-20 -ml-12 rounded-2xl bg-green shadow-sm shadow-[black]/50 [&_*]:text-left">
            {dropdownContent}
          </div>
        ))}
    </div>
  );
}
