import React from "react";
import styled from "styled-components";

export default function Menu({ menu, language, setLanguage }) {
  return (
    <Container className={menu ? "open" : ""}>
      <div className="setting_container">
        <label htmlFor="language">Select Language:</label>
        <select
          name="language"
          id=""
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="bangla">Bangla</option>
          <option value="english">English</option>
        </select>
      </div>
    </Container>
  );
}
const Container = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: var(--nav-bg);
  transition: all 0.2s ease-in-out;
  transform: translateY(-200%);
  padding: 20px;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.open {
    transform: translateY(0);
  }
  .setting_container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: calc(16px + 2vmin);
    select {
      font-size: calc(13px + 2vmin);
      color: var(--color-gray);
      background-color: var(--bg-sec);
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      outline: none;
    }
  }
`;
