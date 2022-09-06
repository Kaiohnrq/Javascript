import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";
import { Cachorros } from "./srcinterface/cachorros";
import { Cavalos } from "./srcinterface/cavalos";
import { Preguicas } from "./srcinterface/preguicas";

// EXERCICIO COM ABSTRACT CLASS

/*
let animal1 = new Cachorro("Max", 10)

let animal2 = new Cavalo("Jorginho", 4)

let animal3 = new Preguica("Rosvaldo", 4)

animal1.emitirSom()
animal1.locomocao()

animal2.emitirSom()
animal2.locomocao()

animal3.emitirSom()
animal3.locomocao()
*/

// EXERCICIO COM INTERFACE

let animal1 = new Cachorros("joazin", 3)

let animal2 = new Cavalos("gemeremias", 3)

let animal3 = new Preguicas("Berin", 3)


animal1.fazSom()
animal1.corre()

animal2.fazSom()
animal2.corre()

animal3.fazSom()
animal3.corre()

