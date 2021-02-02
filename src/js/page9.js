const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

window.addEventListener('load', async () => {
    await sleep(1000)
    Array.from(document.querySelectorAll('.interact')).map(element => element.style.visibility = "visible")
    document.querySelector('img').src = "/img/defeat.jpg"
    document.querySelector('#replay').addEventListener('click', () => {
        alert("replay")
    })
    document.querySelector('#leave').addEventListener('click', () => {
        alert("leave")
    })
})