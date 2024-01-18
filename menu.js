let hamburger = document.querySelector('.hamburger-logo')
let menu = document.querySelector('.menu')

hamburger.addEventListener('click',function(){
  menu.classList.toggle('is-active')
})