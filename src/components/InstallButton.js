import styled from "styled-components";

export default function InstallButton({
  deferredPrompt,
  setDeferredPrompt,
  closeModal,
}) {
  const handleClick = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
        closeModal(false);
      }
      closeModal(false);
    });
    setDeferredPrompt();
  };

  return (
    <Container>
      <div className="modal___fo_bg" onClick={() => closeModal(false)}></div>
      <div className="modal__sc">
        <div className="modal_container">
          <h2 className="modal_container__title">
            Install <em>Dua </em> App to see time of prayer even when you are
            offline.
          </h2>

          <div className="modal_container__button">
            <button
              className="modal_container__button_close"
              onClick={handleClick}
            >
              Install
            </button>
            <button
              className="modal_container__button_close"
              onClick={() => closeModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 500;
  background-color: hsla(0, 0%, 6%, 0.5);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  .modal___fo_bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .modal__sc {
    /* height: 100%; */
    width: min(460px, 100%);
    position: relative;
    z-index: 3;
    background-color: var(--bg);
    padding: 40px;
    border-radius: 20px;
    @media (max-width: 548px) {
      padding: 20px;
    }
    &_close {
      font: var(--h2);
      color: var(--yellow);
      position: absolute;
      top: 20px;
      right: 30px;
      @media (max-width: 548px) {
        top: 10px;
        right: 20px;
      }
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
  .modal_container {
    z-index: 7;
    /* height: 100%; */
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &__title {
      color: var(--color-gray);
      margin: 0;
      text-align: center;
      padding-bottom: 24px;
    }
    p {
      color: var(--color-gray);
      padding: 12px 0;
      max-width: 934px;
      strong {
        color: var(--color-gray);
      }
      a {
        color: var(--yellow);
        text-decoration: none;
      }
      svg {
        cursor: pointer;
      }
    }
    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 10px;
      gap: 24px;
      &_close {
        padding: 10px 32px 12px;
        display: inline;
        color: var(--bg);
        font-size: calc(6px + 2vmin);
        font-weight: 500;
        text-transform: capitalize;
        background: var(--color-th);
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
          inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #ffc942;
        border-radius: 12px;
        transition: all ease-in-out 100ms;
        cursor: pointer;
        text-decoration: none;
        border: none;
        outline: none;
        &:hover,
        &:focus {
          box-shadow: 0px 0px 10px 1px rgba(255, 201, 66, 0.4);
        }
        @media (max-width: 548px) {
          width: 100%;
        }
      }
    }
  }
`;
