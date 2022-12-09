import { july } from "./country/BD/Dhaka/july";

function ay(a) {
  let ar = [];
  let day = 0;
  for (let i of a) {
    let ob = {
      sehri: i.sehri.split(":"),
      fajar: i.fajar.split(":"),
      sunrise: i.sunrise.split(":"),
      dhuhur: i.dhuhur.split(":"),
      asr: i.asr.split(":"),
      magrib: i.magrib.split(":"),
      isha: i.isha.split(":"),
    };
    let sehri = ob.sehri[1].split(" ");
    let fajar = ob.fajar[1].split(" ");
    let sunrise = ob.sunrise[1].split(" ");
    let dhuhur = ob.dhuhur[1].split(" ");
    let asr = ob.asr[1].split(" ");
    let magrib = ob.magrib[1].split(" ");
    let isha = ob.isha[1].split(" ");
    let object = {
      day: day,
      sehri: [Number(ob.sehri[0]), Number(sehri[0]), sehri[1]],
      fajar: [Number(ob.fajar[0]), Number(fajar[0]), fajar[1]],
      sunrise: [Number(ob.sunrise[0]), Number(sunrise[0]), sunrise[1]],
      dhuhur: [Number(ob.dhuhur[0]), Number(dhuhur[0]), dhuhur[1]],
      asr: [Number(ob.asr[0]), Number(asr[0]), asr[1]],
      magrib: [Number(ob.magrib[0]), Number(magrib[0]), magrib[1]],
      isha: [Number(ob.isha[0]), Number(isha[0]), isha[1]],
    };

    ar.push(object);
    day++;
  }
  console.log(ar);
}

ay(july);
