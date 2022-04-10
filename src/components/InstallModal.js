import styled from "styled-components";

export default function HowToInstallModal({ closeModal }) {
  return (
    <Container>
      <div className="modal___fo_bg" onClick={() => closeModal(false)}></div>
      <div className="modal__sc">
        <div className="modal_container">
          <h2 className="modal_container__title">How To Install the App.</h2>
          <ol>
            <li>Open Chrome Browser on your device.</li>
            <li>
              In Mobile Device:
              <ol>
                <li>See the Icon at the upper right corner of the screen.</li>
                <img src="/install/phone_step-3.png" alt="" />
                <li>Click on It, and a menu pops up.</li>
                <li>
                  Scroll till you see the option <em>Install app</em>.
                </li>
                <img src="/install/phone_step-4.png" alt="" />
                <li>
                  Click on it, and a modal pops up, the hit{" "}
                  <em>
                    <strong>Install</strong>
                  </em>
                </li>
                <img src="/install/phone_step-5.png" alt="" />
                <li>
                  And You should see some icon in the home screen like this.
                </li>
                <img src="/install/phone_step-6.png" alt="" />
                and you are done.
              </ol>
            </li>
            <h3>Or</h3>
            <li>
              {" "}
              In Computer devices:
              <ol>
                <li>In the address bar you should see a icon:</li>
                <img src="/install/pc-install.png" alt="address bar" />
                <li>Click on the icon.</li>
                <li>Click on Install Button.</li>
              </ol>
            </li>
          </ol>
          <div className="modal_container__button">
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
    height: 100%;
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
    height: 100%;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &__title {
      /* font: var(--h2); */
      color: var(--color-gray);
      margin: 0;
      text-align: center;
      padding-bottom: 24px;
    }
    ol,
    ul {
      //   list-style: upper-alpha;
      list-style-position: inside;
      li {
        padding: 10px;
      }
      img {
        max-width: 100%;
      }
    }
    p {
      font: var(--p-m);
      color: var(--gray-deep);
      padding: 12px 0;
      max-width: 934px;
      strong {
        font: 600 var(--p-m);
        color: var(--gray);
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
      justify-content: flex-end;
      padding: 5px;
      &_close {
        padding: 10px 22.5px 12px;
        display: inline;
        font: 600 var(--p-m);
        color: var(--dark-m);
        text-transform: capitalize;
        background: var(--yellow-gradient-bg);
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
          inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #ffc942;
        border-radius: 12px;
        transition: all ease-in-out 100ms;
        cursor: pointer;
        color: var(--dark-m);
        text-decoration: none;
        border: none;
        outline: none;
        &:hover,
        &:focus {
          box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
        }
        @media (max-width: 548px) {
          width: 100%;
        }
      }
    }
  }
`;
