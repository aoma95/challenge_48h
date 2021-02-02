const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

window.addEventListener('load', async () => {

    let select = ""

    let expulsion = new Audio('/songs/expulsion.mp3')
    let textpop = new Audio('/songs/textpop.mp3')
    let vote = new Audio('/songs/among-us-vote-sound-effect.mp3')
    let win = new Audio('/songs/win.mp3')
    let loose = new Audio('/songs/loose.mp3')
    let img = document.querySelector('img')

    await sleep(1000)
    textpop.play()
    img.src = "/img/meetingchat.jpg"

    await sleep(1000)
    console.log('Marron est mort pile à la sortie de shields, et je soupçonne Rose parcequ’on était tous les trois à O² pour réparer le sabotage, ensuite je suis allé à Navigation pendant que Marron descendait vers Shields.')

    await sleep(1000)
    console.log("C'est donc forcément toi car je suis remonté vers caféteria après la crise avant de descendre à storage donc ça ne peut pas être moi.")

    await sleep(1000)
    img.src = "/img/voteeach.jpg"
    vote.play()
    await sleep(300)
    vote.play()
    Array.from(document.querySelectorAll('.vote')).map(element => {
        element.classList.add("interact")
        vote.play()
        element.addEventListener("click", () => {
            if (select === element.id) return
            select = element.id
            img.src = `/img/confirm${select}.jpg`

            document.querySelector(`.vote#${element.id}`).classList.remove('interact')
            document.querySelector(`.vote:not(#${element.id})`).classList.add('interact')

            Array.from(document.querySelectorAll(".confirm")).map(element => element.style.visibility = element.id === select ? "visible" : "hidden")
        })
    })
    Array.from(document.querySelectorAll('.reject')).map(element => {
        element.addEventListener("click", () => {
            if (element.id !== select) return

            img.src = `/img/voteeach.jpg`
            select = ""

            Array.from(document.querySelectorAll('.vote')).map(el => el.classList.add('interact'))
            Array.from(document.querySelectorAll('.confirm')).map(element => element.style.visibility = "hidden")
        })
    })
    Array.from(document.querySelectorAll('.valid')).map(element => {
        element.addEventListener("click", async () => {
            if (element.id !== select) return
            Array.from(document.querySelectorAll('#orange')).map(el => el.remove())
            Array.from(document.querySelectorAll('#pink')).map(el => el.remove())
            console.log(`${select} was ejected!`)
            img.src = `/img/${select}eject.jpg`
            expulsion.play()
            await sleep(3000)
            if (select === "orange") {
                img.src = `/img/win.jpg`
                win.play()
            } else {
                img.src = `/img/defeat.jpg`
                loose.play()
            }
            Array.from(document.querySelectorAll('.interact')).map(el => el.addEventListener('click', () => window.location.href = "/"))
        })
    })
})