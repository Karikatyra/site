const windowlogin = document.querySelector('.windowlogin');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const login = document.querySelector('.login');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    windowlogin.classList.add('active');
});
loginLink.addEventListener('click', () => {
    windowlogin.classList.remove('active');
});
login.addEventListener('click', () => {
    windowlogin.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    windowlogin.classList.remove('active-popup');
});