
const changeCode = (number) => {
    let input = document.querySelector('.input')
    if (input.innerText.length >= 8) return
    input.innerText += number
}

const power = (number, power = 0) => !power ? 1 : Array.from(Array(power)).reduce((a) => a * number, 1)

const generateCode = (number) => {
    let power = Array.from(Array(number)).reduce((a) => a * 10, 1)
    let int = Math.floor(Math.random() * power)
    return (`${int}`.length !== number || !int) ? generateCode(number) : int
}

const crypt = (password, key) => `${password}`.split('').reverse().reduce((prev, value, index) => {
    let v = (parseInt(value) + key) % 10
    v = v < 0 ? v + 10 : v
    return prev + v * power(10, index)
}, 0)

window.onload = () => {
    let password = generateCode(8)
    let key = generateCode(1, true)
    document.querySelector(".code").innerText = `${password} ${key}`

    let crisis = new Audio('../songs/crisis.mp3')
    crisis.volume = .1
    crisis.loop = true
    crisis.play()

    Array.from(document.querySelectorAll(".key-digit")).map(element => {
        element.addEventListener("click", () => {
            changeCode(element.id)
        })
    })
    document.querySelector(".close").addEventListener("click", () => {
        window.location.href = "/page3"
    })
    document.querySelector('.key-cancel').addEventListener("click", () => {
        document.querySelector('.input').innerText = ""
    })
    document.querySelector('.key-submit').addEventListener("click", () => {
        if (parseInt(document.querySelector(".input").innerText) === crypt(password, key)) {
            window.location.href = "/page5"
        } else {
            document.querySelector('.input').innerText = ""
        }
    })
}
