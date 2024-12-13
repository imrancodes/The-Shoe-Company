const hamMenu = document.querySelector('.ham-menu')
const close = document.querySelector('.close')
const navMenu = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-link')
const nav = document.querySelector('header')

hamMenu.addEventListener('click', () => {
    navMenu.classList.remove('max-md:hidden')
    navMenu.classList.add('flex')
    hamMenu.classList.add('hidden')
})

close.addEventListener('click', () => {
    navMenu.classList.remove('flex')
    navMenu.classList.add('max-md:hidden')
    hamMenu.classList.remove('hidden')
})

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        navMenu.classList.remove('flex')
        navMenu.classList.add('max-md:hidden')
        hamMenu.classList.remove('hidden')
    })
})

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 50) {
        nav.classList.add('bg-black/50')
    }else{
        nav.classList.remove('bg-black/50')
    }
})