

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

window.addEventListener('load', async () => {

    let select = ""

    let textpop = new Audio('/sons/textpop.mp3')
    let doublevote = new Audio('/sons/among-us-vote-sound-effect.mp3')
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
    doublevote.play()
    Array.from(document.querySelectorAll('.vote')).map(element => {
        if(select === element.id) return

        element.addEventListener("click", () => {
            select = element.id
            img.src = `/img/confirm${select}.jpg`

            document.querySelector(`.vote#${element.id}`).classList.remove('interact')
            document.querySelector(`.vote:not(#${element.id})`).classList.add('interact')

            Array.from(document.querySelectorAll(".confirm")).map(element => element.style.visibility = element.id === select ? "visible" : "hidden")
        })
    })
    Array.from(document.querySelectorAll('.reject')).map(element => {
        element.addEventListener("click", () => {
            if(element.id !== select) return

            img.src = `/img/voteeach.jpg`
            select = ""

            Array.from(document.querySelectorAll('.vote')).map(el => el.classList.add('interact'))
            Array.from(document.querySelectorAll('.confirm')).map(element => element.style.visibility = "hidden")
        })
    })
    Array.from(document.querySelectorAll('.valid')).map(element => {
        element.addEventListener("click", async () => {
            if(element.id !== select) return
            if(select === "orange") {
                window.location.href = "/page8"
            } else {
                window.location.href = "/page9"
            }
        })
    })
})
// let img=document.getElementById('img');
// let pink=document.getElementById('pink');
// let orange=document.getElementById('orange');
// let vPink=document.getElementById('vPink');
// let vOrange=document.getElementById('vOrange');

// let textpop=new Audio('../sons/textpop.mp3');
// let doublevote=new Audio('../sons/among-us-vote-sound-effect.mp3');



// setTimeout(() => {
//     img.setAttribute("src","../img/meetingchat.jpg");
//     textpop.play();
//     setTimeout(() => {
//         console.log('Marron est mort pile à la sortie de shields, et je soupçonne Rose parcequ’on était tous les trois à O² pour réparer le sabotage, ensuite je suis allé à Navigation pendant que Marron descendait vers Shields. ');
//         setTimeout(() => {
//             console.log('C’est donc forcément toi car je suis remonté vers caféteria après la crise avant de descendre à storage donc ça ne peut pas être moi. ');
//             setTimeout(() => {
//                 img.setAttribute("src","../img/voteeach.jpg");
//                 doublevote.play();
//                 pink.addEventListener('click', () => {
//                     img.setAttribute("src","../img/confirmpink.jpg");
//                     vPink.addEventListener('click', () => {
//                         alert("Loose");
//                     });
//                 });
//                 orange.addEventListener('click', () => {
//                     img.setAttribute("src","../img/confirmorange.jpg");
//                     vOrange.addEventListener('click', () => {
//                         alert("Win");
//                     });
//                 });
//             }, 500);
//         }, 1000);
//     }, 1000);
// }, 1000);
