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
const closehamburgerWrapper = document.querySelector('.close-hamburger')

const hamburgerOverlay = document.querySelectorAll('.hamburger__overlay-bg')

const animation = () => {

    hamburgerIcon.addEventListener('click', (e) => {
        hamburgerWrapper.classList.add('show')
    })

    closehamburgerWrapper.addEventListener('click', (e) => {
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
    })
}
animation()

//Manipulate theme
const theme = () => {
    const heroTheme = document.querySelector('.hero__theme-container')
    const lightTheme = document.querySelector('.light-theme')
    const darkTheme = document.querySelector('.dark-theme')
    const brownTheme = document.querySelector('.brown-theme')
    const blueTheme = document.querySelector('.blue-theme')

    const logo = document.querySelector('.nav__logo-container > img')

    heroTheme.addEventListener('click', (e) => {
        if (e.target.classList.contains('hero__theme')) {
            const theme = Array.from(heroTheme.children);
            theme.forEach(theme => {
                theme.classList.remove('hero__theme--active')
            })
            e.target.classList.add('hero__theme--active')
        }
    })

    const darkThemeColor = {
        '--body-bg': '#000',
        '--component-bg': '#000',
        '--text-color': '#fff',
        '--btn-component-bg-focus': '#fff',
        '--btn-component-text-focus': '#000',
        '--border-color': '#fff',
        '--header-color': 'rgba(0, 0, 0,0.8)',


        '--first-theme-gradient': '#007bff',
        '--second-theme-gradient': '#e83e8c',
        '--third-theme-gradient': '#00F7F7',
        '--fourth-theme-gradient': '#ffc107',
        '--fifth-theme-gradient': '#fd7e14',
        '--sixth-theme-gradient': '#20c997',

        '--first-overlay': '#FEFAF6',
        '--second-overlay': '#E0E0E0',
    };


    const lightThemeColor = {
        '--body-bg': '#e0e0e0',
        '--component-bg': '#ffffff',
        '--text-color': '#263238',
        '--btn-component-bg-focus': '#DA0170',
        '--btn-component-text-focus': '#ffffff',
        '--border-color': '#90a4ae',
        '--header-color': 'rgba(255, 255, 255,0.8)',

        '--first-theme-gradient': '#DA0170',
        '--second-theme-gradient': '#EE99C2',
        '--third-theme-gradient': '#29ADB2',
        '--fourth-theme-gradient': '#4CC34F',
        '--fifth-theme-gradient': '#4D4C7D',
        '--sixth-theme-gradient': '#F99417',

        '--first-overlay': '#DA0170',
        '--second-overlay': '#874CCC',
    };

    const brownThemeColor = {
        '--body-bg': '#ECCA9C',
        '--component-bg': '#DAA879',
        '--text-color': '#3d291e',
        '--btn-component-bg-focus': '#5c3d30',
        '--btn-component-text-focus': '#fff',
        '--border-color': '#7B5228',
        '--header-color': 'rgba(236, 202, 156,0.8)',

        '--first-theme-gradient': '#E86260',
        '--second-theme-gradient': '#43766C',
        '--third-theme-gradient': '#453F78',
        '--fourth-theme-gradient': '#795458',
        '--fifth-theme-gradient': '#6D2932',
        '--sixth-theme-gradient': '#D24545',

        '--first-overlay': '#5C3D30',
        '--second-overlay': '#9B3922',
    };

    const blueThemeColor = {
        '--body-bg': '#e0f7fa',
        '--component-bg': '#ffffff',
        '--text-color': '#37474f',
        '--btn-component-bg-focus': '#2196f3',
        '--btn-component-text-focus': '#ffffff',
        '--border-color': '#90a4ae',
        '--header-color': 'rgba(224, 247, 250,0.8)',

        '--first-theme-gradient': '#874CCC',
        '--second-theme-gradient': '#C65BCF',
        '--third-theme-gradient': '#EEC759',
        '--fourth-theme-gradient': '#B1C381',
        '--fifth-theme-gradient': '#210062',
        '--sixth-theme-gradient': '#77037B',

        '--first-overlay': '#2196F3',
        '--second-overlay': '#9400FF',
    };

    const setTheme = (selectedTheme) => {
        Object.entries(selectedTheme).forEach(key => {
            document.documentElement.style.setProperty(key[0], key[1])
        })
    }

    lightTheme.addEventListener('click', (e) => {
        setTheme(lightThemeColor)
        logo.setAttribute('src', 'pictures/logo/lighttheme-logo.png')
    })

    darkTheme.addEventListener('click', (e) => {
        setTheme(darkThemeColor)
        logo.setAttribute('src', 'pictures/logo/darktheme-logo.png')

    })

    brownTheme.addEventListener('click', (e) => {
        setTheme(brownThemeColor)
        logo.setAttribute('src', 'pictures/logo/browntheme-logo.png')

    })

    blueTheme.addEventListener('click', (e) => {
        setTheme(blueThemeColor)
        logo.setAttribute('src', 'pictures/logo/bluetheme-logo.png')
    })
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
mainList.addEventListener('click', (e) => {
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

        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
})

hamburgerList.addEventListener('click', (e) => {
    const listName = ['About', 'Projects', 'Contacts']
    const listId = ['about', 'project', 'contact']

    if (e.target.classList.contains('home')) {
        while (hamburgerList.firstChild) {
            hamburgerList.removeChild(hamburgerList.firstChild);
        }
        mainSection.style.cssText = 'display:block;'
        nextContent.style.cssText = 'display:none;'
        header.style.cssText = 'animation:opacity 2s forwards;'


        for (let i = 0; i < listName.length; i++) {
            const createList = document.createElement('li')
            hamburgerList.appendChild(createList)

            const createAnchor = document.createElement('a')
            createAnchor.href = `#${listId[i]}`
            createAnchor.textContent = `${listName[i]}`
            createList.appendChild(createAnchor)
        }

        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
})

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
const projectDetails = [
    {
        image: 'pictures/project-card/ip-tracker.png',
        title: 'IP Address Tracker',
        subtitle: 'Mini Project',
        information: 'An app that tracks IP address details',
        stack: ['fa-html5', 'fa-css3', 'fa-square-js'],
        gitRef: 'https://github.com/KevinChristopherMorco/ip-address-tracker',
        liveRef: 'https://ip-address-tracker-phi-azure.vercel.app/',
        liveSite: true
    },

    {
        image: 'pictures/project-card/tip-calculator.png',
        title: 'Tip Calculator',
        subtitle: 'Mini Project',
        information: 'An app that calculates tip percentage and total.',
        stack: ['fa-html5', 'fa-css3', 'fa-square-js'],
        gitRef: 'https://github.com/KevinChristopherMorco/tip-calculator',
        liveRef: 'https://tip-calculator-wheat-zeta.vercel.app/',
        liveSite: true
    },
    
    {
        image: 'pictures/project-card/advice-app.png',
        title: 'Advice Generator App',
        subtitle: 'Mini Project',
        information: 'An app that generates random advice',
        stack: ['fa-html5', 'fa-css3', 'fa-square-js'],
        gitRef: 'https://github.com/KevinChristopherMorco/advice-generator-app',
        liveRef: 'https://advice-generator-app-sigma-umber.vercel.app/',
        liveSite: true
    },

    {
        image: 'pictures/project-card/time-tracker.png',
        title: 'Time Tracking Dashboard',
        subtitle: 'Web Design',
        information: 'A web template that allows users to track time.',
        stack: ['fa-html5', 'fa-css3', 'fa-square-js'],
        gitRef: 'https://github.com/KevinChristopherMorco/time-tracking-dashboard',
        liveSite: false
    },
]

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

for (let i = 0; i < projectDetails.length; i++) {
    const createMainContainer = createNewElement(projectCardContainer, 'div', ['project__card', 'wow', 'fadeInUp'])

    const createHeader = createNewElement(createMainContainer, 'div', ['project__header'])
    const createImageContainer = createNewElement(createHeader, 'div', ['project__image'])
    createNewElement(createImageContainer, 'img', null, ['src', `${projectDetails[i].image}`])

    const projectContent = createNewElement(createMainContainer, 'div', ['project__content'])
    const projectTitle = createNewElement(projectContent, 'div', ['project__title-pos'])

    const title = createNewElement(projectTitle, 'p')
    title.textContent = `${projectDetails[i].title}`
    const subtitle = createNewElement(projectTitle, 'p')
    subtitle.textContent = `${projectDetails[i].subtitle}`

    const projectInfo = createNewElement(projectContent, 'div', ['project__info'])
    projectInfo.textContent = `${projectDetails[i].information}`
    const projectStack = createNewElement(projectContent, 'div', ['project__stack'])
    const stackContainer = createNewElement(projectStack, 'ul')

    for (let j = 0; j < projectDetails[i].stack.length; j++) {
        const stackList = createNewElement(stackContainer, 'li')
        createNewElement(stackList, 'i', ['fa-brands', `${projectDetails[i].stack[j]}`])
    }

    const projectFooter = createNewElement(projectContent, 'div', ['project__footer'])
    if (projectDetails[i].liveSite === true) {
        const liveSite = createNewElement(projectFooter, 'a', ['project__live-site'], ['href', `${projectDetails[i].liveRef}`, 'target', '__blank'])

        createNewElement(liveSite, 'i', ['fa-solid', 'fa-gamepad'])
        const liveText = createNewElement(liveSite, 'p', ['project__live-site'])
        liveText.textContent = 'Live Site'

    }

    const gitSource = createNewElement(projectFooter, 'a', null, ['href', `${projectDetails[i].gitRef}`, 'target', '__blank'])
    createNewElement(gitSource, 'i', ['fa-solid', 'fa-code'])
    const gitText = createNewElement(gitSource, 'p')
    gitText.textContent = 'Source'
}


