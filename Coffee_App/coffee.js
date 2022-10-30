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


// function renderNewHTML(coffeeOption) {
//     let html = `<div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <p>${coffeeOption.id}</p>
//     <h5 class="card-title">${coffeeOption.name}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">${coffeeOption.roast}</h6>
//   </div>
// </div>`
//
//     return html;
// }
//
//
//
// function renderCoffees(coffees) {
//     let html = '';
//     for(let i = coffees.length - 1; i >= 0; i--) {
//         html += renderNewHTML(coffees[i]);
//     }
//     return html;
// }
//
// renderCoffees(coffees);


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
//
// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');
//
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);