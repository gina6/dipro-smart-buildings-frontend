import React from "react";
import BackLink from "../BackLink";
import { useParams } from "react-router-dom";
import { useApiGet } from "../../hook/useApiHook";
import { FloorInterface, RoomsInterface } from "../../hook/dataInterfaces";
import { Link } from "react-router-dom";


export default function Floor() {

    const { floorID } = useParams();
    const floorData = useApiGet<FloorInterface>(`/floors/${floorID}`).data;
    const roomsData = floorData?.rooms;

    return (
        <div>
            <BackLink linkText="< Stockwerk" route="/floors"></BackLink>
            <div className="flex flex-col items-center h-screen">
                <h2>{floorData?.floorLabel}</h2>
                <h1>Räume</h1>
                <div className="flex flex-col items-center justify-center h-full">
                    {roomsData?.map((room: RoomsInterface, index: number) => (
                        <Link to={`/rooms/${room.room}`} key={index} className="h-14">{room.roomLabel}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}