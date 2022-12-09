import styled from "styled-components";

export const HomeContainer = styled.main`
  background-color: var(--bg-sec);
  max-width: 500px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  .body {
    padding-top: 40px;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 358px) {
      grid-template-columns: 1fr;
    }
  }
`;
