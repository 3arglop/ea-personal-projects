"use strict";

console.log("Hello from Coffee JS");

const coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

console.table(coffees);
console.log(coffees[0]);
console.log(coffees[0].name);
console.log(coffees[11].roast);


//CAllING THE DOM
let showProdBody = $('#showProd');
console.log(showProdBody);

//ITERATING THRU MY DATA
let html = '';
coffees.forEach((coffee) => {
        html += `<div class="card" style="width: 18rem;" id="productCard">
                  <div class="card-body py-1">
                    <p style="display: none">${coffee.id}</p>
                    <h5 class="card-title fs-2">${coffee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${coffee.roast}</h6>
                  </div>
                </div>`
    }
);

//CONNECTING MY DYNAMIC HTML WITH THE DOM
showProdBody.html(html);




// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }


// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');
//
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);