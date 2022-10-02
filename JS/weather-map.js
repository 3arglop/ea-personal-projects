console.log("Hello World");

let currentPosition = function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    // console.log(lat);
    // console.log(long);
    getForecast(lat, long);
}

let getForecast = function(lat, long) {

}



//EXAMPLE SOURCE: MOZILLA

// let button = document.getElementById("get-location");
// let latText = document.getElementById("latitude");
// let longText = document.getElementById("longitude");


//MY TAKE WITH JQUERY
// let button = $('#get-location');
// console.log(button);
//
// let latText = $('#latitude');
// console.log(latText);
//
// let longText = $('#longitude');
// console.log(longText);


//EXAMPLE SOURCE: MOZILLA

// button.addEventListener("click", () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//         let lat = position.coords.latitude;
//         let long = position.coords.longitude;
//
//         latText.innerText = lat.toFixed(2);
//         longText.innerText = long.toFixed(2);
//     });
// });


//MY TAKE WITH JQUERY
// button.click(function(e) {
//     navigator.geolocation.getCurrentPosition((position) => {
//         let lat = position.coords.latitude;
//         let long = position.coords.longitude;
//         console.log(lat);
//         console.log(long);
//
//         latText.text(lat.toFixed(2));
//         longText.text(long.toFixed(2));
//     })
// });

