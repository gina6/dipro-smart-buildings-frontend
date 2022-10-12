import React from "react";

interface BackLinkProps {
    linkText: String;
    url: string;
}

export default function BackLink({ linkText, url }: BackLinkProps) {

    return (
        <div>
            <a href={url}>{linkText}</a>
        </div>
    )
}