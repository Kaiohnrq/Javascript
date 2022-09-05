const prompt = require("prompt-sync")()
let excesso = 0
let multa = 0

console.log("Calculo de peso e multa sobre tomate!")

let peso = Number(prompt("Digite o peso do tomate: "))

excesso = peso - 50

if(excesso > 0){
    multa = 4 * excesso
} else {
    excesso = 0
}

console.log(`O peso dos tomates é de ${peso}kg, teve um excesso de ${excesso}, o valor da multa causado pelo excesso é de ${multa}`)

