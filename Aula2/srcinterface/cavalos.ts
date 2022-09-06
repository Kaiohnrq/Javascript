import { Animals } from "./animals";

export class Cavalos implements Animals{
    
    nome: String;
    idade: Number;

    constructor(nome: String, idade: Number){
        this.nome = nome
        this.idade = idade
    }
    
    fazSom(): void {
    
        console.log("Relincha!!!")
    
    }
    
    corre(): void {
    
        console.log("Galopa galopa")
    
    }
    
}