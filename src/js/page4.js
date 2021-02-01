const originalWidth = 1280
const originalHeight = 720
const originalData = []


const setInteractionSize = () => {
    let img = document.querySelector('img')
    let div = document.querySelector('.interaction')

    let height = img.offsetHeight
    let width = img.offsetWidth

    div.style.height = `${height}px`
    div.style.width = `${width}px`

    originalData.map(({element, style}) => {
        Object.keys(style).map(key => {
            element.style[key] = `${width * style[key] / originalWidth}px`
        })
    })
}

const setImageSize = () => {
    let windowHeight = document.body.offsetHeight
    let windowWidth = document.body.offsetWidth
    let img = document.querySelector('img')
    if((originalWidth / originalHeight) * windowHeight > windowWidth) {
        img.style.height = `${windowWidth * (originalHeight / originalWidth)}px`
        img.style.width = `${windowWidth}px`
    } else {
        img.style.height = `${windowHeight}px`
        img.style.width = `${(originalWidth / originalHeight) * windowHeight}px`
    }
}

const changeCode = (number) => {
    let input = document.querySelector('.input')
    if(input.innerText.length >= 8) return
    input.innerText+=number
}

const generateCode = (number) => {
    let power = Array.from(Array(number)).reduce((a) => a * 10, 1)
    return Math.floor(Math.random() * power)
}

window.onload = () => {
    let password = generateCode(8)
    let key = generateCode(1)
    document.querySelector(".code").innerText = `${password} ${key}`

    Array.from(document.querySelectorAll('.interaction *')).map(element => {
        let style = element.style.cssText.split(';').reduce((object, value) => {
            let declaration = value.split(':').map(e => e.trim())
            let key = declaration[0]
            let size = declaration[1]
            if(!size || !size.includes("px") || !parseInt(size)) return object
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
    Array.from(document.querySelectorAll(".key-digit")).map(element => {
        element.addEventListener("click", () => {
            changeCode(element.id)
        })
    })
    document.querySelector('.key-cancel').addEventListener("click", () => {
        document.querySelector('.input').innerText = ""
    })
    document.querySelector('.key-submit').addEventListener("click", () => {
        
    })
}