const menuButton = document.querySelector('.menu-btn');
// const clicked = (event) => {

// }

const toggleNav = function () {
    const opt_list = document.getElementById('options_list')
    if (opt_list.style.left === '0px') {
        opt_list.style.left = '-100%'
    } else {
        opt_list.style.left = '0px'
    }
}

// const navbar = document.getElementById('nav');
// let navTop = navbar.offsetTop;

// const fixedNav = function() {
//     if(window.scrollY >= navTop) navbar.classList.add('fixed');
//     else navbar.classList.remove('fixed');
// }

// window.addEventListener('scroll', fixedNav);
menuButton.addEventListener('click', toggleNav);