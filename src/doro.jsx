import { useEffect } from "react";

function Timer() {
  let reset;
  let start;
  let time;
  let per;

  let isRunning = false;
  let startingt = 0;
  let timegone = 0;
  let timer;
  let period = 25 * 60 * 1000;

  useEffect(() => {
    reset = document.getElementById("reset");
    start = document.getElementById("start");
    time = document.getElementById("time");
    per = document.getElementById("per");

    const handleInput = () => setTimeout(dd, 1000);
    per.addEventListener("input", handleInput);

    return () => per.removeEventListener("input", handleInput);
  }, []);

  function dd() {
  if (!isRunning) {
    period = Number(per.value) > 0 ? Number(per.value) * 60 * 1000 : period;
    console.log(period);
    setup(period);
  }
}

function starter() {
  if (!isRunning) {
    startingt = Date.now() - timegone;
    isRunning = true;
    timer = setInterval(update, 10);
    start.style.backgroundColor = "red";
    start.textContent = "pause";
  } else {
    timegone = Date.now() - startingt;
    isRunning = false;
    clearInterval(timer);
    start.style.backgroundColor = "green";
    start.textContent = "start";
  }
}
function stopper() {
  timegone = Date.now() - startingt;
  isRunning = false;
  clearInterval(timer);
  start.style.backgroundColor = "green";
  start.textContent = "start";
}

function restarte() {
  start.style.backgroundColor = "green";
  start.textContent = "start";
  document.getElementById("vd").style.display="none";
  clearInterval(timer);
  startingt = Date.now();
  isRunning = false;
  per.value = 25;
  timegone = 0;
  setup(period);
  start.style.display = "inline";
}

function update() {
  let current = Date.now();
  timegone = period + startingt - current;
  if (timegone < 0) {
    restarte();
    document.getElementById("break").textContent = "Your Time is Up !";
    start.style.display = "none";
    document.getElementById("vd").style.display="inline";
    document.getElementById("vd").play();
  }
  setup(timegone);

  //let msec = Math.floor(timegone/10);
  //msec =(msec>=100)? Math.floor(msec%100): msec;
  //msec =(msec<10)? `0${msec}` : msec;
}

function setup(timegone) {
  let hours = Math.floor(timegone / 3600 / 1000);
  hours = hours >= 24 ? Math.floor(hours % 24) : hours;
  hours = hours < 10 ? `0${hours}` : hours;

  let min = Math.floor(timegone / 1000 / 60);
  min = min >= 60 ? Math.floor(min % 60) : min;
  min = min < 10 ? `0${min}` : min;

  let sec = Math.floor(timegone / 1000);
  sec = sec >= 60 ? Math.floor(sec % 60) : sec;
  sec = sec < 10 ? `0${sec}` : sec;
  time.textContent = `${hours}:${min}:${sec}`;
}
function short_break() {
  restarte();
  period = 5 * 60 * 1000;
  setup(period);
  document.getElementById("lab").textContent = "Break";
  per.style.display = "none";
  document.getElementById("lab").style.marginRight = "40px";
  document.getElementById("break").textContent = "Break Time!";
}
function long_break() {
  restarte();
  period = 15 * 60 * 1000;
  setup(period);
  document.getElementById("lab").textContent = "Break";
  per.style.display = "none";
  document.getElementById("lab").style.marginRight = "40px";
  document.getElementById("break").textContent = "Longer Break Time!";
}
function bichodor() {
  restarte();
  period = 25 * 60 * 1000;
  setup(period);
  per.style.display = "inline";
  document.getElementById("lab").textContent = "SetTime";
  document.getElementById("lab").style.marginRight = "0px";
  document.getElementById("break").textContent = "Until The Next Break!";
}
  return (
    <div id="cont">
      <h1>BichoDoro</h1>
      <div id="d">
        <button className="up" id="bichodoro" onClick={bichodor}>
          bichodoro
        </button>
        <button className="up" id="sbreak" onClick={short_break}>
          short break
        </button>
        <button className="up" id="lbreak" onClick={long_break}>
          long break
        </button>

        <div id="settime">
          <label htmlFor="per" id="lab">
            SetTime
          </label>
          <input id="per" type="number" defaultValue={25} />
        </div>

        <video id="vd" src="fin_2.webm"></video>
        <p id="time">00:25:00</p>
        <p id="break">Until The Next Break!</p>
        <button className="down" id="start" onClick={starter}>
          start
        </button>

        <button className="down" id="reset" onClick={restarte}>
          reset
        </button>
      </div>
    </div>
  );
}
export default Timer;
