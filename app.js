function clock() {
  const fullDate = new Date();
  let hour = fullDate.getHours();
  let mins = fullDate.getMinutes();
  let secs = fullDate.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  document.getElementById("hour").innerHTML = hour + ":";
  document.getElementById("minute").innerHTML = mins + ":";
  document.getElementById("seconds").innerHTML = secs;
}

setInterval(clock, 100);
date();

function date() {
  const weekDays = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const fullDate = new Date();
  let today = fullDate.getDay();
  for (days of weekDays) {
    document.getElementById("day").innerHTML = weekDays[today];
  }
}
