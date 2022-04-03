import React from "react";

export default function Header({ Time, menu, setMenu }) {
  return (
    <header>
      {Time}
      <nav onClick={() => setMenu(!menu)}>
        <div className={`nav_icon ${menu ? "open" : ""}`}></div>
      </nav>
    </header>
  );
}
