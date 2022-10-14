import React from "react";
import BackLink from "../BackLink";
import { useParams } from "react-router-dom";
import { useApiGet } from "../../hook/useApiHook";
import { FloorInterface } from "../../hook/dataInterfaces";
import RoomBox from "../UI/RoomBox";


export default function Floor() {

    const { floorID } = useParams();
    const floorData = useApiGet<FloorInterface>(`/floors/${floorID}`).data;

    return (
        <div>
            <BackLink linkText="< Stockwerk" route="/floors"></BackLink>
            <div className="flex flex-col">
                <h2>{floorData?.floorLabel}</h2>
                <h1>Räume</h1>
                <div className="flex flex-col">
                    {floorData?.rooms.map((room, index: number) => (
                        <RoomBox key={index} linkTo={`/rooms/${room.roomId}`} roomLabel={`${room.roomLabel}`} plantCount={`${room.plantCount}`}></RoomBox>
                    ))}
                </div>
            </div>
        </div>
    )
}