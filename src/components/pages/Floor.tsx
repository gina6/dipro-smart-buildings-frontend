import React, { useState, useEffect } from "react";
/* import { useApiGet } from "../../hook/useApiHook"; */
import { FloorInterface } from "../../hook/dataInterfaces";
import RoomBox from "../UI/RoomBox";
import Container from "../UI/Container";
import Header from "../UI/Header";
import Dropdown from "../UI/Dropdown";
import { placeholderFloors, placeholderFloor } from "../../hook/localData";

export default function Floor() {
  const [floorId, setFloorId] = useState("floor4");
  /*   const floorData = useApiGet<FloorInterface>(`/floors/${floorId}`).data; */
  const [floorData, setFloorData] = useState<FloorInterface | undefined>(
    undefined
  );
  useEffect(() => {
    const floorInfo = placeholderFloors.find(
      (floor) => floor.floorId === floorId
    );
    if (floorInfo) {
      const floor = placeholderFloor.find(
        (f) => f.floorLabel === floorInfo.floorLabel
      );
      setFloorData(floor);
    }
  }, [floorId]);

  const plantCount =
    floorData?.rooms.reduce((acc, room) => acc + room.plantCount, 0) || 0;

  function changeFloorId(newFloorId: string) {
    setFloorId(newFloorId);
  }

  return (
    <>
      <Header
        headerTitle={
          <Dropdown changeFloorId={changeFloorId} fullWidth></Dropdown>
        }
        headerSubtitle={"Pflanzenlexikon"}
      />
      <Container>
        <div className="hidden px-5 text-green lg:block">
          <Dropdown changeFloorId={changeFloorId}></Dropdown>
        </div>
        <div className="mb-28 flex flex-col">
          <p className="p-5 text-right uppercase text-green lg:text-left">
            {plantCount} {plantCount === 1 ? "Pflanze" : "Pflanzen"}
          </p>
          <div className="grid grid-flow-row grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
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
      </Container>
    </>
  );
}
