// import functions and grab DOM elements
import { signIn, signUp, getUser } from './fetch-utils.js';

const signUpForm = document.querySelector('.signup');
const signInForm = document.querySelector('.signin');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const emailInput2 = document.querySelector('#email2');
const passwordInput2 = document.querySelector('#password2');


signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    


    // const data = new FormData(signUpForm);
    // console.log(email, password);
    await signUp(emailInput.value, passwordInput.value);

    const user = getUser();

    if (user){
        window.location.href = './polls';
    }



  
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
  


  // const data = new FormData(signUpForm);
  // console.log(email, password);
    await signUp(emailInput2.value, passwordInput2.value);

    const user = getUser();

    if (user){
        window.location.href = './polls';
    }




});


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
