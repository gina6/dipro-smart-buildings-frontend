import React from "react";
import BackLink from "../BackLink";
import { useParams } from "react-router-dom";
import { useApiGet } from "../../hook/useApiHook";
import { RoomInterface, PlantInterface } from "../../hook/dataInterfaces";
import PlantBox from "../UI/PlantBox";
import RoomSensorData from "../UI/RoomSensorData";

export default function Room() {

  const { roomID } = useParams();
  const roomData = useApiGet<RoomInterface>(`/rooms/${roomID}`).data;

  return (
    <div>
      <BackLink linkText="< Räume" route="/floors"></BackLink>
      <div className="flex flex-col mb-28">
        <h2>{roomData?.floorLabel} | {roomData?.roomLabel}</h2>
        <h1>Raumübersicht</h1>
        <RoomSensorData temp={roomData?.airTemp} co2={roomData?.airQuality} humidity={roomData?.airHumidity} ></RoomSensorData>
        <h3 className="text-right p-5">XX Pflanzen</h3>
        <div className="grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-3">
          {roomData?.plants.map((plant: PlantInterface, index: number) => (
            <PlantBox key={index} linkTo={`/rooms/${roomID}/${plant.plantId}`} plantLabel={`${plant.plantSpecies}`} plantImg={`${plant.plantImage}`}></PlantBox>
          ))}
        </div>
      </div>
    </div>
  )
}