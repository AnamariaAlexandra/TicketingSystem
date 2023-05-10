const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signInFrom = document.getElementById('signInBtn');
const signUpFrom = document.getElementById('signUpBtn');
const pageBtn = document.getElementsByClassName('page2');


signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
