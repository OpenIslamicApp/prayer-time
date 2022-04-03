import React, { useState } from "react";
import TimeBox from "./components/TimeBox";
import { timeKeyBangla } from "./data/timeKey/bangla";
import { timeKeyEnglish } from "./data/timeKey/english";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import { HomeContainer } from "./styles/style";

function App() {
  const [menu, setMenu] = useState(false);
  const [language, setLanguage] = useState("bangla");
  const LANGU =
    language === "bangla"
      ? timeKeyBangla
      : language === "english"
      ? timeKeyEnglish
      : timeKeyEnglish;
  const [Time, setTime] = useState();
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <HomeContainer>
      <Header Time={Time} menu={menu} setMenu={setMenu} />
      <Menu menu={menu} language={language} setLanguage={setLanguage} />
      <div className="body">
        <TimeBox name={LANGU[0]} time="06:00 AM" />
        <TimeBox name={LANGU[1]} time="06:00 AM" />
        <TimeBox name={LANGU[2]} time="06:00 AM" />
        <TimeBox name={LANGU[3]} time="06:00 AM" />
        <TimeBox name={LANGU[4]} time="06:00 AM" />
        <TimeBox name={LANGU[5]} time="06:00 AM" />
        <TimeBox name={LANGU[6]} time="06:00 AM" />
      </div>
    </HomeContainer>
  );
}

export default App;
