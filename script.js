const sport = ["&#127939", "&#127940", "&#127947", "&#127943", "&#127948"];

function numberRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//init
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");

slot1.innerHTML = sport[numberRandom(0, sport.length - 1)];
slot2.innerHTML = sport[numberRandom(0, sport.length - 1)];
slot3.innerHTML = sport[numberRandom(0, sport.length - 1)];

document.getElementById("button-slot").addEventListener("click", gameStart);

function gameStart() {
  let result = document.getElementById("result");
  result.innerHTML = "Your result will be visible here!";
  const numberTurns = numberRandom(5, 10);
  let t1 = 0,
    t2 = 0,
    t3 = 0;
  const interval1 = setInterval(function () {
    slot1.innerHTML = sport[numberRandom(0, sport.length - 1)];
    t1++;
    if (t1 === numberTurns) {
      clearInterval(interval1);
      return;
    }
  }, 100);

  const interval2 = setInterval(function () {
    slot2.innerHTML = sport[numberRandom(0, sport.length - 1)];
    t2++;
    if (t2 === numberTurns) {
      clearInterval(interval2);
      return;
    }
  }, 100);

  const interval3 = setInterval(function () {
    slot3.innerHTML = sport[numberRandom(0, sport.length - 1)];
    t3++;
    if (t3 === numberTurns) {
      clearInterval(interval3);
      gameResult();
      return;
    }
  }, 100);

  function gameResult() {
    if (
      slot1.innerHTML === slot2.innerHTML &&
      slot2.innerHTML === slot3.innerHTML
    ) {
      result.innerHTML = "You Won";
    } else {
      result.innerHTML = "You Lost";
    }
  }
}