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
      <div className="flex flex-col h-screen">
        <h2>{roomData?.floorLabel} | {roomData?.roomLabel}</h2>
        <h1>Raumübersicht</h1>
        <RoomSensorData temp={roomData?.airTemp} co2={roomData?.airQuality} humidity={roomData?.airHumidity} ></RoomSensorData>
        <h3>Pflanzen</h3>
        <div className="flex flex-col">
          {roomData?.plants.map((plant: PlantInterface, index: number) => (
            <PlantBox key={index} linkTo={`/rooms/${roomID}/${plant.plantId}`} plantLabel={`${plant.plantSpecies}`}></PlantBox>
          ))}
        </div>
      </div>
    </div>
  )
}