import { stringify } from "querystring";


export const timestampToObj = (timestamp) => {

  let date = timestamp.slice(0, 10).split("-");
  let time = timestamp.slice(11, 16).split(":");

  let sig;
  if (Number(time[0] > 12)) {
    sig = "PM";
    time[0] = (Number(time[0]) - 12).toString();
  } else sig = "AM"


  return {
    year: date[0],
    month: date[1],
    day: date[2],
    hour: time[0],
    min: time[1],
    sig: sig,
    time: `${time[0]}:${time[1]} ${sig}`
  }

}