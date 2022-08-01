import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { VscRepoForked, VscStarEmpty } from "react-icons/vsc";

export default function AppInfo({ modalState, closeModal }) {
  const [RepoOverview, setRepoOverview] = useState();
  const [LinesOfCode, setLinesOfCode] = useState();
  const [Contributors, setContributors] = useState();
  const [Versions, setVersions] = useState();

  useEffect(() => {
    fetch("https://api.github.com/repos/OpenIslamicApp/prayer-time")
      .then((response) => response.json())
      .then((data) => setRepoOverview(data))
      .catch((error) => {
        alert(error);
        console.log(error);
      });
    fetch("https://api.github.com/repos/OpenIslamicApp/prayer-time/languages")
      .then((response) => response.json())
      .then((data) => setLinesOfCode(data.JavaScript + data.HTML + data.CSS))
      .catch((error) => {
        alert(error);
        console.log(error);
      });
    fetch(
      "https://api.github.com/repos/OpenIslamicApp/prayer-time/contributors"
    )
      .then((response) => response.json())
      .then((data) => setContributors(data))
      .catch((error) => {
        alert(error);
        console.log(error);
      });
    fetch("https://api.github.com/repos/OpenIslamicApp/prayer-time/releases")
      .then((response) => response.json())
      .then((data) => setVersions(data))
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
          <h2>
            Created @{" "}
            {RepoOverview && (
              <span>{new Date(RepoOverview.created_at).toUTCString()}</span>
            )}
          </h2>
          <h2>
            Last Updated @{" "}
            {RepoOverview && (
              <span>{new Date(RepoOverview.pushed_at).toUTCString()}</span>
            )}
          </h2>
          <h2>
            License: {RepoOverview && <span>{RepoOverview.license.name}</span>}
          </h2>
          <h2>Releases: {Versions && <span>{Versions.length}</span>}</h2>
          <h2>
            Current Version: {Versions && <span>{Versions[0].name}</span>}
          </h2>
          <h2>Lines of code - {LinesOfCode && <span>{LinesOfCode}</span>}</h2>
          <h2>Contributors:</h2>
          {Contributors && (
            <div className="info_container__contributors">
              {React.Children.toArray(
                Contributors.map((data) => (
                  <div className="info_container__contributors_contributor">
                    <img
                      src={data.avatar_url}
                      alt={data.login}
                      title={`${data.login} contributions ${data.contributions}`}
                    />
                  </div>
                ))
              )}
            </div>
          )}
          <h2>
            <VscRepoForked /> <span>{RepoOverview && RepoOverview.forks}</span>{" "}
            <VscStarEmpty />{" "}
            <span>{RepoOverview && RepoOverview.stargazers_count}</span>
          </h2>
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
        font-size: calc(6px + 2vmin);
        padding-top: 16px;
        span {
          font-size: calc(5px + 2vmin);
          color: var(--color-th);
        }
      }
    }
    &__contributors {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 16px;
      gap: 16px;
      &_contributor {
        width: 50px;
        img {
          width: 100%;
          height: auto;
          border-radius: 50%;
        }
      }
    }
  }
`;
