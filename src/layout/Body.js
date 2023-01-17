import React from "react";
import DUA from "./DUA";
import BodyBD from "../data/country/BD/BodyBD";

export default function Body({ language, country, state }) {
  return (
    <>
      {country === "bd" ? <BodyBD language={language} state={state} /> : ""}
      <h1 style={{ margin: "48px 0" }}>Dua's:</h1>
      <DUA />
    </>
  );
}
