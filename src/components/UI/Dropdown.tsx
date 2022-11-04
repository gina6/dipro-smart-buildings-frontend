import React, { useState } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as ChevronDown } from "../../icons/Chevron-Dropdown.svg";
import { FloorsInterface } from "../../hook/dataInterfaces";
import { useApiGet } from "../../hook/useApiHook";

interface DrowpdownProps {
  changeFloorId: (selectedID: string) => void;
  fullWidth?: boolean;
}

export default function Dropdown({ changeFloorId, fullWidth }: DrowpdownProps) {
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

  const dropdownContent = (
    <div className="flex justify-center w-full">
      <div className="flex flex-col-reverse py-4">
        {floorsData?.map((floor) => (
          <button
            key={floor.floorId}
            className="px-12 py-4 font-bold text-xl text-plantGreen hover:text-white"
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
        className={`flex items-center p-2 ${
          fullWidth ? "" : "pl-0"
        } font-bold text-xl hover:text-gray-700 hover:bg-gray-50`}
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
            <div className="flex justify-center absolute right-0 left-0 top-0 pt-[150px] bg-green rounded-b-2xl">
              {dropdownContent}
            </div>,
            document.body
          )
        ) : (
          <div className="absolute z-20 bg-green rounded-2xl -ml-12 [&_*]:text-left shadow-sm shadow-[black]/50">
            {dropdownContent}
          </div>
        ))}
    </div>
  );
}
