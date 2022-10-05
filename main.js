//String (textos)
//Number (número)
//Boolean (true / false)

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection (section) {
    //linha alvo
    let targetLine = scrollY + innerHeight / 2

    //verificar se a sessão passou da linha do topo
    //quais dados vou precisar?

    //o topo da sessão
    const sectionTop = section.offsetTop
    //a altura da sessão
    const sectionHeight = section.offsetHeight
    //o topo da sessão chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    //informações dos dados e da lógica
    console.log('O topo da sessão chegou ou passou da linha?',sectionTopReachOrPassedTargetline);

    //verificar se a base está abaixo da linha alvo
    //quais dados vou precisar?

    //a sessão termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    //o final da sessão passou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    console.log('O fundo da sessão passou da linha?',sectionEndPassedTargetline)

    //limites da sessão
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline 

    const sectionId = section.getAttribute ('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }

}

function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    }
    else{
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 550) {
        backToTopButton.classList.add('show')
    }
    else{
        backToTopButton.classList.remove('show')
    }
}
function openMenu(){
    document.body.classList.add('menu-expanded')
}
function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top', distance: '30px' ,duration: 700,
}).reveal(`#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content`);