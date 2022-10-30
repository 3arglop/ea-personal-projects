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


// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

//CALLING THE DOM

// let coffeesBody = document.getElementById('coffeesBody');
//
// function renderCoffee(coffee) {
//     let html = '';
//     for(let i = 0; i > coffees.length; i++) {
//         html += `<div class="card" style="width: 18rem;">
//           <div class="card-body">
//             <p>${coffee[i].id}</p>
//             <h5 class="card-title">${coffee[i].name}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">${coffee[i].roast}</h6>
//           </div>
//         </div>`
//     }
//     $('#coffeesBody').html(`<h3>Menu</h3>` + html);
// }
//
// renderCoffee();
//



function renderCoffee(coffee) {
    var html = `<div class="col-lg-6 m-0 p-0">
    <div class="card d-flex justify-content-center align-items-center lh-1" style="font-family: 'Glegoo', serif; border-color: white;">
    <h4 class="text-capitalized fs-3" style="color: #4D2B1E">${coffee.name}</h4>
    <p class="text-center mt-2 fs-5" style="color: #AB6832; font-family: 'Literata', serif;">${coffee.roast}</p>
    </div></div>`;

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

renderCoffees();

//
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
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