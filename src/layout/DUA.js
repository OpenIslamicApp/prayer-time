import React from "react";
import styled from "styled-components";
import DuaContainer from "../components/DuaContainer";

import regularAfterPrayer from "../data/dua/afterEvery.json";

export default function DUA() {
  return (
    <Container>
      <h1 className="dua_title">Regular After Prayer:</h1>
      {React.Children.toArray(
        regularAfterPrayer.map((dua) => <DuaContainer {...dua} />)
      )}
    </Container>
  );
}

const Container = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  & > .dua_title {
    margin: 8px 0;
  }
  .dua_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: dense;
    gap: 12px;
    &__text {
      grid-column: 1 / span 3;
      background-color: var(--color-th);
      color: var(--bg-sec);
      box-shadow: var(--bg-sec-shadow);
      border-radius: 20px;
      padding: 20px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;
      & > h1 {
        text-align: center;
        font-size: calc(30px + 2vmin);
      }
      & > h3,
      & > sub {
        font-size: calc(6px + 2vmin);
        font-weight: 600;
      }
    }
    &__num {
      grid-column: 4 / span 1;
      background-color: var(--bg-sec);
      box-shadow: var(--bg-sec-shadow);
      border-radius: 20px;
      padding: 20px;
      display: flex;
      cursor: pointer;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      & > * {
        & > span {
          font-size: calc(24px + 2vmin);
          color: var(--color-th);
        }
        font-size: calc(10px + 2vmin);
        text-align: center;
        font-weight: 800;
        margin: auto;
      }
    }
    &:nth-child(even) {
      .dua_container__text {
        grid-column: 2 / span 3;
      }
      .dua_container__num {
        grid-column: 1 / span 1;
      }
    }
  }
`;
