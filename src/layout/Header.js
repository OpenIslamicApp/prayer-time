import React, { useState } from "react";
import styled from "styled-components";

export default function Header({ menu, setMenu }) {
  const [Time, setTime] = useState();
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <Container>
      {Time}
      <p>
        Today: {new Date().getDate()}/{new Date().getMonth() + 1}/
        {new Date().getFullYear()}
      </p>
      <nav onClick={() => setMenu(!menu)}>
        <div className={`nav_icon ${menu ? "open" : ""}`}></div>
      </nav>
    </Container>
  );
}

const Container = styled.header`
  background-color: var(--bg-sec);
  box-shadow: var(--bg-sec-shadow);
  border-radius: 20px;
  padding: 20px;
  font-size: calc(20px + 1vmin);
  font-weight: 900;
  color: var(--color-th);
  text-align: center;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  /* position: relative; */
  & > p {
    font-size: calc(9.5px + 1vmin);
  }
  nav {
    position: absolute;
    top: 0;
    right: 0;
    /* background-color: var(--bg-sec); */
    /* box-shadow: var(--bg-sec-shadow); */
    border-radius: 50%;
    height: 100%;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
    .nav_icon {
      background-color: var(--color-gray);
      height: 2px;
      width: 25px;
      position: relative;
      transition: all 0.2s ease-in-out;
      &::before,
      &::after {
        content: "";
        position: absolute;
        background-color: var(--color-gray);
        height: 2px;
        width: 25px;
        left: 0;
        opacity: 1;
      }
      &::before {
        top: -10px;
      }
      &::after {
        bottom: -10px;
      }
      &.open {
        height: 0;
        &::before {
          top: -0px;
          transform: rotate(45deg);
        }
        &::after {
          top: -0px;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;
