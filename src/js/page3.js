window.addEventListener('load', () => {
    let crisis = new Audio('/songs/crisis.mp3')
    setTimeout(() => {
        crisis.play()
        setTimeout(() => {
            window.location.href = "/page4"
        }, 2000)
    }, 500)
})