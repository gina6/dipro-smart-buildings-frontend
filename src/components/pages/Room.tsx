import React from "react";
import BackLink from "../BackLink";
import { useParams } from "react-router-dom";
import { useApiGet } from "../../hook/useApiHook";
import { RoomInterface, PlantInterface } from "../../hook/dataInterfaces";
import { Link } from "react-router-dom";


export default function Room() {

    const { roomID } = useParams();
    const roomData = useApiGet<RoomInterface>(`/rooms/${roomID}`).data;


    return (
        <div>
            <BackLink linkText="< Räume" route="/floors"></BackLink>
            <div className="flex flex-col h-screen">
                <h2>{roomData?.roomLabel}</h2>
                <h1>Raumübersicht</h1>
                <div className="flex flex-col items-center justify-center h-full">
                    {roomData?.plants.map((plant: PlantInterface, index: number) => (
                        <Link to={`/rooms/${roomID}/${plant.plantId}`} key={index} className="h-14">{plant.plantSpecies}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}