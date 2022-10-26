import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useApiGet } from "../../hook/useApiHook";
import { FloorInterface, FloorsInterface } from "../../hook/dataInterfaces";
import RoomBox from "../UI/RoomBox";

export default function Floor() {
  const floorsData = useApiGet<FloorsInterface[]>(`/floors`).data;
  const [floorId, setFloorId] = useState("floor4");
  const floorData = useApiGet<FloorInterface>(`/floors/${floorId}`).data;
  const [showDropdown, setShowDropdown] = useState(false);

  console.log(floorsData);
  console.log(floorData);

  const onChange = (id: string): void => {
    setFloorId(id);
  };

  const getLabel = (id: string): string => {
    let label = "";
    floorsData?.forEach((e) => {
      if (e.floorId === id) {
        label = e.floorLabel;
      }
    });
    return label;
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center	">
          <p>Suurstoffi</p>
          <h1>Gebäude</h1>

          <div className="inline-flex bg-white border rounded-md">
            <a
              href="#"
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
            >
              {getLabel(floorId)}
            </a>

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  showDropdown ? setShowDropdown(false) : setShowDropdown(true);
                }}
                className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                  <div className="p-2">
                    {floorsData?.map((e) => (
                      <button
                        key={e.floorId}
                        className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        onClick={() => {
                          onChange(e.floorId);
                          setShowDropdown(false);
                        }}
                      >
                        {e.floorLabel}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {floorData?.rooms.map((room, index: number) => (
            <RoomBox
              key={index}
              linkTo={`/rooms/${room.roomId}`}
              roomLabel={`${room.roomLabel}`}
              plantCount={`${room.plantCount}`}
            ></RoomBox>
          ))}
        </div>
      </div>
    </div>
  );
}
