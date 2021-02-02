
let tailleArray = ["star tiny", "star normal", "star big"];
let haut = (window.innerHeight);
let larg = (window.innerWidth);
let numberStar = 100;
let body = document.querySelector('body');
function popstar() {
    var stellarnumb = 0;
    while (stellarnumb < nombreetoile) {
        var random = Math.floor(Math.random() * Math.floor(3));
        var Size = tailleArray[random];
        var pos_x = Math.round(Math.random() * larg);
        var pos_y = Math.round(Math.random() * haut);
        document.querySelector("body").innerHTML += `<div class="${Size}"
        style="top:${pos_y}%;left:${pos_x}%"></div>`;
        stellarnumb++;
    }
}
function displayStars() {
    for (var i = 0; i < numberStar; i++) {

        var span = document.createElement('span');
        span.classList.add("star", chooseStarClass());
        span.style.top = Math.round(90 * Math.random()) + '%';
        span.style.left = Math.round(100 * Math.random()) + '%';
        document.querySelector('.stars').appendChild(span);
    }
}

function chooseStarClass() {
    var starClass;
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        starClass = "tiny";
    } else if (randomNumber < 0.66) {
        starClass = "normal";
    } else {
        starClass = "big";
    }

    return starClass;
}
displayStars();

document.querySelector("button").addEventListener('click', () => {
    body.innerText = "";
    let img = document.createElement('img');
    img.src = '../img/start.png';
    img.id = 'cafete';
    body.appendChild(img);
    setTimeout(() => {
        console.log("change de page va a la 2 ");
    }, 4000);
})
