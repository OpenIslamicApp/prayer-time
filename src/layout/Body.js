import React from "react";
import BodyBD from "../data/country/BD/BodyBD";

export default function Body({ language, country, state }) {
  return (
    <>{country === "bd" ? <BodyBD language={language} state={state} /> : ""}</>
  );
}
