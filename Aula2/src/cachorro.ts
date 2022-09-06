import { Animal } from "./animal";

export class Cachorro extends Animal{

    emitirSom(): void {
    
        console.log("Au au au!")
    
    }

    locomocao(): void {

        console.log("~le Corre~")
    
    }

}