import React, { useState } from "react";
import TimeBox from "../../../../components/TimeBox";
import { january } from "./january";
import { february } from "./february";
import { march } from "./march";
import { april } from "./april";
import { may } from "./may";
import { june } from "./june";
import { july } from "./july";
import { august } from "./august";
import { september } from "./september";
import { october } from "./october";
import { november } from "./november";
import { december } from "./december";

export default function BodyDhaka({ language }) {
  const [MONTH, setMONTH] = useState(1);
  const months = {
    1: january,
    2: february,
    3: march,
    4: april,
    5: may,
    6: june,
    7: july,
    8: august,
    9: september,
    10: october,
    11: november,
    12: december,
  };
  const TIME = MONTH && months[MONTH];

  const [DAY, setDAY] = useState();

  setInterval(() => {
    let m = new Date().getMonth();
    setMONTH(m + 1);
    setDAY(new Date().getDate());
  }, 1000);

  const timeValidator = (tPar) => {
    return TIME !== "" &&
      TIME !== undefined &&
      TIME !== null &&
      DAY &&
      TIME[DAY][tPar] &&
      Array.isArray(TIME[DAY][tPar]) &&
      TIME[DAY][tPar].length === 3
      ? `${
          TIME[DAY][tPar][0] < 10
            ? `0${TIME[DAY][tPar][0]}`
            : TIME[DAY][tPar][0]
        }:${
          TIME[DAY][tPar][1] < 10
            ? `0${TIME[DAY][tPar][1]}`
            : TIME[DAY][tPar][1]
        } ${TIME[DAY][tPar][2]}`
      : "00:00";
  };

  return (
    <div className="body">
      <TimeBox name={language[0]} time={timeValidator("sehri")} />
      <TimeBox name={language[1]} time={timeValidator("fajar")} />
      <TimeBox name={language[2]} time={timeValidator("sunrise")} />
      <TimeBox name={language[3]} time={timeValidator("dhuhur")} />
      <TimeBox name={language[4]} time={timeValidator("asr")} />
      <TimeBox name={language[5]} time={timeValidator("magrib")} />
      <TimeBox name={language[6]} time={timeValidator("isha")} />
    </div>
  );
}
