console.log("Hello from Hex.js");

const hexColorCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//THE HEX ARRAY HAS A LENGTH OF 15

//CALLING THE DOM
const color = document.querySelector('.color');


$('#btn').on('click', function() {

    //INITIALIZING MY HEX CODE
    let hexColor = '#';

    //A HEX CODE CONSISTS OF 6 CHARACTERS PLUS A #. BY CREATING A LOOP, I CAN ITERATE THROUGH THE hexColorCode ONLY SIX TIMES. CALLING BACK THE hexColor VARIABLE TO COMPLETE THE CODE
    for(let i = 0; i < 6; i++) {
        hexColor += hexColorCode[getRandomNum()];
    }

    //ADDING MY DYNAMIC CSS AND HTML
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

//CREATING A RANDOM NUMBER BASED ON THE LENGTH OF MY hexColorCode ARRAY TO USE WITH MY LOOP TO CREATE THAT UNIQUE CODE EACH TIME THE BUTTON IS CLICKED
function getRandomNum() {
    return Math.floor(Math.random() * hexColorCode.length);
}
