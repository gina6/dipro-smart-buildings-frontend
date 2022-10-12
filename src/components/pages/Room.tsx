import React from "react";
import BackLink from "../BackLink";
import { useParams } from "react-router-dom";
import { useApiGet } from "../../hook/useApiHook";
import { RoomsInterface, RoomInterface, PlantInterface } from "../../hook/dataInterfaces";
import { Link } from "react-router-dom";


export default function Room() {

    const { roomID } = useParams();
    const roomData = useApiGet<RoomsInterface>(`/rooms/${roomID}`).data;
    const plantsData = useApiGet<RoomInterface>(`/rooms/${roomID}`).data;
    const roomPlants = plantsData?.roomPlants;
    // response mit backend absprechen: es kommt Room Label und plants zurück

    return (
        <div>
            <BackLink linkText="< Räume" route="/floors"></BackLink>
            <div className="flex flex-col items-center h-screen">
                <h2>{roomData?.roomLabel}</h2>
                <h1>Raumübersicht</h1>
                <div className="flex flex-col items-center justify-center h-full">
                    {roomPlants?.map((plant: PlantInterface, index: number) => (
                        <Link to={`/rooms/${roomID}/${plant.plant}`} key={index} className="h-14">{plant.plantSpecies}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}