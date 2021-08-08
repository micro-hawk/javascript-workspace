
const tabList = document.querySelectorAll('.tabcontent')
const btnList = document.querySelectorAll('button.tab-links')

const changeTab = (event) => {
    const openIndex = +event.target.value
    tabList.forEach((e,index) => {
        e.style.display = openIndex === index
            ? 'block' : 'none'
    })
    btnList.forEach(e => {
        if (e === event.target) {
            e.setAttribute('tab-open', true)
        } else {
            e.setAttribute('tab-open', false)
        }
    })
}

btnList.forEach(e => {
    e.addEventListener('click', changeTab)
})