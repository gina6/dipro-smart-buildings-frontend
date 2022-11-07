import React, { useState } from "react";
import { useApiGet } from "../../hook/useApiHook";
import { FloorInterface } from "../../hook/dataInterfaces";
import RoomBox from "../UI/RoomBox";
import Container from "../UI/Container";
import Header from "../UI/Header";
import Dropdown from "../UI/Dropdown";

export default function Floor() {
  const [floorId, setFloorId] = useState("floor4");
  const floorData = useApiGet<FloorInterface>(`/floors/${floorId}`).data;
  const plantCount = countPlants();

  function countPlants() {
    let count = 0;

    floorData?.rooms.forEach((room) => {
      count += room.plantCount;
    });
    return count;
  }

  function changeFloorId(floorId: string) {
    setFloorId(floorId);
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
            {plantCount} Pflanzen
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
