// imprime 3 vezes
for (let i = 0; i < 3; i++) {
    console.log("hello world!")
}
/* console
hello world!
hello world!
hello world! */


// imprime 4 vezes
let imprime = "hello world!"
for (let i = 1; i < 5; i++) {
    console.log(`${i} ${imprime}`);
}
/* console
1 hello world!
2 hello world!
3 hello world!
4 hello world!*/


// imprime 5 vezes
function imprimeQuantidade(quantidade) {
    for (let i = 1; i <= quantidade; i++) {
        console.log(`${i} hello world!`);
    }
}
imprimeQuantidade(5);
/* console
1 hello world!
2 hello world!
3 hello world!
4 hello world!
5 hello world!*/

// imprime 6 vezes
const imprimeQtde = (quantidade) => {
    for (let i = 1; i <= quantidade; i++) {
        console.log(`${i} hello world!`);
    }
};

imprimeQtde(6);
/* console
1 hello world!
2 hello world!
3 hello world!
4 hello world!
5 hello world!
6 hello world!*/


//Imprime somatorio dos numeros inteiros entre 1 a 3
let num = 0
for (let i = 1; i < 4; i++) {
    num = num + i
}
console.log(num) // 6


// Tabuada de 5
let numero = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
/* console
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50*/

// calcular média
let numeros = [2,4,6,8]
let soma = 0
for(let i = 0; i < numeros.length; i++){
    soma = soma + numeros[i];
}
let media = soma / numeros.length;
console.log(media) // 5