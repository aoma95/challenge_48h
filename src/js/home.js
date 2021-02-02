displayStars = (numberStar) => {
    Array.from(Array(numberStar), () => {
        let span = document.createElement('span')
        let random = Math.min(Math.floor(Math.random() * 2), 2)

        span.classList.add("star", !random ? "tiny" : random === 1 ? "normal" : big)
        span.style.top = `${Math.round(100 * Math.random())}%`
        span.style.left = `${Math.round(100 * Math.random())}%`

        document.querySelector('.stars').appendChild(span)
    })
}

window.addEventListener('load', () => {
    displayStars(100)

    document.querySelector("button").addEventListener('click', () => {
        document.querySelector('.stars').remove()
        document.querySelector('.main').remove()

        let img = document.createElement('img')
        img.src = '/img/start.jpg'
        document.body.insertBefore(img, document.querySelector('script'))

        setImageSize()
        setInteractionSize()

        setTimeout(() => {
            window.location.href = "/page2"
        }, 4000)
    })

})
