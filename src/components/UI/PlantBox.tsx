import React from "react";
import { Link } from "react-router-dom"

interface plantBoxProps {
    linkTo: string;
    plantLabel: string;
}

export default function PlantBox({ linkTo, plantLabel }: plantBoxProps) {
    return (

        <Link to={linkTo} className="flex flex-col items-center bg-zinc-800 text-white p-5 m-1.5 rounded-full">
            <p>{plantLabel}</p>
            <p>Details &gt;</p>
        </Link>
    )
}