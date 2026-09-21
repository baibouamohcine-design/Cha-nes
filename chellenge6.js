
const prompt =require("prompt-sync")();
const enterPhrase = String(prompt("saiser votre phrace pour  affiche combien de fois le caractère apparaît dans la chaîne: "))
const lettreWantCheck =String(prompt("Saiser votre  caractére : "))
let counter = 0
for(let i = 0 ; i < enterPhrase.length;i++){
    if(lettreWantCheck === enterPhrase[i]){
        counter++
    }
}
console.log(`son charachter ${lettreWantCheck} et nombre de cette charachter est : ${counter}`)