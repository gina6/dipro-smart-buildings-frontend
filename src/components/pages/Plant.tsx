import React from "react";
import BackLink from "../BackLink";
import { useParams } from "react-router-dom";
import { PlantInterface } from "../../hook/dataInterfaces";
import { useApiGet } from "../../hook/useApiHook";


export default function PlantDetail() {

    const { plantID } = useParams();
    const plantData = useApiGet<PlantInterface>(`/plants/${plantID}`).data;

    return (
        <div>
            <BackLink linkText="< Raumübersicht" route='/floors'></BackLink>
            <div>{plantData?.floorLabel} | {plantData?.roomLabel}</div>
            <h1>{plantData?.plantSpecies}</h1>
            <img src={`${process.env.REACT_APP_BACKEND_API}${plantData?.plantImage}`} alt="Plant in the room" className="rounded-lg" />
            <div>
                <div className="flex justify-between">
                    <h3>Pflanzenprofil</h3>
                    <p>ID:{plantID}</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <p>Lichtverhältnis</p>
                        <p>{plantData?.lightNeed}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Substrat</p>
                        <p>{plantData?.substrate}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Topfgrösse</p>
                        <p>{plantData?.potSize}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Wasserbedarf</p>
                        <p>{plantData?.waterNeed}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}