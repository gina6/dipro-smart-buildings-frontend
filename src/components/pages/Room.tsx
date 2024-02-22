import React from "react";
import { useParams } from "react-router-dom";
/* import { useApiGet } from "../../hook/useApiHook"; */
import { /*RoomInterface,*/ PlantInterface } from "../../hook/dataInterfaces";
import { placeholderRoom } from "../../hook/localData";

import Container from "../UI/Container";
import Header from "../UI/Header";
import BackLink from "../UI/BackLink";
import PlantBox from "../UI/PlantBox";

export default function Room() {
  const { roomID } = useParams<{ roomID: string }>();
  /*   const roomData = useApiGet<RoomInterface>(`/rooms/${roomID}`).data; */
  const roomData = placeholderRoom.find((room) => room.roomId === roomID);
  const plantCount = roomData?.plants.length;

  return (
    <>
      <Header
        headerTitle={roomData?.roomLabel}
        headerSubtitle={roomData?.floorLabel}
      />
      <BackLink />
      <Container>
        <div className="hidden px-5 text-green lg:block">
          <p>{roomData?.floorLabel}</p>
          <h1 className="text-3xl">{roomData?.roomLabel}</h1>
        </div>
        <div>
          <p className="p-5 text-right uppercase text-green lg:text-left">
            {plantCount} {plantCount === 1 ? "Pflanze" : "Pflanzen"}
          </p>
          <div className="grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {roomData?.plants.map((plant: PlantInterface, index: number) => (
              <PlantBox
                key={index}
                linkTo={`/rooms/${roomID}/${plant.plantId}`}
                plantLabel={`${plant.plantSpecies}`}
                plantImg={`${plant.plantImage}`}
              ></PlantBox>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
