import React from "react";
import BackLink from "../BackLink";

export default function Room() {
    return (
        <div>
            <BackLink linkText="< Räume" route="/floor"></BackLink>
            <h1>Raumübersicht</h1>
        </div>
    )
}