import React from "react";
import BodyDhaka from "./Dhaka";

export default function BodyBD({ language, state }) {
  return <>{state === "dhaka" ? <BodyDhaka language={language} /> : ""}</>;
}
