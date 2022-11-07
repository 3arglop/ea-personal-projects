"use strict";

console.log("Hello from JavaScript 101 js!");


//EXAMPLE #1

let tilesInput = document.getElementById('tilesInput');
let cost = document.getElementById('cost');


function giveTilesCost(e) {
    e.preventDefault();
    let price = 5;
    let numTiles = tilesInput.value;
    let total = price * numTiles;
    cost.textContent = `$5 PER TILE! TOTAL IS: $${total}`
}

tilesInput.addEventListener('keyup', giveTilesCost);


//EXAMPLE 2
const repeat = (str, numTimes) => {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat("I love you!", 5);
repeat("$", 3);
repeat("AHHHHHH!", 10);

//
function isSnakeEyes(num1, num2) {
    if(num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

isSnakeEyes(1,1);
isSnakeEyes(1,5);
isSnakeEyes(4,5);


//
const add = (one, two) => {
    if(typeof one !== 'number' || typeof two !== 'number') {
        return false;
    }
    return one + two;
}

console.log(add(2, 7));
console.log(add(10, 24));
console.log(add(35, 88));

//
function multiply(x, y) {
    return x * y;
}

console.log(multiply(2, 8));
console.log(multiply(190, 1));
console.log(multiply(100, 5));

//
function isShortsWeather(temperature) {
    if(temperature >= 75) {
        return true;
    } else {
        return false;
    }
}

console.log(isShortsWeather(80));
console.log(isShortsWeather(48));
console.log(isShortsWeather(75));

//
function lastElement(arr) {
    if(arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}

console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));

//
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1, string.length);
}

console.log(capitalize('eggplant'));
console.log(capitalize('pamplemousse'));
console.log(capitalize('squid'));

//
function sumArray(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([50, 50, 1]));


//TODO: Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

//TODO: Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(daysOfWeek);
console.table(daysOfWeek);
console.log(daysOfWeek[0]);
console.log(daysOfWeek[4]);


function returnDay(arr, num) {
    if(num > 1 || num < 7) {
        return null;
    }
    return arr[num + 1];
}

console.log(returnDay(daysOfWeek, 8));
console.log(returnDay(daysOfWeek, 1));
console.log(returnDay(daysOfWeek, 4));

//
let totalEggs = 0;
function collectEggs() {
    totalEggs = Math.floor(Math.random() * 30);
}

console.log(totalEggs);
collectEggs();
console.log(totalEggs);

let num = "12.99";
console.log(num);
console.log(+num);

//
function bankRobbery() {
    const heroes = ['Spiderman', 'Batman', 'Wolverine', 'Iron-Man'];
    function cryForHelp() {
       function inner() {
           for(let hero of heroes) {
               console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
           }
       }
       inner();
    }
    cryForHelp();
}
bankRobbery();

//STORING A FUNCTION IN A VARIABLE
const less = function(a, b) {
    return b - a;
}

console.log(less(10, 100));
console.log(less(20, 800));
console.log(less(300, 750));

const PI = function() {
    return Math.PI;
}

const PItwo = Math.PI;

console.log(PI());
console.log(PItwo);

//
const square = function(num) {
    return Math.pow(num, 2);
}

console.log(square(20));
console.log(square(6));
console.log(square(200));

//
const callTwice = (func) => {
    func();
    func();
}

const laugh = function() {
    console.log("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA");
}

//*********************ORIGINAL**********************//

// function callTwice(func) {
//     func();
//     func();
// }
//
// function laugh() {
//     console.log("HAHAHAHAHAHAHAHAHAHAHAHA!");
// }

console.log(callTwice(laugh));
// console.log(callTwice(laugh()));

const rollDice = function() {
    const roll = Math.floor(Math.random() * 10) + 1;
    console.log(roll);
}

const callTwentyTimes = (f) => {
    for(let i = 0; i < 20; i++) {
        f();
        // console.log(f());
    }
}


console.log(callTwentyTimes(rollDice));

//
function mysteryMessage() {
    const random = Math.floor(Math.random() * 10) + 1;
    if(random > 5) {
        return function () {
            console.log("YAY! YOU ARE A WINNER!");
            console.log("HERE'S 1 MILLION DOLLARS");
        }
    } else {
        return function() {
            alert("WARNING! WARNING! WARNING!");
            alert("YOU ARE A LOSER :P");
        }
    }
}

