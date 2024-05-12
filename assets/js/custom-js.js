//Hero image view
const imageLoad = () => {
    const heroImage = document.querySelector('.hero__start-img > img')
    const heroMotto = document.querySelectorAll('.hero__container .hero__info .hero__motto-container>p')

    const imagePath = ['pictures/hero/magnifying-glass.png', 'pictures/hero/visualize.png', 'pictures/hero/computer.png']
    const mottoClass = ['first', 'second', 'third']

    //Counter was set to 1 since there is a default html value
    let counter = 1

    setInterval(() => {
        heroMotto.forEach((motto, index) => {
            motto.classList.remove(`hero__motto--focus--${mottoClass[index]}`)
        })

        heroImage.setAttribute('src', imagePath[counter])
        heroMotto[counter].classList.add(`hero__motto--focus--${mottoClass[counter]}`)

        if (counter === imagePath.length - 1) {
            counter = 0
            return
        }
        counter += 1
    }, 2000)
}
imageLoad()


//Animate hamburger overlay

const hamburgerIcon = document.querySelector('.nav__hamburger-container')
const hamburgerWrapper = document.querySelector('.hamburger__wrapper')
const hamburgerContent = document.querySelector('.hamburger__container')
const hamburgerOverlay = document.querySelectorAll('.hamburger__overlay-bg')

const closehamburgerWrapper = document.querySelector('.close-hamburger')

const animation = () => {

    const showHamburgerMenu = () => {
        hamburgerWrapper.classList.add('show')
    }

    hamburgerIcon.addEventListener('click', showHamburgerMenu)

    const hideHamburgerMenu = () => {
        hamburgerContent.style.cssText = `animation:hamburgerAnimationReverse 0.5s ease-in-out; animation-delay: ${0.5}s;`

        let setDelay = 0
        let reverseCount = hamburgerOverlay.length
        for (let i = 0; i < hamburgerOverlay.length; i++) {
            reverseCount -= 1
            hamburgerOverlay[reverseCount].style.cssText = `animation:hamburgerAnimationReverse 0.5s ease-in-out; animation-delay: ${setDelay}s;`
            setDelay += 0.2
        }

        setTimeout(() => {
            hamburgerWrapper.classList.remove('show')
            hamburgerOverlay.forEach(overlay => {
                overlay.removeAttribute('style')
            })
            hamburgerContent.removeAttribute('style')
        }, 1000)
    }

    closehamburgerWrapper.addEventListener('click', hideHamburgerMenu)

}
animation()

//Manipulate theme
const theme = () => {
    const heroTheme = document.querySelector('.hero__theme-container')
    const logo = document.querySelector('.nav__logo-container > img')

    fetch('../json/theme.json').then(response => response.json()).then(themes => fetchTheme(themes)).catch((error) => {
        error.log(error)
        console.log('Please contact the developer')
    })

    const setTheme = (theme) => {
        Object.entries(theme).forEach(key => {
            document.documentElement.style.setProperty(key[0], key[1])
        })
    }

    const fetchTheme = (themes) => {
        const handleThemeClick = (e) => {
            if (e.target.classList.contains('hero__theme')) {
                const theme = Array.from(heroTheme.children);
                theme.forEach(theme => {
                    theme.classList.remove('hero__theme--active')
                })
                e.target.classList.add('hero__theme--active')
            }

            switch (e.target.id) {
                case 'light-theme':
                    setTheme(themes.lightThemeColor)
                    logo.setAttribute('src', 'pictures/logo/lighttheme-logo.png')
                    break;

                case 'dark-theme':
                    setTheme(themes.darkThemeColor)
                    logo.setAttribute('src', 'pictures/logo/darktheme-logo.png')
                    break;

                case 'brown-theme':
                    setTheme(themes.brownThemeColor)
                    logo.setAttribute('src', 'pictures/logo/browntheme-logo.png')
                    break;

                case 'blue-theme':
                    setTheme(themes.blueThemeColor)
                    logo.setAttribute('src', 'pictures/logo/bluetheme-logo.png')
                    break;

                default:
                    break;
            }
        }
        heroTheme.addEventListener('click', handleThemeClick)
    }
}
theme()

//View Next Page
const nextSection = document.querySelector('.about__extra-info')
const mainSection = document.querySelector('.main__content-container')
const nextContent = document.querySelector('.next__content-container')
const header = document.querySelector('.nav__main-container')

const hamburgerList = document.querySelector('.hamburger__wrapper .hamburger__container .hamburger__content > ul')
const mainList = document.querySelector('.nav__main-container > ul')

//Next Page and list
let nextPage = () => {
    nextSection.addEventListener('click', (e) => {
        const listName = ['Home', 'Skills', 'Stacks', 'Random', 'Contacts']
        const listId = ['home', 'skills', 'stacks', 'random', 'contact']

        mainSection.style.cssText = 'display:none;'
        nextContent.style.cssText = 'display:block;'
        header.style.cssText = 'animation:opacity 2s forwards;'

        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        while (hamburgerList.firstChild) {
            hamburgerList.removeChild(hamburgerList.firstChild);
        }

        while (mainList.firstChild) {
            mainList.removeChild(mainList.firstChild);
        }

        for (let i = 0; i < listName.length; i++) {
            const createList = document.createElement('li')
            hamburgerList.appendChild(createList)

            const createAnchor = document.createElement('a')
            createAnchor.href = `#${listId[i]}`
            createAnchor.textContent = `${listName[i]}`
            createList.appendChild(createAnchor)

            if (i === 0) {
                createAnchor.setAttribute('id', 'home')
                createAnchor.setAttribute('class', 'home')
            }
            //Cloned lists for desktops
            const cloneList = createList.cloneNode(true)
            mainList.appendChild(cloneList)
        }

    })
}
nextPage()

