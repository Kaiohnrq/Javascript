const prompt = require("prompt-sync")()

console.log("***************************Calculo de salario e horas extras!***************************")

let codigoFuncionario = Number(prompt("Digite o seu código operador: "))

let horasTrabalhadas = Number(prompt("Digite o numero de horas trabalhadas: "))


let salario = 0
if(horasTrabalhadas > 50){
    let horaExtra = horasTrabalhadas - 50
    salario = horaExtra * 20 + (50*10)
    console.log(`Seu salário é: R$${salario}`)
} else {
    salario = horasTrabalhadas * 10
    console.log(`Seu salario é de R$${salario}`)
}