// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    27: 'Escape'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];

    if (key == requiredKey) {

        konamiCodePosition++;

        if (konamiCodePosition == konamiCode.length) {
            connectCamera();
        }
    }
    else if(document.querySelector("img").src.search("cameras.jpg") > 0 && e.key === "Escape") {
        console.log("faire ici redirection");
        window.location.href = 'http://192.168.0.33:8080/csdfsf';
    }else {
        konamiCodePosition = 0;
    }
});

function connectCamera() {
    // document.body.style.backgroundImage = "url('images/cheatBackground.png')";

    // var audio = new Audio('audio/pling.mp3');
    // audio.play();
    alert("Connexion établie : Pour quitter Bouton échape quitter la vue des caméras");
    changePicture();

}
function changePicture() {
    const body = document.querySelector('body');
    const img = document.querySelector("body img");
    const img2 = document.createElement("img");
    img.src = "/img/cameras.jpg";
    body.appendChild(img2);
}
