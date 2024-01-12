const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;

document.addEventListener('scroll', function() {
    if(window.scrollY > headerHeight) {
        header.classList.add('header_border');
    }
    else {
        header.classList.remove('header_border');
    }
})


const navToggle = document.querySelector('.hamburger');

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle('open');
})

const navMenu = document.querySelector('.menu');

navMenu.addEventListener('click', () => {
    navMenu.classList.remove('.open');
})