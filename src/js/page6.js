window.addEventListener("load", () => {
    let report = new Audio('/songs/report.mp3')
    setTimeout(() => {
        report.play()
        setTimeout(() => {
            window.location.href = "/page7"
        }, 2000)
    }, 1000)
})