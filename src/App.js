import React, { useState, useEffect } from "react";

// layout
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

// translation
import { timeKeyBangla } from "./data/timeKey/bangla";
import { timeKeyEnglish } from "./data/timeKey/english";
import { timeKeyArabic } from "./data/timeKey/arabic";

// components
import InstallButton from "./components/InstallButton";
import AppInfo from "./components/AppInfo";
import styled from "styled-components";

export default function App() {
  const [menu, setMenu] = useState(false);
  const [InstallModal, setInstallModal] = useState(false);

  const [language, setLanguage] = useState(
    localStorage.language ? localStorage.language : "english"
  );
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  const LANGU =
    language === "arabic"
      ? timeKeyArabic
      : language === "bangla"
      ? timeKeyBangla
      : language === "english"
      ? timeKeyEnglish
      : timeKeyEnglish;

  const [Country, setCountry] = useState(
    localStorage.country ? localStorage.country : "bd"
  );
  useEffect(() => {
    localStorage.setItem("country", Country);
  }, [Country]);

  const [State, setState] = useState(
    localStorage.state ? localStorage.state : "dhaka"
  );
  useEffect(() => {
    localStorage.setItem("state", State);
  }, [State]);

  const [AppInfoModal, setAppInfoModal] = useState();

  const [deferredPrompt, setDeferredPrompt] = useState();

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
    setInstallModal(true);
  });

  return (
    <>
      <Container>
        <Header menu={menu} setMenu={setMenu} />
        <Menu
          menu={menu}
          language={language}
          setLanguage={setLanguage}
          country={Country}
          setCountry={setCountry}
          state={State}
          setState={setState}
          appInfoModal={setAppInfoModal}
        />
        <Body language={LANGU} country={Country} state={State} />
      </Container>
      <Footer appInfoModal={setAppInfoModal} />
      {InstallModal === true && (
        <InstallButton
          deferredPrompt={deferredPrompt}
          setDeferredPrompt={setDeferredPrompt}
          closeModal={setInstallModal}
        />
      )}
      {AppInfoModal === true && (
        <AppInfo modalState={AppInfoModal} closeModal={setAppInfoModal} />
      )}
    </>
  );
}

const Container = styled.main`
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
