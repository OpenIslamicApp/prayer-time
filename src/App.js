import React, { useState, useEffect } from "react";

// style
import { HomeContainer } from "./styles/style";

// layout
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

// translation
import { timeKeyBangla } from "./data/timeKey/bangla";
import { timeKeyEnglish } from "./data/timeKey/english";

// components
import InstallButton from "./components/InstallButton";
import HowToInstallModal from "./components/InstallModal";

function App() {
  const [menu, setMenu] = useState(false);
  const [InstallModal, setInstallModal] = useState(false);

  const [language, setLanguage] = useState(
    localStorage.language ? localStorage.language : "bangla"
  );
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  const LANGU =
    language === "bangla"
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

  const [Time, setTime] = useState();
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  const [deferredPrompt, setDeferredPrompt] = useState();

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
    setInstallModal(true);
  });

  return (
    <>
      <HomeContainer>
        <Header Time={Time} menu={menu} setMenu={setMenu} />
        <Menu
          menu={menu}
          language={language}
          setLanguage={setLanguage}
          country={Country}
          setCountry={setCountry}
          state={State}
          setState={setState}
        />
        <Body language={LANGU} country={Country} state={State} />
      </HomeContainer>
      <Footer />
      {InstallModal === true && (
        <InstallButton
          deferredPrompt={deferredPrompt}
          setDeferredPrompt={setDeferredPrompt}
          closeModal={setInstallModal}
        />
      )}
    </>
  );
}

export default App;
