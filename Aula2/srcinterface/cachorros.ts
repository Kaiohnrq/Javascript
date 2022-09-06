import { Animals } from "./animals";

export class Cachorros implements Animals{
    
    nome: String;
    idade: Number;

    constructor(nome: String, idade: Number){
        this.nome = nome
        this.idade = idade
    }
    
    
    fazSom(): void {
    
        console.log("Faz auauau!")
    
    }
    
    corre(): void {
    
        console.log("Corre")
    
    }
    
}