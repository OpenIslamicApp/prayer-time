import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DuaContainer from "../components/DuaContainer";

import regularAfterPrayer from "../data/dua/afterEvery.json";
import FridayPrayer from "../data/dua/friday.json";
import fajarMagribPrayer from "../data/dua/fajarMagrib.json";
import allTime from "../data/dua/anytime.json";

export default function DUA() {
  const [DAY, setDAY] = useState();
  const [Hour, setHour] = useState();

  useEffect(() => {
    let day = new Date().getDay();
    let hour = new Date().getHours();
    setDAY(day);
    setHour(hour);
  }, []);

  return (
    <Container>
      {DAY && DAY === 5 && (
        <>
          <h1>Friday Special:</h1>
          {React.Children.toArray(
            FridayPrayer.map((dua) => <DuaContainer {...dua} />)
          )}
        </>
      )}
      {Hour && ((Hour >= 4 && Hour <= 6) || (Hour >= 17 && Hour <= 18)) ? (
        <>
          <h1>
            After Farz Prayer of{" "}
            {Hour >= 4 && Hour <= 6
              ? "Fajar"
              : Hour >= 17 && Hour <= 18 && "Maghrib"}
            :
          </h1>
          {React.Children.toArray(
            fajarMagribPrayer.map((dua) => <DuaContainer {...dua} />)
          )}
        </>
      ) : (
        false
      )}
      <h1 className="dua_title">Regular After Farz Prayer:</h1>
      {React.Children.toArray(
        regularAfterPrayer.map((dua) => <DuaContainer {...dua} />)
      )}
      <h1 className="dua_title">All time:</h1>
      {React.Children.toArray(allTime.map((dua) => <DuaContainer {...dua} />))}
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
