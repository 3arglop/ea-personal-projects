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
// let titles = movies.map(movie => (
//     `${movie.title} -- ${movie.score / 10}`
// ));
//
// console.log(titles);


//FOUR
let titles = movies.map(movie => `${movie.title} -- ${movie.score / 10}`);
console.log(titles);

//
let helloEl = document.getElementById('hello');

setTimeout(() => {
    helloEl.innerText = "HELLO WORLD!";
}, 3000);

//
let dateEl = document.getElementById('date');

setInterval(() => {
    const currentDate = new Date();
    // console.log(currentDate);
    dateEl.innerText = currentDate;
}, 1000)

//
const multiplesFive = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
console.log(multiplesFive);

const evens = multiplesFive.filter(num => {
    return num % 2 === 0;
});
console.log(evens);

const lessFifty = multiplesFive.filter(x => x < 50);
console.log(lessFifty);

const odds = multiplesFive.filter(y => y % 2 !== 0);
console.log(odds);

//
const songs = [
    {
        name: "Objects In the Mirror",
        artist: "Mac Miller",
        year: 2013,
        genre: "Hip Hop"
    },
    {
        name: "Testarossa Music",
        artist: "ZHU",
        year: 2015,
        genre: "Dance"
    },
    {
        name: "Gotta Get Thru This ",
        artist: "Daniel Bedingfield",
        year: 2011,
        genre: "Pop"
    },
    {
        name: "Rasputin",
        artist: "Boney M.",
        year: 1978,
        genre: "Pop"
    },
    {
        name: "Sodade",
        artist: "Cesária Evora & Bonga",
        year: 1990,
        genre: "Worldwide"
    },
    {
        name: "Draco",
        artist: "Future",
        year: 2017,
        genre: "Hip Hop"
    },
    {
        name: "Daydream Interlude ",
        artist: "Mariah Carey",
        year: 1995,
        genre: "Pop"
    },
    {
        name: "Could Heaven Ever Be Like This",
        artist: "Idris Muhammad",
        year: 1977,
        genre: "Jazz"
    },
    {
        name: "Y Volveré",
        artist: "Los Ángeles Negros",
        year: 1970,
        genre: "Latin"
    },
    {
        name: "Let's Stay Together",
        artist: "Al Green",
        year: 1972,
        genre: "Soul"
    },
    {
        name: "Nothings Into Somethings",
        artist: "Drake",
        year: 2017,
        genre: "Hip Hop"
    }
]

console.table(songs);

const songNames = songs.map(song => song.name);
console.table(songNames);

const seventySongs = songs.filter(song => song.year < 1980);
console.table(seventySongs);

// console.log(seventySongs[0].name);

const popSongs = songs.filter(song => song.genre === "Pop");
console.table(popSongs);

//PERFECT EXAMPLE OF HOW MAP AND FILTER WORK PERFECTLY TOGETHER!!! CHAIN METHODS RULE!!!!!!
const artist = songs.filter(song => song.artist).map(artist => artist.artist)
console.table(artist);

//CALLING THE DOM
const songEl = document.getElementById('songs');
const seventyEl = document.getElementById('seventy');
const popEl = document.getElementById('pop');
const artistEl = document.getElementById('artist');


const renderSongs = () => {
    let html = '';
    for(let i = 0; i < songNames.length; i++) {
        html += `<p>${songNames[i]}</p>`
        // console.log(html);
    }
    songEl.innerHTML = html;
}
renderSongs();


const renderSeventies = () => {
    let newHTML = '';
    for(let i = 0; i < seventySongs.length; i++) {
        newHTML += `<p>${seventySongs[i].name} --
                    <span style="color: black">${seventySongs[i].year}</span></p>`
                    // console.log(newHTML);
    }
    seventyEl.innerHTML = newHTML;
}
renderSeventies();

const renderPop = () => {
    let htmlNew = '';
    for(let i = 0; i < popSongs.length; i++) {
        htmlNew += `<p>${popSongs[i].name} [
                    <span style="color: deepskyblue">${popSongs[i].genre}</span> ]</p>`
    }
    popEl.innerHTML = htmlNew;
}
renderPop();

const renderArtist = () => {
    let string = '';
    for(let i = 0; i < artist.length; i++) {
        string += `<p>${artist[i]}</p>`
    }
    artistEl.innerHTML = string;
}
renderArtist();


//TODO: Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters.

const validUserNames = (usernames) => {
    let lessThanTenChar = usernames.filter(username => {
        if(username.length < 10) {
            return username;
        }
    });
    return lessThanTenChar;
}

console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));

//
const examScores = [76, 80, 99, 100, 65, 70, 76, 84, 92, 95, 77, 100];

//EVERY AND SOME WILL RETURN BOOLEAN VALUES. THIS IS USED TO MAKE SURE MY ARRAY IS TRUE/FALSE OR A FUNCTION IS TRUE/FALSE

const isEveryScorePassing = examScores.every(score => score >= 60);
console.log(isEveryScorePassing); // true

//HOWEVER, BECAUSE MY LOWEST SCORE IS A 65 AND MY PASSING SCORE IS A 75, IT WILL RETURN false!

const isPassing = examScores.some(score => score >= 75);
console.log(isPassing); // true

//IN THIS CASE, IT WILL RETURN true BECAUSE ITS ONLY COMPARING SOME NOT EVERY ELEMENT/VALUE!!!!


//TODO: Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.

const allEvens = (arr) => arr.every(num => num % 2 === 0);
console.log(allEvens([2,4,6,8]));
console.log(allEvens([1, 4, 6, 8]));
console.log(allEvens([1, 2, 3]));

