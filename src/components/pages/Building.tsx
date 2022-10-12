import React from "react";
import { useApiGet } from "../../hook/useApiHook";
import { FloorsInterface } from "../../hook/dataInterfaces";
import { Link } from "react-router-dom";

export default function Buildings() {

    const floorsResponse = useApiGet<FloorsInterface[]>('/floors');
    const floorsData = floorsResponse.data;

    return (
        <div className="flex flex-col items-center h-screen">
            <h2 className="h-10 flex items-center">Suurstoffi 1</h2>
            <h1 className="h-10 flex items-center">Stockwerk</h1>
            <div className="flex flex-col items-center justify-center h-full">
                {floorsData?.map((floor: FloorsInterface, index: number) => (
                    <Link to={`/floors/${floor.floorId}`} key={index} className="h-14">{floor.floorNumber}</Link>
                ))}
            </div>
        </div>
    )
}