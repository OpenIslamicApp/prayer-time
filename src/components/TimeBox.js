import React from "react";
import styled from "styled-components";

export default function TimeBox({ name, time }) {
  return (
    <Container>
      <div className="prayer_name">{name}</div>
      <div className="prayer_Time">{time}</div>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--bg-sec);
  box-shadow: var(--bg-sec-shadow);
  border-radius: 20px;
  /* aspect-ratio: 1/1; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .prayer {
    &_name {
      font-size: calc(13px + 2vmin);
      font-weight: 600;
      color: var(--color-gray-deep);
    }
    &_Time {
      font-size: calc(17.5px + 2vmin);
      font-weight: 600;
      color: var(--color-gray);
    }
  }
`;