//Previous Page and list

const handleListItem = (e) => {
    const listName = ['About', 'Projects', 'Contacts']
    const listId = ['about', 'project', 'contact']

    if (e.target.classList.contains('home')) {
        while (mainList.firstChild) {
            mainList.removeChild(mainList.firstChild);
        }
        mainSection.style.cssText = 'display:block;'
        nextContent.style.cssText = 'display:none;'
        header.style.cssText = 'animation:opacity 2s forwards;'

        for (let i = 0; i < listName.length; i++) {
            const createList = document.createElement('li')
            mainList.appendChild(createList)

            const createAnchor = document.createElement('a')
            createAnchor.href = `#${listId[i]}`
            createAnchor.textContent = `${listName[i]}`
            createList.appendChild(createAnchor)
        }

        //for newer browsers that suuports documentElement property
        document.documentElement.scrollTop = 0;
        //for older browsers that doesnt support documentElement property
        document.body.scrollTop = 0;
    }
}

mainList.addEventListener('click', handleListItem)


//Reverse hamburger animation
const reverseAnimation = () => {
    hamburgerList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            hamburgerContent.style.cssText = `animation:hamburgerAnimationReverse 0.5s ease-in-out; animation-delay: ${0.5}s;`

            let setDelay = 0
            let reverseCount = hamburgerOverlay.length
            for (let i = 0; i < hamburgerOverlay.length; i++) {
                reverseCount -= 1
                hamburgerOverlay[reverseCount].style.cssText = `animation:hamburgerAnimationReverse 0.5s ease-in-out; animation-delay: ${setDelay}s;`
                setDelay += 0.2
            }

            setTimeout(() => {
                hamburgerWrapper.classList.remove('show')
                hamburgerOverlay.forEach(overlay => {
                    overlay.removeAttribute('style')
                })
                hamburgerContent.removeAttribute('style')
            }, 1000)
        }
    })
}
reverseAnimation()

const projectCardContainer = document.querySelector('.project__card-container')

const createNewElement = (parent, tag, customClass = null, attribute = null) => {
    const element = document.createElement(tag)
    parent.appendChild(element)

    if (attribute != null) {
        for (let i = 0; i < attribute.length; i++) {
            if (i % 2 == 0) {
                element.setAttribute(attribute[i], attribute[i + 1])
            }
        }
    }

    if (customClass != null) {
        for (let i = 0; i < customClass.length; i++) {
            element.classList.add(customClass[i])
        }
    }

    return element
}

const fetchProject = () => {
    fetch('../../json/projects.json').then(response => response.json()).then(projectData => renderProject(projectData)).catch((error) => {
        error.log(error)
        console.log('Please contact the developer')
    })
}

const renderProject = (projectData) => {
    for (let i = 0; i < projectData.length; i++) {
        const createMainContainer = createNewElement(projectCardContainer, 'div', ['project__card', 'wow', 'fadeInUp'])

        const createHeader = createNewElement(createMainContainer, 'div', ['project__header'])
        const createImageContainer = createNewElement(createHeader, 'div', ['project__image'])
        createNewElement(createImageContainer, 'img', null, ['src', `${projectData[i].image}`])

        const projectContent = createNewElement(createMainContainer, 'div', ['project__content'])
        const projectTitle = createNewElement(projectContent, 'div', ['project__title-pos'])

        const title = createNewElement(projectTitle, 'p')
        title.textContent = `${projectData[i].title}`
        const subtitle = createNewElement(projectTitle, 'p')
        subtitle.textContent = `${projectData[i].subtitle}`

        const projectInfo = createNewElement(projectContent, 'div', ['project__info'])
        projectInfo.textContent = `${projectData[i].information}`
        const projectStack = createNewElement(projectContent, 'div', ['project__stack'])
        const stackContainer = createNewElement(projectStack, 'ul')

        for (let j = 0; j < projectData[i].stack.length; j++) {
            const stackList = createNewElement(stackContainer, 'li')
            createNewElement(stackList, 'i', ['fa-brands', `${projectData[i].stack[j]}`])
        }

        const projectFooter = createNewElement(projectContent, 'div', ['project__footer'])
        if (projectData[i].liveSite === true) {
            const liveSite = createNewElement(projectFooter, 'a', ['project__live-site'], ['href', `${projectData[i].liveRef}`, 'target', '__blank'])

            createNewElement(liveSite, 'i', ['fa-solid', 'fa-gamepad'])
            const liveText = createNewElement(liveSite, 'p', ['project__live-site'])
            liveText.textContent = 'Live Site'

        }

        const gitSource = createNewElement(projectFooter, 'a', null, ['href', `${projectData[i].gitRef}`, 'target', '__blank'])
        createNewElement(gitSource, 'i', ['fa-solid', 'fa-code'])
        const gitText = createNewElement(gitSource, 'p')
        gitText.textContent = 'Source'
    }
}

fetchProject()