const mysteryFunc = mysteryMessage();

console.log(mysteryFunc());

//
function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const isToddler = makeBetweenFunc(0, 5);
console.log(isToddler);

console.log(isToddler(2));
console.log(isToddler(20));

const isChild = makeBetweenFunc(5, 12);

console.log(isChild(9));
console.log(isChild(2));

const isTeen = makeBetweenFunc(13, 19);

console.log(isTeen(16));
console.log(isTeen(76));

const isAdult = makeBetweenFunc(20, 64);

console.log(isAdult(36));
console.log(isAdult(88));

const isSenior = makeBetweenFunc(65, 110);

console.log(isSenior(25));
console.log(isSenior(95));

//
const greetings = {
    hello : function(name) {
        console.log(`Hello, ${name}!`);
    },
    bye : function(name) {
        console.log(`Adios, farewell ${name}.`);
    },
    love : function(name) {
        console.log(`I LOVE YOU, ${name.toUpperCase()}!!!!! <3`);
    },
    hate : function(name) {
        console.log(`I HATE YOU SO MUCH, ${name.toUpperCase()}! AHHHHHHH!`);
    },
    food(name) {
        console.log(`Want to get food, ${name}? I'll spot yah :)`);
    },
    marry(name) {
        console.log(`Will you marry me, ${name}?`);
    }
}

console.log(greetings);
greetings.love("kyle");
greetings.hello("Batman");
greetings.bye("Harry Styles");
greetings.food("Jon Snow");
greetings.marry("Spiderman");

//
const squareMath = {
    area(num) {
        console.log(Math.pow(num, 2));
    },
    perimeter(num) {
        console.log(num * 4);
    }
}

squareMath.area(10);
squareMath.perimeter(10);

//
const cat = {
    name: "Canton",
    color: "Brown",
    breed : "Tabby",
    meow() {
        console.log("THIS IS:", this);
        console.log(`${this.name} says MEOW MEOW MOEW`);
    }
}

const meowFunc = cat.meow;
// console.log(meowFunc);

// meowFunc();
// cat.meow();

//
const hen = {
    name : 'Helen',
    eggCount : 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";

    }
}

console.log(hen.name); // "Helen"
console.log(hen.eggCount); // 0
console.log(hen.layAnEgg()); // "EGG"
console.log(hen.layAnEgg()); // "EGG"
console.log(hen.eggCount); // 2

//
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(5));
    } catch (e) {
        console.log(e);
        console.log("Pass a string next time!");
    }
}

yell(63547635487);
yell("ILY");
yell("😜");

//
const emojis = ["🤣", "🥰", "😠", "🥸", "😭", "😕", "🤩", "😡"];

emojis.forEach(function(i) {
    console.log(`${i} is an emoji!`);
});

//ANOTHER WAY OF CREATING A FOREACH LOOP WITHOUT HAVING TO ASSIGNED IT INTO A FUNCTION. HOWEVER, IT'S NOT ALWAYS THE CASE OF USING THIS METHOD COS IT WILL NOT ALWAYS WORK!!! GET USED TO USING FOR EACH!!!
for(let element of emojis) {
    console.log(`${element} is MY MOOD!!!!`);
}

const nums = [100, 76, 675276, 8, 886643, 54232794, 100, 3, 99, 85];

nums.forEach(function(x) {
    if(x % 2 === 0) {
        console.log(`${x} is an EVEN number`);
    }
    let multiply = x * 2;
    console.log(`${x} * 2 = ${multiply}`);
})

//
const  composers = [
    {
        name: "Mozart",
        score: 99
    },
    {
        name: "Beethoven",
        score: 100
    },
    {
        name: "Chopin",
        score: 89
    },
    {
        name: "Bach",
        score: 90
    },
    {
        name: "Wagner",
        score: 76
    }
]

composers.forEach(function(composer) {
    console.log(`${composer.name} -- ${composer.score}/100`);
});

//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubles = numbers.map(function(num) {
    return num * 2; //CONSOLE.LOG WILL RETURN UNDEFINED
});

console.log(numbers);
console.log(doubles);

const textSlang = ["lol", "lmao", "rolf", "hahah", "ttyl", "brb", "asap", "iykyk"];

const textSlangYelling = textSlang.map(function(text) {
    return text.toUpperCase();
});

