const rainbowColors = [
    "red",
    "rgb(255, 165, 0)",
    "#FFFF00",
    "green",
    "blue",
    "#4B0082",
    "rgb(238, 130, 238)"
]

//CALLING THE DOM: HELLO SPAN
const color = document.querySelector('.color');

$('#btn').on('click', function() {

    //MAKING SURE MY BUTTON TARGETS THE BODY
    console.log(document.body);

    //rainbowColors HAS A LENGTH 6

    //0-6 RANDOM NUMBERS TO ITERATE THROUGH THE rainbowColors array
    const randomNumber = Math.floor(Math.random()* rainbowColors.length);
    console.log(randomNumber);

    //CSS WILL HELP US ADD THE COLOR WITH HEX CODE AND DYNAMIC TEXT WILL INDICATE WHAT COLOR THE USER IS SEEING
    document.body.style.backgroundColor = rainbowColors[randomNumber];
    color.textContent = rainbowColors[randomNumber];


});

