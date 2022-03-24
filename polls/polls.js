import { createPoll, getPolls, redirectIfNotLoggedIn, signOut } from '../fetch-utils.js';
const publishButton = document.querySelector('.publish-poll');
// const currentContainerEl = document.querySelector('.current-poll-container');
const currentQuestionEl = document.querySelector('.current-poll-question-text');
const currentOption1El = document.querySelector('.option-1-text');
const currentOption2El = document.querySelector('.option-2-text');
const vote1El = document.querySelector('.vote-1-text');
const vote2El = document.querySelector('.vote-2-text');
const option1Increment = document.querySelector('.option1-add');
const option1Decrement = document.querySelector('.option1-subtract');
const option2Increment = document.querySelector('.option2-add');
const option2Decrement = document.querySelector('.option2-subtract');
const pastPollContainer = document.querySelector('past-poll-container');
const signOutButton = document.querySelector('.logout');
const formEl = document.querySelector('form');



let currentQuestion = 'Default Question';
let currentOption1 = 'Default Option1';
let currentOption2 = 'Default Option 2';
let currentVote1 = 0;
let currentVote2 = 0;

console.log(currentVote1);


redirectIfNotLoggedIn();

signOutButton.addEventListener('click', async () => {

    await signOut();

    window.location = '../';
    
});

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    currentQuestion = data.get('question');
    currentOption1 = data.get('option1');
    currentOption2 = data.get('option2');

    displayCurrentQuestion();


    formEl.reset();

    
});
option1Increment.addEventListener('click', () => {

    currentVote1++;
    displayCurrentQuestion();
    

    
});

option1Decrement.addEventListener('click', () => {

    currentVote1--;
    displayCurrentQuestion();
    
    
});

option2Increment.addEventListener('click', () => {

    currentVote2++;
    displayCurrentQuestion();
    
    
});

option2Decrement.addEventListener('click', () => {

    currentVote2--;
    displayCurrentQuestion();
    
});

function displayCurrentQuestion(){

    currentQuestionEl.textContent = currentQuestion;

    currentOption1El.textContent = currentOption1;

    currentOption2El.textContent = currentOption2;
    vote1El.textContent = currentVote1;
    vote2El.textContent = currentVote2;






}








