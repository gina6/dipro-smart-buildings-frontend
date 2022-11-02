import React from "react";
import BackLink from "../BackLink";
import { useParams } from "react-router-dom";
import { RoomInterface, PlantInterface, NotificationInterface } from "../../hook/dataInterfaces";
import { useApiGet } from "../../hook/useApiHook";
import RoomSensorData from "../UI/RoomSensorData";
import WarningWater from "../UI/WarningWater";


export default function PlantDetail() {

    const { plantID } = useParams();
    const { roomID } = useParams();
    const plantData = useApiGet<PlantInterface>(`/plants/${plantID}`).data;
    const roomData = useApiGet<RoomInterface>(`/rooms/${roomID}`).data;
    const warningData = useApiGet<NotificationInterface[]>('/notifications').data;
    const plantWarning = warningData?.find(warning => warning.plantId === plantID);

    return (
        <div>
            <BackLink linkText="< Raumübersicht" route='/floors'></BackLink>
            <div>{plantData?.floorLabel} | {plantData?.roomLabel}</div>
            <h1 className="mb-3">{plantData?.plantSpecies}</h1>
            <img src={`${process.env.REACT_APP_BACKEND_API}${plantData?.plantImage}`} alt="Plant in the room" className="rounded-lg" />
            <RoomSensorData temp={roomData?.airTemp} co2={roomData?.airQuality} humidity={roomData?.airHumidity}></RoomSensorData>

            {plantWarning && (
                <WarningWater date={`${plantWarning?.date}`}></WarningWater>
            )}


            <div className="p-5 my-5 bg-gray-100 rounded-lg">
                <div className="flex items-center pb-5 pt-2">
                    <h3>Pflanzenprofil</h3>
                    <p className="text-gray-700 text-xs pl-2">ID: {plantID}</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between py-1">
                        <p>Lichtverhältnis</p>
                        <p>{plantData?.lightNeed}</p>
                    </div>
                    <div className="flex justify-between py-1">
                        <p>Substrat</p>
                        <p>{plantData?.substrate}</p>
                    </div>
                    <div className="flex justify-between py-1">
                        <p>Topfgrösse</p>
                        <p>{plantData?.potSize}</p>
                    </div>
                    <div className="flex justify-between py-1">
                        <p>Wasserbedarf</p>
                        <p>{plantData?.waterNeed}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col p-5 my-5">
                <div className="flex justify-between">
                    <p>Kaufdatum</p>
                    <p>{plantData?.plantDate}</p>
                </div>
                <div className="flex justify-between">
                    <p>Letzter Service</p>
                    <p>{plantData?.lastService}</p>
                </div>
                <div className="flex justify-between">
                    <p>Nächster Service</p>
                    <p>{plantData?.nextService}</p>
                </div>
            </div>

        </div>
    )
}