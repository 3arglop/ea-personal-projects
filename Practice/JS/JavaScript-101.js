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