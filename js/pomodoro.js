var setBreak = 5;
var setTimer = 25;
var timer;
var breakTimer;
var displayMin;
var displaySec;
var displayBrkMin;
var displayBrkSec;
var myClock;
var myBreak;
var paused = false;
var pauseSec = null;
var pauseMin = null;
var clockDisplay = document.getElementById('clockDisplay');
var breakBox = document.getElementById('breakBox');
var timeBox = document.getElementById('timeBox');
var infoBox = document.getElementById('infoBox');
var clockFace = document.getElementById('clockFace');

breakBox.value = setBreak;
timeBox.value = setTimer;

var breakMinus = document.getElementById('breakMinus');
breakMinus.addEventListener('click', function() {
    if (setBreak === 1) {
        displayBrkMin = 0;
        clearInterval(myBreak);
        breakTimer = setBreak * 60;
        console.log(displayBrkMin);
        breakBox.value = setBreak;
    } else if (displayBrkMin === 0) {} else {
        setBreak--;
        clearInterval(myBreak);
        breakTimer = setBreak * 60;
        displayBrkMin = Math.floor(breakTimer / 60);
        displayBrkMin--;
        console.log(displayBrkMin);
        breakBox.value = setBreak;
    }
});
var breakPlus = document.getElementById('breakPlus');
breakPlus.addEventListener('click', function() {
    if (setBreak === 30) {} else {
        setBreak++;
        clearInterval(myBreak);
        breakTimer = setBreak * 60;
        displayBrkMin = Math.floor(breakTimer / 60);
        displayBrkMin--;
        console.log(displayBrkMin);
        breakBox.value = setBreak;
    }
});
var timerMinus = document.getElementById('timerMinus');
timerMinus.addEventListener('click', function() {
    if (setTimer === 1) {
        displayMin = 0;
        clearInterval(myClock);
        timer = setTimer * 60;
        timeBox.value = setTimer;
        startTimer();
    } else {
        setTimer--;
        clearInterval(myClock);
        timer = setTimer * 60;
        displayMin = Math.floor(timer / 60);
        displayMin--;
        timeBox.value = setTimer;
        startTimer();
    }
});
var timerPlus = document.getElementById('timerPlus');
timerPlus.addEventListener('click', function() {
    if (setTimer === 59) {} else {
        setTimer++;
        clearInterval(myClock);
        timer = setTimer * 60;
        displayMin = Math.floor(timer / 60);
        displayMin--;
        timeBox.value = setTimer;
        startTimer();
    }
});

clockFace.addEventListener('click', function() {
  if (pauseSec != null && paused == true) {
    clearInterval(myClock);
    timer = pauseSec;
    displayMin = pauseMin;
    pauseSec = null;
    pauseMin = null;
    paused = false;
    startTimer();
  } else if (paused == false) {
    console.log("not paused?");
    clearInterval(myClock);
    pauseMe();
    paused = true;
  }
});

function startTimer() {
    clearInterval(myBreak);
    infoBox.innerHTML = "Countdown";
    myClock = setInterval(function() {
        countDown();
    }, 1000);
}

function startBreak() {
    clearInterval(myClock);
    infoBox.innerHTML = "Break!";
    myBreak = setInterval(function() {
        countBreak();
    }, 1000);
}

function countDown() {
    timer--;
    displaySec = timer % 60;
    if (displayMin === 0 && displaySec === 0) {
        timer = setTimer * 60;
        displayMin = Math.floor(timer / 60);
        displayMin--;
        startBreak();
    } else if (displayMin === 0) {
        clockDisplay.innerHTML = displaySec;
    } else if (displaySec === 0) {
        displayMin--;
    }
    clockDisplay.innerHTML = displayMin + ":" + displaySec;
}

function countBreak() {
    breakTimer--;
    displayBrkSec = breakTimer % 60;
    if (displayBrkMin === 0 && displayBrkSec === 0) {
        breakTimer = setBreak * 60;
        displayBrkMin = Math.floor(breakTimer / 60);
        displayBrkMin--;
        startTimer();
    } else if (displayBrkMin === 0) {
        clockDisplay.innerHTML = displayBrkSec;
    } else if (displayBrkSec === 0) {
        displayBrkMin--;
    }
    clockDisplay.innerHTML = displayBrkMin + ":" + displayBrkSec;
}

function pauseMe() {
  pauseSec = displaySec;
  console.log(pauseSec);
  pauseMin = displayMin;
  console.log(pauseMin);
  clockDisplay.innerHTML = pauseMin + ":" + pauseSec;
}
