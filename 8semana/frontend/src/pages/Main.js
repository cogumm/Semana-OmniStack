import React from "react";

export default function Main({ match }) {
    // match.params.id
    return <h1>{match.params.id}</h1>;
}
