const prompt =require("prompt-sync")();
const enterPhrase = String(prompt("entrer votre majuscules phrase : "))
console.log(enterPhrase)
let resultat = ""
for(let i = 0 ; i <enterPhrase.length;i++){
    resultat = enterPhrase.toLowerCase()
}
console.log(`votre miniscule phrase est :           ${resultat}`)
