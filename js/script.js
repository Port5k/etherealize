(function main() {
    var menuToggle = document.querySelector('.hamburger-wrapper');
    var Burger = document.querySelector('.hamburger');
    var Nav = document.querySelector('.nav');
    var navList = document.querySelector('.nav-list');
    var menuItems =  document.querySelector('.nav-link');
    let submitBtn = document.querySelector('.submit');
    let userName = document.querySelector('#UserName');
    let userEmail = document.querySelector('#UserEmail');
    let userMessage = document.querySelector('#UserMessage');
    let formError = document.querySelector('.form-msg');


    menuToggle.addEventListener('click', Toggler);
    var menuDisplay = false;

    function Toggler() {
        if (!menuDisplay) {
            menuToggle.classList.add('fixer');
            Burger.classList.add('open');
            Nav.classList.add('color-change');
            navList.classList.add('show');
            menuDisplay = true;
        } else {
            Burger.classList.remove('open');
            menuToggle.classList.remove('fixer');
            Nav.classList.remove('color-change');
            navList.classList.remove('show');
            menuDisplay = false;
        }

    }

    submitBtn.addEventListener('click', formValidation);

    function formValidation(e) {
        e.preventDefault();
        if (userName.value == '' || userEmail.value == '' || userMessage.value == '' ) {
            formError.innerHTML = '! Please fill out all fields';
        }

        setTimeout(() => {
               formError.remove();
            }, 3000);

        userName.value = '';
        userEmail.value = '';
        userMessage.value = '';
    }

    
}() )