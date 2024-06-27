const cardTemplate = document.querySelector('#card__template')
const projectCardContainer = document.querySelector('.project__card-container')

const fetchProject = () => {
    fetch('../../json/projects.json').then(response => response.json()).then(projectData => renderProject(projectData)).catch((error) => {
        console.error(error)
        console.log('Please contact the developer')
    })
}

const renderProject = (projectData) => {
    for (let i = 0; i < projectData.length; i++) {
        const {image,title,subtitle,information,stack,gitRef,liveRef,liveSite} = projectData[i]
        const cardNode = cardTemplate.content.cloneNode(true)
        cardNode.querySelector('.project__header .project__image >img').setAttribute('src',image)
        cardNode.querySelector('.project__content .project__title-pos > p:nth-of-type(1)').textContent = title
        cardNode.querySelector('.project__content .project__title-pos > p:nth-of-type(2)').textContent = subtitle
        cardNode.querySelector('.project__content .project__info').textContent = information
        const listContainer = cardNode.querySelector('.project__stack > ul')

        for(let j = 0; j<stack.length;j++){
            const list = document.createElement('li')
            const icon = document.createElement('i')
            icon.classList.add(`fa-brands`,stack[j])
            list.appendChild(icon)
            listContainer.appendChild(list)
        }

        cardNode.querySelector('.project__footer .project__live-site').setAttribute('href', liveRef)
        cardNode.querySelector('.project__footer .project__git').setAttribute('href', gitRef)

        if(liveSite != true){
             cardNode.querySelector('.project__footer .project__live-site').remove()
        }
        projectCardContainer.appendChild(cardNode)
    }
}
window.addEventListener('load',fetchProject)
