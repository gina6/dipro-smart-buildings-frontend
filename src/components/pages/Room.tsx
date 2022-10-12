import React from "react";
import BackLink from "../BackLink";

export default function Room() {
    return (
        <div>
            <BackLink linkText="< Räume" route="/floors"></BackLink>
            <h1>Raumübersicht</h1>
        </div>
    )
}