import React, { useState } from "react";

export default function DuaContainer({ arabic, english, times }) {
  const [Counter, setCounter] = useState(0);

  const audio = new Audio("/error.mp3");

  const handleCount = () => {
    if (Number(times) > Counter) {
      setCounter(Counter + 1);
      navigator.vibrate(50);
    } else {
      audio.play();
      navigator.vibrate(300);
    }
  };
  return (
    <div className="dua_container">
      <div className="dua_container__text">
        <h1 dir="rtl">{arabic}</h1>
        <sub>{english} </sub>
      </div>
      <div className="dua_container__num" role="button" onClick={handleCount}>
        <h2>
          <span>
            {Counter < 10 ? "0" : ""}
            {Counter}
          </span>
          /{times}
        </h2>
      </div>
    </div>
  );
}
