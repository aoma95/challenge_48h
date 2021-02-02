/**
 * Permet que l'utilisateur trouve le MDP.
 */

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
        if(check.toLowerCase() === enigma.answer.toLowerCase()) {
            document.querySelector('img').src = "/img/map1.jpg"
            document.querySelector('#admin').remove()
            //redirect
        } else {
            counter--
            //afficher erreur
        }
        if(!counter) {
            alert("L'imposteur vous a tué.")
        }
    })
})
// function puzzleFonction() {
    
//     //Une liste des localisations de la carte de Amoung Us.
//     var locations = ["Admin", "Cafeteria", "Comminications", "Electrical", "Lower Engine", "Navigation", "MedBay", "O2", "Reactor", "Security", "Shields", "Storage", "Weapons"];
    
//     //Le MDP à trouver.
//     var password = "Avenir";
    
//     //Un conteur pour savoir combien d'essaye il nous reste encore.
//     //Note: Je ne sais pas si on va l'utiliser.
//     var counter = 3;
    
//     //Un texte pour afficher la réponse.
//     var text_resultat;

//     //NOus entrons enfin dans l'utilité de la function, on demande de trouver le MDP caché.
//     var find_password = prompt("Je suis toujours devant tout le monde, mais personne ne peut me voir. Qui suis-je ?");

//     //On a plusieurs conditions.
//     //La première permet de savoir si l'utilisateur à trouvé le mot de passe.
//     if (find_password == password) {
        
//         //Pour le 
//         //text_resultat = "Hein, mais comment vous m'avez trouvé? Vous êtes vraiment très perspicace!";
//         document.body.style.backgroundImage = "url(../img/map1.jpg)";
//         document.getElementById("test").remove();
//     } 
    
//     if (find_password != password) {
        
//         text_resultat = "Non c'est pas ça, il vous reste " + counter + " tentative.";

//     }

//     if (find_password == "") {

//         text_resultat = "";
//     }

//     if (find_password != password && counter == 0) {
        
//         text_resultat = "L'imposteur vous a tuer";
//     }

//     //document.getElementById("script").innerHTML = text_resultat;

// }
