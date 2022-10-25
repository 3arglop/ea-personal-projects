console.log("Time to countdown with JS");

//CALLING THE DOM
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('minutes');
const secsElement = document.getElementById('seconds');



//TODAYS DATE: 5 OCT 2022

const newYears = "1 Jan 2023";

function countdown() {
    //IN ORDER TO COUNT DOWN TO THE NEW YEARS, IM GOING TO HAVE TO SUBTRACT THE NEW YEARS DATE WITH MY CURRENT DATE. I PASSED A VARIABLE WITH THE NEW YEARS DATE AND FORMATTED USING THE DATE METHOD.
    const newYearsDate = new Date(newYears);
    console.log(newYearsDate);

    const currentDate = new Date();
    console.log(currentDate);

    //FINDING OUT HOW MANY DAYS, HOURS, MINUTES, SECONDS LEFT UNTIL THE NEW YEARS = 88 DAYS, 1O HRS, 48 MINS, ---SECS AS OF RIGHT NOW
    //TIME 2:11 PM
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const minutes = Math.floor(totalSeconds / 60) % 60;

    const seconds = Math.floor(totalSeconds % 60);

    console.log(days, hours, minutes, seconds);

    //GRABBING MY DOM ELEMENTS TO CHANGE THE HARD CODED HTML WITH MY DYNAMIC HTML
    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(minutes);
    secsElement.innerHTML = formatTime(seconds);

}

//ADDING AN EXTRA ZERO WHEN EACH TIME STAMP FALLS BELOW 10 EX: 09, 08, 07... ETC.
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//INITIAL CALL
countdown();

//EVERY SECOND, IT WILL CALL THE COUNTDOWN FUNCTION TO GIVE ME THE MOST UPDATED TIME STAMP
setInterval(countdown, 1000);