//
const reduceExample = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(reduceExample);

//
const prices = [9.99, 10.75, 12.99, 50.00, 19.99, 1.50];

//OLD WAY OF ADDING EVERY VALUE IN AN ARRAY
let total = 0;
for(let price of prices) {
    console.log(price);
    total += price
}
console.log(total);

//USING REDUCE
const total2 = prices.reduce((total, price) => {
    console.log(total);
    console.log(price);
    return total + price;
});
console.log(total2);

const lowestPrice = prices.reduce((min, price) => {
    if(price < min) {
        console.log(price);
        return price;
    }
    console.log(min);
    return min;
});

console.log(lowestPrice);

//
const topMovies = [
    {
        title: "Black Adam",
        rating: 91
    },
    {
        title: "All Quiet On The Western Front",
        rating: 90
    },
    {
        title: "Enola Holmes 2",
        rating: 81
    },
    {
        title: "The Banshees Of Inisherin",
        rating: 77
    },
    {
        title: "Barbarian",
        rating: 67
    },
    {
        title: "The Good Nurse",
        rating: 77
    },
    {
        title: "The Stranger",
        rating: 63
    }
]

console.table(topMovies);

const highestRating = topMovies.reduce((bestMovie, currMovie) => {
        if(currMovie.rating > bestMovie.rating) {
            // console.log(currMovie);
            return currMovie;
        }
    // console.log(bestMovie);
    return bestMovie;
});

console.log(highestRating);

//
const myinfo = {
    firstName: 'Lucy-Marie Ann',
    lastName: 'Cow Smith',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function() {
        setTimeout(function() {
            console.log(myinfo.fullName().toUpperCase());
        }, 3000)
    }
}

console.log(myinfo.fullName());
myinfo.shoutName();

//

// OLD WAY
// function userRollDie(numSides) {
//     if(numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

//NEW WAY
function userRollDie(numSides = 6) {
        return Math.floor(Math.random() * numSides) + 1;
}

console.log(userRollDie());
console.log(userRollDie(20));
console.log(userRollDie(8));

//
function declaringGreeting(person, msg = "Hello") {
    console.log(`${msg}, ${person}!`);
}

declaringGreeting("Mr. Incredible", "Watch out");
declaringGreeting("Mickey Mouse");


//SPREAD
const numeros = [123, 8765, 87127632, 7887986, 1, 0, 6543, 217263, 878, 86, 99, 100];

console.log(numeros);

// const maxNum = Math.max(numeros); //NaN

const maxNum = Math.max(...numeros); // THIS WORKS COS IM SPREADING

console.log(maxNum);

//SPREAD WITH ARRAYS

const oneFive = [1, 2, 3, 4, 5];
console.log(oneFive);
const sixTen = [6, 7, 8, 9, 10];
console.log(sixTen);

const allNums = [...oneFive, ...sixTen, 11, 12, 13, 14, 15]; //SPREAD
console.log(allNums);

//SPREADING A STRING INTO AN ARRAY

const myMsg = "welcome";
console.log(myMsg);

const myMsgInArray = [...myMsg]; //SPREAD
console.log(myMsgInArray);

const vowels = [..."aeiouAEIOU"]; //SPREAD
console.log(vowels);

//SPREADING AN OBJECT
const loginInfo = {
    email: "codytheduck@codeup.com",
    password: "12345",
    username: "ih3artCats"
}
console.table(loginInfo);

const newUser = {...loginInfo, id: 13, isAdmin: false, gender: "M", age: 24} //SPREAD
console.table(newUser);

//
const contestants = ['Diego', 'Silvia', 'Jon', 'Eliza', 'Cameron', 'Sam']

function raceResults(gold, silver, ...contestants) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${contestants}`);
}

raceResults('Harry', 'Natasha', contestants);

//DECONSTRUCTING AN ARRAY
const emmyResults = ['Zendaya', 'Reese Witherspoon', 'Sandra Oh', 'Jodie Comer'];

const [winner, secondPlace, ...rest] = emmyResults;

console.log(winner); //Zendaya
console.log(secondPlace); //Reese Witherspoon
console.log(rest); //['Sandra Oh', 'Jodie Comer']

//DECONSTRUCTING AN OBJECT
const bio = {
    firstName: "Emmy",
    lastName: "Noether",
    born: "March 23, 1882",
    died: "April 14, 1935",
    age: 53,
    nationality: "German",
    almaMater: "University of Erlangen",
    knownFor: {
        a: "Abstract algebra",
        b: "Theoretical physics",
        c: "Noether's theorem",
        d: "Noetherian ring",
        e: "Lasker–Noether theorem"
    },
    gender: "Female",
    awards: "Ackermann–Teubner Memorial Award"
}
console.log(bio);

const { firstName, lastName, nationality } = bio;

console.log(firstName);
console.log(lastName);
console.log(nationality);

// const { knownFor } = bio.knownFor; //UNDEFINED

const { ...knownFor } = bio.knownFor; //Object { a: "Abstract algebra", b: "Theoretical physics", c: "Noether's theorem", d: "Noetherian ring", e: "Lasker–Noether theorem" }

console.log(knownFor);

const { a, b, c, d, e } = knownFor; //Abstract algebra Theoretical physics Noether's theorem Noetherian ring Lasker–Noether theorem

console.log(a, b, c, d, e);

const fullName = ({firstName, lastName}) => {
    console.log(`Nice to meet you, ${firstName} ${lastName}`);
}

fullName(bio);