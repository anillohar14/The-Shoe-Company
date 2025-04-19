const hamburgerMenu = document.querySelector('#hamburger')
const hamburgerIcon = document.querySelector('#hamburger-icon')
const backIcon = document.querySelector('#back')

hamburgerIcon.addEventListener('click',() => {
    hamburgerMenu.classList.remove('hidden')
    hamburgerIcon.classList.add('hidden')
})
backIcon.addEventListener('click', () => {
    hamburgerMenu.classList.add('hidden')
    hamburgerIcon.classList.remove('hidden')
})