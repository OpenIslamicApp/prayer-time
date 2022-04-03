import styled from "styled-components";

export const HomeContainer = styled.main`
  background-color: var(--bg);
  max-width: 500px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  header {
    background-color: var(--bg-sec);
    box-shadow: var(--bg-sec-shadow);
    border-radius: 20px;
    padding: 20px;
    font-size: calc(20px + 1vmin);
    font-weight: 900;
    color: var(--color-th);
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 100;
    position: relative;
    nav {
      position: absolute;
      top: 0;
      right: 0;
      background-color: var(--bg-sec);
      box-shadow: var(--bg-sec-shadow);
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
  }
  .body {
    padding-top: 40px;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
