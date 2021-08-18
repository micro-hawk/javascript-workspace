const menuButton = document.querySelector('.menu-btn');

const toggleNav = function () {
    const opt_list = document.getElementById('options_list')
    if (opt_list.style.left === '0px') {
        opt_list.style.left = '-100%'
    } else {
        opt_list.style.left = '0px'
    }
}
menuButton.addEventListener('click', toggleNav);