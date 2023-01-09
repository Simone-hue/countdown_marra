// DOM ELEMENTS
const daysElm = document.querySelector('#days');
const hoursElm = document.querySelector('#hours');
const minutesElm = document.querySelector('#minutes');
const secondsElm = document.querySelector('#seconds');
const panelElm = document.querySelector('.panel');

// data di natale
const endDate = new Date("September 23 2023");
const endDateInMs = endDate.getTime();

// tabella in ms
const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

const counterTimer = setInterval(timer, 1000);
function timer() {
    // oggi in ms
    const nowInMs = new Date().getTime();
    
    // quanto manca a natale
    const diff = endDateInMs - nowInMs;

    if (diff > 0) {
        // calcolo i giorni/ore/minuti/secondi che mancano a natale
        daysElm.innerHTML = Math.floor( diff /dayInMs );
        hoursElm.innerHTML = Math.floor( (diff % dayInMs) / hourInMs);
        minutesElm.innerHTML = Math.floor( (diff % hourInMs) / minuteInMs);
        secondsElm.innerHTML = Math.floor( (diff % minuteInMs) / secondInMs);
    } else {
        clearInterval(counterTimer);
        panelElm.innerHTML = "<h1>Andiamo a vedere<br><br>MARRA!!</h1>";
        document.querySelector("#marra").style.display = "block";
        document.querySelector("html").style.backgroundImage = "url('img/marracash.jpg')";
        document.querySelector("html").style.backgroundSize = "100px";
        document.querySelector(".panel").style.background = "blue";
        document.querySelector("h1").style.color = "lightblue";
        document.querySelector(".instrument_1").style.display = "none";
        document.querySelector(".instrument_2").style.display = "none";
        document.querySelector(".instrument_3").style.display = "none";
        document.querySelector(".instrument_4").style.display = "none";
        document.querySelector(".confetti_1").style.display = "block";
        document.querySelector(".confetti_2").style.display = "block";
        document.querySelector(".confetti_3").style.display = "block";
        document.querySelector(".confetti_4").style.display = "block";
    }
}