import React, { useState } from "react";
import { createPortal } from "react-dom";
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
    <div>
      <button
        className="flex items-center p-2 font-bold text-xl hover:text-gray-700 hover:bg-gray-50"
        onClick={() => {
          showDropdown ? setShowDropdown(false) : setShowDropdown(true);
        }}
      >
        <span>{getLabel(floorId)}</span>
        <ChevronDown className="ml-2" />
      </button>

      {showDropdown &&
        createPortal(
          <div className="flex justify-center absolute right-0 left-0 top-0 bg-green rounded-b-2xl pt-[150px]">
            <div className="flex flex-col-reverse px-8 py-4">
              {floorsData?.map((floor) => (
                <button
                  key={floor.floorId}
                  className="px-4 py-4 font-bold text-xl text-plantGreen hover:text-white"
                  onClick={() => {
                    onChange(floor.floorId);
                    setShowDropdown(false);
                  }}
                >
                  {floor.floorLabel}
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
