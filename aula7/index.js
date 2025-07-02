/*function imprime(num) {
    let fatorial = 1
    for (let i = 1; i <= num; i++) {
        fatorial = fatorial * i
 
    }
    console.log(fatorial)
}
imprime(3)
*/

const idade = parseFloat(prompt("informe sua idade: "));
if (isNaN(idade)) {
    console.log("digite uma idade válida")
} else if (idade < 12) {
    console.log("Você é uma criança")
} else if (idade < 18) {
    console.log("Você é um adolecente")
} else if (idade < 60) {
    console.log("Você é um adulto")
} else {
    console.log("Você é idoso")
}
