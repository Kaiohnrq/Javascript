const prompt = require("prompt-sync")()
var somaFilhos = 0
var somaSalario = 0
var mediaFilhos = 0
var mediaSalario = 0
var maiorSalario = 0
var percentual = 0
var sal100 = 0

for(i = 0; i < 5; i++){
    let salario = Number(prompt("Digite o seu salario em R$ "))
    let quantFilhos = Number(prompt("Digite a quantidade de filhos: "))

    if(salario < 100){
        sal100++
    }

    if(salario > maiorSalario){
        maiorSalario = salario
    }

    somaFilhos += quantFilhos
    somaSalario += salario
}

mediaFilhos = somaFilhos/5
mediaSalario = somaSalario/5
percentual = (sal100 * 100) / 5

console.log(`A media de salario é R$${mediaSalario}, a média de filhos é ${mediaFilhos}, o maior salario é de R$${maiorSalario}, porcentagem de pessoas que ganham ate R$100,00 é de ${percentual}%`)