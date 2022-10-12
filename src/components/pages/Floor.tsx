import React from "react";
import BackLink from "../BackLink";

export default function Floor() {
    return (
        <div>
            <BackLink linkText="< Stockwerk" route="/floors"></BackLink>
            <h1>Räume</h1>
        </div>
    )
}