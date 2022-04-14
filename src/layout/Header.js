import React, { useState } from "react";

export default function Header({ menu, setMenu }) {
  const [Time, setTime] = useState();
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <header>
      {Time}
      <nav onClick={() => setMenu(!menu)}>
        <div className={`nav_icon ${menu ? "open" : ""}`}></div>
      </nav>
    </header>
  );
}
