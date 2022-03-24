import { createPoll, getPolls, getUser, redirectIfNotLoggedIn } from '../fetch-utils/js';
const publishButton = document.querySelector('.publish-poll');
const currentContainerEl = document.querySelector('.current-poll-container');
const currentQuestionText = document.querySelector('.current-question-text');
const option1Text = document.querySelector('.option-1-text');
const option2Text = document.querySelector('.option-2-text');
const option1Increment = document.querySelector('option1-add');
const option1Decrement = document.querySelector('.option1-subtract');
const option2Increment = document.querySelector('.option2-add');
const option2Decrement = document.querySelector('option2-subtract');
const pastPollContainer = document.querySelector('past-poll-container');

let currentQuestion = 'Default Question';
let currentOption1 = 'Default Option1';
let currentOption2 = 'Default Option 2';
let currentVote1 = 0;
let currentVote2 = 0;




