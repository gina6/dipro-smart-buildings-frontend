import React, { useState } from "react";
import { useApiGet } from "../../hook/useApiHook";
import { FloorInterface } from "../../hook/dataInterfaces";
import RoomBox from "../UI/RoomBox";
import Container from "../UI/Container";
import Header from "../UI/Header";
import Dropdown from "../UI/Dopdown";

export default function Floor() {
  const [floorId, setFloorId] = useState("floor4");
  const floorData = useApiGet<FloorInterface>(`/floors/${floorId}`).data;

  function changeFloorId(floorId: string) {
    setFloorId(floorId);
  }

  return (
    <>
      <Header
        headerTitle={<Dropdown changeFloorId={changeFloorId}></Dropdown>}
        headerSubtitle={"Pflanzenlexikon"}
      />
      <Container>
        <div className="flex flex-col">
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
      </Container>
    </>
  );
}
