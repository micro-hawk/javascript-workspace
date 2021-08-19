const popCLose = document.querySelector('.popup-close-btn')
const popup = document.querySelector('.popup')

window.onload = function() {
    setTimeout(
        function() {
            popup.style.visibility = "visible"
        }, 2000)
}
const closePopupWindow = () => {
    popup.style.visibility = "hidden"
}
popCLose.addEventListener('click', closePopupWindow)