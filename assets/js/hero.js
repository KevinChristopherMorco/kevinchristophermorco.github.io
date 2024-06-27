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

window.addEventListener('load', imageLoad)