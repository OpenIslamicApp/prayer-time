import React, { useState } from "react";
import TimeBox from "../../../../components/TimeBox";
import { april } from "./april";
import { march } from "./march";
import { may } from "./may";
import { october } from "./october";
import { september } from "./september";

export default function BodyDhaka({ language }) {
  const [MONTH, setMONTH] = useState(0);
  const TIME =
    MONTH && MONTH === 0
      ? []
      : MONTH && MONTH === 1
      ? []
      : MONTH && MONTH === 2
      ? march
      : MONTH && MONTH === 3
      ? april
      : MONTH && MONTH === 4
      ? may
      : MONTH && MONTH === 5
      ? []
      : MONTH && MONTH === 6
      ? []
      : MONTH && MONTH === 7
      ? []
      : MONTH && MONTH === 8
      ? september
      : MONTH && MONTH === 9
      ? october
      : MONTH && MONTH === 10
      ? []
      : MONTH && MONTH === 11
      ? []
      : [];

  const [DAY, setDAY] = useState();

  setInterval(() => {
    setMONTH(new Date().getMonth());
    setDAY(new Date().getDate());
  }, 1000);

  return (
    <div className="body">
      <TimeBox
        name={language[0]}
        time={
          TIME !== "" &&
          TIME !== undefined &&
          TIME !== null &&
          DAY &&
          TIME[DAY].sehri
            ? TIME[DAY].sehri
            : "00:00"
        }
      />
      <TimeBox
        name={language[1]}
        time={
          TIME !== "" &&
          TIME !== undefined &&
          TIME !== null &&
          DAY &&
          TIME[DAY].fajar
            ? TIME[DAY].fajar
            : "00:00"
        }
      />
      <TimeBox
        name={language[2]}
        time={
          TIME !== "" &&
          TIME !== undefined &&
          TIME !== null &&
          DAY &&
          TIME[DAY].sunrise
            ? TIME[DAY].sunrise
            : "00:00"
        }
      />
      <TimeBox
        name={language[3]}
        time={
          TIME !== "" &&
          TIME !== undefined &&
          TIME !== null &&
          DAY &&
          TIME[DAY].dhuhur
            ? TIME[DAY].dhuhur
            : "00:00"
        }
      />
      <TimeBox
        name={language[4]}
        time={
          TIME !== "" &&
          TIME !== undefined &&
          TIME !== null &&
          DAY &&
          TIME[DAY].asr
            ? TIME[DAY].asr
            : "00:00"
        }
      />
      <TimeBox
        name={language[5]}
        time={
          TIME !== "" &&
          TIME !== undefined &&
          TIME !== null &&
          DAY &&
          TIME[DAY].magrib
            ? TIME[DAY].magrib
            : "00:00"
        }
      />
      <TimeBox
        name={language[6]}
        time={
          TIME !== "" &&
          TIME !== undefined &&
          TIME !== null &&
          DAY &&
          TIME[DAY].isha
            ? TIME[DAY].isha
            : "00:00"
        }
      />
    </div>
  );
}
