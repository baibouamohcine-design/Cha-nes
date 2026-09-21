const prompt = require("prompt-sync")();
const enterAphrase= String(prompt("saiser votre phrace : "));
console.log(`phrase at miniscule:                ${enterAphrase}`)
let rs = ""
for(let i = 0 ; i < enterAphrase.length;i++){
    rs= enterAphrase.toUpperCase()
}
console.log(`phrase at majuscule :                ${rs}`)