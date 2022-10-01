console.log("hello world!");


//CALLING THE DOM: SEARCH BOX AND THE DIV WHERE WE WILL DISPLAY THE DATA
let searchBox = $('.search-input');
console.log(searchBox);
let searchMovieContent = $('#cardSearchMovie');
console.log(cardSearchContent);



//CALLING THE OMDb API USING THE S FOR SEARCH PARAMETER TO CALL EVERY POSSIBLE MOVIE WITH THE SAME KEYWORD AS THE USER INPUTS.
async function fetchSearch(searchTitle) {
    const URL = `https://www.omdbapi.com/?s=${searchTitle}&apikey=${OMDBKEY}`;
    let res = await fetch(`${URL}`);
    let data = await res.json();
    if(data.Response == "True") displaySearchContent(data.Search);
}

//TESTING FUNCTION OUT
fetchSearch("avengers");
fetchSearch("Fast and Furious");
fetchSearch("STAR WARS");


//ADDING CLICK EVENT: THE INPUT FORM #search-input
function searchMovie() {
    let searchTitle = searchBox.val().toLowerCase().trim();
    console.log(searchTitle);
}

function displaySearchContent(movies) {
   searchMovieContent.innerHTML= '';
    for(let idx = 0; idx < movies.length; idx++) {
        let movieSelection = document.createComment("<p>hello</p>");
    }
}

