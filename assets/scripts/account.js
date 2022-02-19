const userPanel = document.querySelector('.header-user');
const userTrigger = document.querySelector('.header-user__green');

userTrigger.addEventListener('click', () => userPanel.classList.toggle('active'));