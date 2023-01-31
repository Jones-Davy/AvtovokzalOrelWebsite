const navLink = document.querySelector('.nav__link')
const overlayRegistration = document.querySelector('.overlay__registration')
const overlayEnter = document.querySelector('.overlay__enter')
const form = document.querySelector('.new-search-form')
const enterLink = document.querySelector('.enter__link')
const regLink = document.querySelector('.reg__link')

    navLink.addEventListener('click', () => {
        overlayRegistration.style.display = 'flex'
        document.body.style.overflow = 'hidden';
        form.style.display = 'none'
    })

overlayRegistration.addEventListener('click', event => {
    const target = event.target
    if (target === overlayRegistration || target.closest('.modal__close')) {
        overlayRegistration.style.display = 'none'
        document.body.style.overflow = 'unset';
        form.style.display = 'table'
    }
})

enterLink.addEventListener('click', () =>{
    overlayRegistration.style.display = 'none'
    overlayEnter.style.display = 'flex'

})

regLink.addEventListener('click', () =>{
    overlayEnter.style.display = 'none'
    overlayRegistration.style.display = 'flex'

})

overlayEnter.addEventListener('click', event => {
    const target = event.target
    if (target === overlayEnter || target.closest('.modal__close')) {
        overlayEnter.style.display = 'none'
        document.body.style.overflow = 'visible';
        form.style.display = 'table'
    }
})

