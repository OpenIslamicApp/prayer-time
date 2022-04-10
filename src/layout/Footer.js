import React from "react";
import styled from "styled-components";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Footer() {
  return (
    <Container>
      By <a href="https://github.com/OpenIslamicApp/">OpenIslamicApp</a>,{" "}
      <a href="https://ah-jim.com">Akhlak Hossain Jim</a>, and{" "}
      <a href="https://github.com/OpenIslamicApp/prayer-time/graphs/contributors">
        contributors.
      </a>
      <br />
      Report a{" "}
      <a href="https://github.com/OpenIslamicApp/prayer-time/issues">
        problem
      </a>{" "}
      or <a href="https://github.com/OpenIslamicApp/prayer-time/">contribute</a>
      .{" "}
      <span>
        <BsFillInfoCircleFill />
      </span>
    </Container>
  );
}

const Container = styled.footer`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  color: var(--color-gray);
  background-color: var(--bg-sec);
  font-size: calc(2px + 2vmin);
  a,
  span {
    color: var(--color-th);
    text-decoration: none;
    cursor: pointer;
  }
`;
