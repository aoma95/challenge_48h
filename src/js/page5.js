window.addEventListener('load', () => {
    let counter = 3
    let riddles = [
        {
            question: "Je suis toujours devant tout le monde, mais personne ne peut me voir. Qui suis-je ?",
            answer: "avenir"
        }
    ]

    let enigma = riddles[Math.round(Math.random() * (riddles.length - 1))]

    document.querySelector('#admin').addEventListener('click', () => {
        let check = prompt(enigma.question)
        if (!check) return
        if (check.toLowerCase() === enigma.answer.toLowerCase()) {
            document.querySelector('img').src = "/img/map.jpg"
            document.querySelector('#admin').remove()
            window.location.href = "/page6"
        } else {
            counter--
            alert(`Mot de passe incorrect, il vous reste ${counter} essai${counter > 1 ? "s" : ""}`)
        }
        if (!counter) {
            alert("L'imposteur vous a tué.")
            window.location.href = "/"
        }
    })
})
