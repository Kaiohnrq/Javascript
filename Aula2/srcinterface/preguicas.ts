import { Animals } from "./animals";

export class Preguicas implements Animals{
    
    nome: String;
    idade: Number;

    constructor(nome: String, idade: Number){
        this.nome = nome
        this.idade = idade
    }
    
    fazSom(): void {
    
        console.log("Faz barulho de periguicinha!")
    
    }
    
    corre(): void {
    
        console.log("escala arvores na velocidade da luz!")
    
    }
    
}