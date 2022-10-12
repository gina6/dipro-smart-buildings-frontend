import React from "react";
import { useApiGet } from "../../hook/useApiHook";
import { Floors } from "../../hook/dataInterfaces";
import BackLink from "../BackLink";


export default function PlantDetail() {
    const floors = useApiGet<Floors>('http://dipro-h22-dburger.enterpriselab.ch/rooms/openOffice_401');
    if (!floors.loading) console.log(floors);

    return (
        <div>
            <BackLink linkText="Raumübersicht" url={'http://localhost:3000/building'}></BackLink>

        </div>
    )
}