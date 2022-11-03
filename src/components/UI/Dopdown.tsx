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
    <div className="flex justify-center w-full">
      <button className=" py-2 pl-2 font-bold text-green text-xl hover:text-gray-700 hover:bg-gray-50 rounded-l-md">
        {getLabel(floorId)}
      </button>

      <div className="">
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
          <div className="flex justify-center absolute right-0 left-0 z-10 bg-green rounded-b-2xl">
            <div className="flex flex-col-reverse p-8">
              {floorsData?.map((floor) => (
                <button
                  key={floor.floorId}
                  className="flex justify-center px-4 py-4 font-bold text-xl text-plantGreen active:text-white hover:bg-gray-50 hover:text-gray-700"
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
