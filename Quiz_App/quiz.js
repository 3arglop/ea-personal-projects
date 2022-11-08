console.log("Quiz Time");

//CALLING THE DOM: HELLO HTML
const questionElement = document.getElementById('question');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const submit = document.getElementById('btn');

//INITIALIZING THE QUIZ TO THE FIRST QUESTION
let currentQuestion = 0;

//CALLING MY JSON FILE: HELLO DATA
const fetchQuizData = () => {
    const URL = "quiz-data.json"

    fetch(URL)
        .then(response => {
            console.log(response);
            // const data = response.json();
            if (!response.ok) {
                throw Error('ERROR');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const currentQuizData = data[currentQuestion];
            questionElement.innerText = currentQuizData.question ;
            aText.innerText = currentQuizData.a;
            bText.innerText = currentQuizData.b;
        });
}

fetchQuizData();

//CONNECTING THE DOM WITH EVENT LISTENERS
submit.addEventListener("click", () => {
    currentQuestion++;

    // if(currentQuestion > currentQuizData.length) {
        fetchQuizData();
    // }

});