console.log(textSlang);
console.log(textSlangYelling);

//
const heroes = [
    {
        name: "Captain America",
        power: "Soldier Serum",
        gender: "Male",
        age: 35
    },
    {
        name: "Iron-Man",
        power: "Rich",
        gender: "Male",
        age: 40
    },
    {
        name: "Hulk",
        power: "Radiation",
        gender: "Male",
        age: 33
    },
    {
        name: "Black Widow",
        power: "Assassin",
        gender: "Female",
        age: 29
    },
    {
        name: "Captain Marvel",
        power: "Infinity Stone",
        gender: "Female",
        age: 32
    },
    {
        name: "Mr. Fantastic",
        power: "Elasticity",
        gender: "Male",
        age: 45
    }
]
console.table(heroes);

const heroNames = heroes.map(function(name) {
   return name.name;
});

console.table(heroNames);

const heroPowers = heroes.map(function(power) {
    return power.power;
});

console.table(heroPowers);

const heroGenAndAge = heroes.map(function(hero) {
    const genderAndAge = {
        gender: `${hero.gender}`,
        age: `${hero.age}`
    }
    return genderAndAge;
})

console.log(heroGenAndAge);
console.table(heroGenAndAge);

//
const fullNames = [
    {first: 'Albus', last: 'Dumbledore'},
    {first: 'Harry', last: 'Potter'},
    {first: 'Hermione', last: 'Granger'},
    {first: 'Ron', last: 'Weasley'},
    {first: 'Rubeus', last: 'Hagrid'},
    {first: 'Minerva', last: 'McGonagall'},
    {first: 'Severus', last: 'Snape'}
];

console.log(fullNames);
console.table(fullNames);

const firstNames = fullNames.map(function(name) {
    return name.first;
});

console.log(firstNames);
console.table(firstNames);

//

// ARROW FUNCTIONS //

// ARROW FUNCTION WITH TWO PARAMETERS
const addMultiply = (x, y) => {
    console.log((x + 2) * y);
}
addMultiply(10, 30);

// ARROW FUNCTION WITH ONE PARAMETER
const squareSquare = x => {
    console.log(x * x);
}
squareSquare(9);

// ARROW FUNCTION WITH NO PARAMETER
const randomNumbers = () => {
    console.log(Math.floor(Math.random() * 100) + 1);
}
randomNumbers();

//
const greet = (str) => {
    return `Hey ${str}!`;
}

console.log(greet("Hagrid"));
console.log(greet("Luna"));

//

//IMPLICIT RETURNS!!!!!!!!! BASICALLY YOU DONT NEED TO WRITE return, YOU CAN SIMPLY REPLACE THE CURLY BRACES WITH PARENTHESIS AND BOOM! IT WILL RETURN THE VALUE!!! WHAAAAAAAAAAT!?!

//ONLY WORKS IF THERE IS ONE AND ONLY ONE STATEMENT

//YOU ALSO DON'T NEED A ; AFTER THE STATEMENT

const oneToFive = () => (
    Math.floor(Math.random() * 5) + 1
)

console.log(oneToFive());

//YOU CAN ALSO DO IT WITHOUT THE () OR {} AT ALL!!!!! JUST ONE SINGLE LINE OF CODE!!! STRAIGHT TO THE POINT!!!!!!!

const subtract = (a, b) => a - b;

console.log(subtract(20, 10));
console.log(subtract(100, 50));

//
const movies = [
    {
        title: "The Devil Wears Prada",
        score: 90
    },
    {
        title: "Crazy Stupid Love",
        score: 88
    },
    {
        title: "Shrek",
        score: 95
    },
    {
        title: "Up",
        score: 80
    }
]

//FROM COMPLEX TO SINGLE

//ONE
// let titles = movies.map(function(movie) {
//     return `${movie.title} -- ${movie.score / 10}`;
// });
//
// console.log(titles);


//TWO
// let titles = movies.map((movie) => {
//     return `${movie.title} -- ${movie.score / 10}`;
// });
//
// console.log(titles);


//THREE
// let titles = movies.map(movie => {
//     return `${movie.title} -- ${movie.score / 10}`;
// });
//
// console.log(titles);


//FOUR
let titles = movies.map(movie => `${movie.title} -- ${movie.score / 10}`);
console.log(titles);