const heroTheme = document.querySelector('.hero__theme-container')
const logo = document.querySelector('.nav__logo-container > img')

//Manipulate theme
const fetchTheme = async (e) => {
    await fetch('../json/theme.json').then(response => response.json()).then(themes =>
        {
            if(e.type === 'click'){
                renderTheme(e, themes)
            }
            if(e.type === 'load'){
                storageTheme(themes)
            }
        }).catch((error) => {
        console.error(error)
        console.log('Please contact the developer')
    })
}

const setTheme = (theme) => {
    Object.entries(theme).forEach(key => {
        document.documentElement.style.setProperty(key[0], key[1])
    })
}

const renderTheme = (e, themes) => {
    setState(e)
    switch (e.target.id) {
        case 'light-theme':
            setTheme(themes.lightThemeColor)
            logo.setAttribute('src', 'pictures/logo/lighttheme-logo.png')
            localStorage.setItem('logo', 'pictures/logo/lighttheme-logo.png')
            localStorage.setItem('theme', 'lightThemeColor')
            break;

        case 'dark-theme':
            setTheme(themes.darkThemeColor)
            logo.setAttribute('src', 'pictures/logo/darktheme-logo.png')
            localStorage.setItem('logo', 'pictures/logo/darktheme-logo.png')
            localStorage.setItem('theme', 'darkThemeColor')
            break;

        case 'brown-theme':
            setTheme(themes.brownThemeColor)
            logo.setAttribute('src', 'pictures/logo/browntheme-logo.png')
            localStorage.setItem('logo', 'pictures/logo/browntheme-logo.png')
            localStorage.setItem('theme', 'brownThemeColor')
            break;

        case 'blue-theme':
            setTheme(themes.blueThemeColor)
            logo.setAttribute('src', 'pictures/logo/bluetheme-logo.png')
            localStorage.setItem('logo', 'pictures/logo/bluetheme-logo.png')
            localStorage.setItem('theme', 'blueThemeColor')
            break;

        default:
            break;
    }

}
heroTheme.addEventListener('click', (e) => fetchTheme(e))

const storageTheme = (theme) => {
    const storageTheme = localStorage.getItem('theme')
    const storageLogo = localStorage.getItem('logo')
    if(storageTheme === null && storageLogo === null)return;

    logo.setAttribute('src', storageLogo)
    setTheme(theme[storageTheme])
    getState()
}

window.addEventListener('load', (e) => fetchTheme(e))

const setState = (e) => {
    if (e.target.classList.contains('hero__theme')) {
        const theme = Array.from(heroTheme.children);
        theme.forEach(theme => {
            theme.classList.remove('hero__theme--active')
        })
        e.target.classList.add('hero__theme--active')
        localStorage.setItem('activeState', JSON.stringify(theme.indexOf(e.target)))
    }
}

const getState = () => {
    const theme = Array.from(heroTheme.children)
    theme.forEach(theme => {
        theme.classList.remove('hero__theme--active')
    })
    const activeIndex = JSON.parse(localStorage.getItem('activeState'))
    theme[activeIndex].classList.add('hero__theme--active')
}
