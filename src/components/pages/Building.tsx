import React from "react";
import { useApiGet } from "../../hook/useApiHook";
import { Floors } from "../../hook/dataInterfaces";
import { Link } from "react-router-dom";

export default function Buildings() {

    const floorsResponse = useApiGet<Floors[]>('/floors');
    const floorData = floorsResponse.data;

    return (
        <div className="flex flex-col items-center h-screen">
            <h2 className="h-10 flex items-center">Suurstoffi 1</h2>
            <h1 className="h-10 flex items-center">Stockwerk</h1>
            <div className="flex flex-col items-center justify-center h-full">
                {floorData?.map((floor: Floors, index: number) => (
                    <Link to="/floors/{floor.floorID}" key={index} className="h-14">{floor.floorNumber}</Link>
                ))}
            </div>
        </div>
    )
}