import { Animal } from "./animal";

export class Preguica extends Animal{
    
    emitirSom(): void {
    
        console.log("Barulho de preguiça")
    
    }
    
    locomocao(): void {
    
        console.log("Escalando arvores como uma preguiça!")
    
    }

    
}