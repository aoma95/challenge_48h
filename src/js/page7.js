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



window.addEventListener('load', async () => {

    const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
    
    await sleep(1000)
    alert("test")
})
