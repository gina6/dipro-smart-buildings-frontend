import React from "react";
import { Link } from "react-router-dom";

interface BackLinkProps {
    linkText: String;
    route: string;
}

export default function BackLink({ linkText, route }: BackLinkProps) {

    return (
        <div className="mt-6 mb-8">
            <Link to={route}>{linkText}</Link>
        </div>
    )
}