// burger navigation
const burger = document.querySelector('.header-burger');
const cross = document.getElementById('cross');
const modal = document.querySelector('.modal')
const togglers = [burger, cross];

togglers.forEach(item => item.addEventListener('click', ()=> modal.classList.toggle('active')));