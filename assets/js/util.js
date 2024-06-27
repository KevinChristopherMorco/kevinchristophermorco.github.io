//Animate hamburger overlay
const hamburgerIcon = document.querySelector('.nav__hamburger-container')
const hamburgerWrapper = document.querySelector('.hamburger__wrapper')
const hamburgerContent = document.querySelector('.hamburger__container')
const hamburgerOverlay = document.querySelectorAll('.hamburger__overlay-bg')
const closehamburgerWrapper = document.querySelector('.close-hamburger')

const showHamburgerMenu = () => {
    hamburgerWrapper.classList.add('show')
}
hamburgerIcon.addEventListener('click', showHamburgerMenu)

const hideHamburgerMenu = () => {
    //Set hamburger style animation
    hamburgerContent.style.cssText = `animation:hamburgerAnimationReverse 0.5s ease-in-out; animation-delay: ${0.5}s;`

    let setDelay = 0
    let reverseCount = hamburgerOverlay.length
    for (let i = 0; i < hamburgerOverlay.length; i++) {
        reverseCount -= 1
        hamburgerOverlay[reverseCount].style.cssText = `animation:hamburgerAnimationReverse 0.5s ease-in-out; animation-delay: ${setDelay}s;`
        setDelay += 0.2
    }

    //Allow hamburger style to appear then eventually remove the hamburger overlay
    setTimeout(() => {
        hamburgerWrapper.classList.remove('show')
        hamburgerOverlay.forEach(overlay => {
            overlay.removeAttribute('style')
        })
        hamburgerContent.removeAttribute('style')
    }, 1000)
}

closehamburgerWrapper.addEventListener('click', hideHamburgerMenu)

const header = document.querySelector('.nav__main-container')
const nextSection = document.querySelector('.about__extra-info')
const mainSection = document.querySelector('.main__content-container')
const nextContent = document.querySelector('.next__content-container')

const hamburgerList = document.querySelector('.hamburger__wrapper .hamburger__container .hamburger__content > ul')
const mainList = document.querySelector('.nav__main-container > ul')

//Next Page and list
let nextPage = (e) => {
    handleLinksAndPage(e, mainList, true)
    handleLinksAndPage(e, hamburgerList, true)
}

nextSection.addEventListener('click', (e) => nextPage(e))

const handleLinksAndPage = (e, listContainer, nextPage) => {
    let listName
    let listId
    if (nextPage === true) {

        Array.from(listContainer.children).forEach(element => {
            element.remove()
        });
        listName = ['Home', 'Skills', 'Stacks', 'Random', 'Contacts']
        listId = ['home', 'skills', 'stacks', 'random', 'contact']
        sectionState([mainSection, nextContent, header], ['display:none', 'display:block', 'animation:opacity 2s forwards;'])

    }

    if (nextPage != true && e.target.id === 'home') {
        Array.from(listContainer.children).forEach(element => {
            element.remove()
        });
        listName = ['About', 'Projects', 'Contacts']
        listId = ['about', 'project', 'contact']
        hideHamburgerMenu()
    }

    if (e.target.id != 'home' && e.target.tagName === 'A') {
        hideHamburgerMenu()
        return;
    }

    for (let i = 0; i < listName.length; i++) {
        const createList = document.createElement('li')
        listContainer.appendChild(createList)

        const createAnchor = document.createElement('a')
        createAnchor.href = `#${listId[i]}`
        createAnchor.textContent = `${listName[i]}`
        createList.appendChild(createAnchor)

        if (i === 0 && nextPage === true) {
            createAnchor.setAttribute('id', 'home')
            createAnchor.setAttribute('class', 'home')
        }
    }

    if (e.target.tagName === 'BUTTON') return;
    sectionState([mainSection, nextContent, header], ['display:block', 'display:none', 'animation:opacity 2s forwards;'])
}

hamburgerList.addEventListener('click', (e) => handleLinksAndPage(e, hamburgerList, false))
mainList.addEventListener('click', (e) => handleLinksAndPage(e, mainList, false))

const sectionState = (section, style) => {
    section.forEach((element, i) => {
        element.style.cssText = style[i]
    })

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}