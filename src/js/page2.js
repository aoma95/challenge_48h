window.addEventListener('load', () => {
    let code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let index = 0
    document.addEventListener('keydown', (e) => {
        if(![...code, 'Escape'].includes(e.key)) return
        e.preventDefault()
        if(index === code.length && e.key === "Escape") {
            window.location.href = "/page3"
        } else if(index !== code.length && code[index] === e.key) {
            index++
        } else {
            index = 0
        }
        if(index === code.length) {
            document.querySelector('img').src = "/img/cameras.jpg"
        }
    })
})