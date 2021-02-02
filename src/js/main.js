const originalWidth = 1280
const originalHeight = 720
const originalData = []


const setInteractionSize = () => {
    let img = document.querySelector('img:not(.ignore)')
    let div = document.querySelector('.interaction')
    let height = img.offsetHeight
    let width = img.offsetWidth

    if (img) {
        originalData.map(({ element, style }) => {
            Object.keys(style).map(key => {
                element.style[key] = `${width * style[key] / originalWidth}px`
            })
        })
    }

    if (div) {
        div.style.height = `${height}px`
        div.style.width = `${width}px`
    }

}

const setImageSize = () => {
    let img = document.querySelector('img:not(.ignore)')
    if(!img) return
    let windowHeight = document.body.offsetHeight
    let windowWidth = document.body.offsetWidth
    if ((originalWidth / originalHeight) * windowHeight > windowWidth) {
        img.style.height = `${windowWidth * (originalHeight / originalWidth)}px`
        img.style.width = `${windowWidth}px`
    } else {
        img.style.height = `${windowHeight}px`
        img.style.width = `${(originalWidth / originalHeight) * windowHeight}px`
    }
}

window.addEventListener('load', () => {
    Array.from(document.querySelectorAll('.interaction *')).map(element => {
        let style = element.style.cssText.split(';').reduce((object, value) => {
            let declaration = value.split(':').map(e => e.trim())
            let key = declaration[0]
            let size = declaration[1]
            if (!size || !size.includes("px") || !parseInt(size)) return object
            object[key] = parseInt(size)
            return object
        }, {})
        originalData.push({
            element,
            style
        })
    })
    setImageSize()
    setInteractionSize()
    window.addEventListener('resize', () => {
        setImageSize()
        setInteractionSize()
    })
})
