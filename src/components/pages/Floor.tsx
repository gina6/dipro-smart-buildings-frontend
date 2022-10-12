import React from "react";
import BackLink from "../BackLink";

export default function Floor() {
    return (
        <div>
            <BackLink linkText="< Stockwerk" route="/building"></BackLink>
            <h1>Räume</h1>
        </div>
    )
}