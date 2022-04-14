import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function AppInfo({ modalState, closeModal }) {
  const [LinesOfCode, setLinesOfCode] = useState();

  useEffect(() => {
    fetch("https://api.github.com/repos/OpenIslamicApp/prayer-time/languages")
      .then((response) => response.json())
      .then((data) => setLinesOfCode(data.JavaScript + data.HTML + data.CSS))
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  }, []);

  return (
    <Container className={modalState ? "open" : ""}>
      <div className="info_container">
        <div className="info_container__contents">
          <div
            className="info_container__close"
            onClick={() => closeModal(false)}
          >
            +
          </div>
          <h2>Lines of code - {LinesOfCode && <span>{LinesOfCode}</span>}</h2>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.main`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 120;
  transition: all 0.2s ease-in-out;
  transform: translateY(-200%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  &.open {
    transform: translateY(0);
  }
  .info_container {
    position: relative;
    background-color: var(--nav-bg);
    width: min(500px, 100%);
    margin: 0 auto;
    height: 100%;
    padding: 30px 20px;
    &__close {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: calc(20px + 2vmin);
      transform: rotate(45deg);
      cursor: pointer;
    }
    &__contents {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: var(--bg);
      border-radius: 12px;
      padding: 30px 20px;
      text-align: center;
      font-size: calc(8px + 2vmin);
      h2 {
        font-size: calc(8px + 2vmin);
        span {
          font-size: calc(10px + 2vmin);
          color: var(--color-th);
        }
      }
    }
  }
`;
