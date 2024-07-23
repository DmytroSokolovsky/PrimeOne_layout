const menuBurger = document.querySelector('.bottom-header__burger')
const leftMenu = document.querySelector('.left-header-menu')
const rightMenu = document.querySelector('.right-header-menu')

menuBurger.addEventListener('click', function() {
  leftMenu.classList.toggle('active')
  rightMenu.classList.toggle('active')
  menuBurger.classList.toggle('active')
  document.body.classList.toggle('lock')
})