const prompt = require("prompt-sync")()

let num = 233

do{
    console.log(num)
    if(num < 300){
        num++
    } else if(num >= 300 && num <= 400){
        num += 3
    } else {
        num+=5
    } 
} while (num <= 456)