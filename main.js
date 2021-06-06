// Exo 01
// Créez un bouton en JS avec une valeur Je suis un bouton
// Au clique la valeur du bouton devient j'ai été cliqué
let myBody = document.querySelector("body");
let bouton = document.createElement("button");
bouton.textContent = ("je suis un bouton")
myBody.appendChild(bouton);
bouton.addEventListener("click", () => {
    bouton.textContent = "j'ai cliquer"
})



// Exo 02
// Créer un 2eme button
// Au clique la valeur du button devient j'ai été cliqué x fois le x est le nombre de clique effectué.let myBody = document.querySelector("body");
let bouton2 = document.createElement("button");
bouton2.textContent = ("je suis un bouton")
myBody.appendChild(bouton2);

let x = 0

bouton2.addEventListener("click", () => {
    x += 1;
    bouton2.textContent = `jai ete cliquer ${x} fois`
})





//   Exo 03
// > Créer un button a qui vous assignerez l'écouteur d'évenement click qui rajoutera un titre dans votre page web
let bouton3 = document.createElement("button")
bouton3.textContent = "je suis un bouton";
myBody.appendChild(bouton3);

bouton3.addEventListener("click", () => {
    let titre = document.createElement("h1")
    myBody.appendChild(titre)
    titre.textContent = "je suis un titre"
})









//   Exo 04
// > Créer un buttton, assigner l'écouteur d'évenement click. Ce bouton rajoutera un button dans votre page web avec comme valeur Exo 04
let bouton4 = document.createElement("button")
bouton4.textContent = "je suis un bouton";
myBody.appendChild(bouton4);

bouton4.addEventListener("click", () => {
    let titre1 = document.createElement("button")
    myBody.appendChild(titre1)
    titre1.textContent = "exo 4"
})





//   Exo 05
// > Créez un paragraphe avec du texte
// > Créez un button "modifier la couleur du paragraphe"
// > Au clique ça changera la couleur du paragraphe
let para = document.createElement("p");
para.textContent = "aoidfhafiohafiofpa";
let bouton5 = document.createElement("button");
bouton5.textContent = "modifier";
myBody.appendChild(bouton5);
myBody.appendChild(para);

bouton5.addEventListener("click", () => {
    para.style.color = "red"
})




//   Exo 6
// > Etape 1 :
// > Créer un button qui crée un h2 avec une valeur "Je lance une function"
// > Rajouter le titre sur la page web
// > Etape 2 :
// > Cette function doit également rajouter un boutton avec comme valeur "Modifier le titre Exo 06"
// > Etape 3 :
// > le bouton "Modifier le titre" lance une function qui modifie le texte en lui mettant sa couleur en rouge.
let bouton6 = document.createElement("button")
bouton6.textContent = "je suis un bouton";
myBody.appendChild(bouton6);

bouton6.addEventListener("click", () => {
    let titre2 = document.createElement("h2")
    titre2.textContent = "je lance une function"
    myBody.appendChild(titre2)
    let button7 = document.createElement("button")
    button7.textContent = "Modifier le titre Exo 06"
    myBody.appendChild(button7)
    button7.addEventListener("click", () => {
        let bolCouleur = ["green", "blue", "red", "purple", "yellow"]
        let randomColor = bolCouleur[Math.floor(Math.random()* bolCouleur.length)]
        titre2.style.color = randomColor;
    })
})