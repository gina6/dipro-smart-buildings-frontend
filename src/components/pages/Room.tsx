import React from "react";
import { useParams } from "react-router-dom";
import { useApiGet } from "../../hook/useApiHook";
import { RoomInterface, PlantInterface } from "../../hook/dataInterfaces";
import Container from "../UI/Container";
import Header from "../UI/Header";
import BackLink from "../UI/BackLink";
import PlantBox from "../UI/PlantBox";

export default function Room() {
  const { roomID } = useParams();
  const roomData = useApiGet<RoomInterface>(`/rooms/${roomID}`).data;
  const plantCount = roomData?.plants.length;

  return (
    <>
      <Header />
      <BackLink />
      <Container>
        <div className="flex flex-col mb-28">
          <p className="text-right p-5 uppercase"> {plantCount} Pflanzen</p>
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
