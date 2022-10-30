import React, { useState } from "react";
import { useApiGet } from "../../hook/useApiHook";
import { FloorInterface } from "../../hook/dataInterfaces";
import RoomBox from "../UI/RoomBox";
import { ReactComponent as Logo } from "../../icons/Logo.svg";
import Dropdown from "../UI/Dopdown";

export default function Floor() {
  const [floorId, setFloorId] = useState("floor4");
  const floorData = useApiGet<FloorInterface>(`/floors/${floorId}`).data;

  function changeFloorId(floorId: string) {
    setFloorId(floorId);
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex self-end">
          <Logo className="w-10 h-10"></Logo>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-green font-light">Pflanzenlexikon</p>
          <Dropdown changeFloorId={changeFloorId}></Dropdown>
        </div>
        <div className="flex flex-row mt-10">
          {floorData?.rooms
            .filter((room) => room.plantCount !== 0)
            .map((filteredRoom, index: number) => (
              <RoomBox
                key={index}
                linkTo={`/rooms/${filteredRoom.roomId}`}
                roomLabel={filteredRoom.roomLabel}
                plantCount={filteredRoom.plantCount}
                plantImgs={filteredRoom.plantImages}
              ></RoomBox>
            ))}
        </div>
      </div>
    </div>
  );
}
