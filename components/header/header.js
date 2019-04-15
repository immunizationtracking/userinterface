const menuBtn = document.querySelector('.menu'); // menu button
const content = document.querySelector('.menu-content'); // menu content

// adds button to hamburger and enables the toggle action
menuBtn.addEventListener('click', () => {
    content.classList.toggle('hide');
})