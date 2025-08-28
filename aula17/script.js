// Escreva um programa que leia dois numeros e mostre a soma, a subtração, a multiplicação e a divisão entre eles.

let numeros = [10, 5];

function calcularOperacoes(numeros) {
    let num1 = numeros[0];
    let num2 = numeros[1];

    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = (num2 !== 0) ? (num1 / num2) : "Indefinida (divisão por zero)";

    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${subtracao}`);
    console.log(`Multiplicação: ${multiplicacao}`);
    console.log(`Divisão: ${divisao}`);
}
calcularOperacoes(numeros);

// Leia uma numero inteiro e mostre se ele é par ou impar.

let n = [1, 2, 3, 5];

function verificarParouImpar(n) {
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0) {
            console.log(`O numero ${n[i]} é par`)
        }
        else {
            console.log(`O numero ${n[i]} é impar`)
        }
    }
}
verificarParouImpar(n);

//Crie um algoritmo que peça a idade de uma pessoa e informe se ela é maior de idade ou não.

let idade = [10, 16, 18, 25];

function verificarIdade(idade) {

    for (let i = 0; i < idade.length; i++) {
        if (idade[i] < 18) {
            console.log(`${idade[i]} É menor de idade`)
        }
        else {
            console.log(`${idade[i]} É maior de idade`)
        }
    }
}
verificarIdade(idade);

// Leia 3 numeros e mostre qual é o maior e qual é o menor.

let num = [10, 20, 30];

function verificarMaiorMenor(numeros) {
    if (numeros[0] > numeros[1] && numeros[0] > numeros[2]) {
        console.log(`O número ${numeros[0]} é o maior`);
    } else if (numeros[1] > numeros[0] && numeros[1] > numeros[2]) {
        console.log(`O número ${numeros[1]} é o maior`);
    } else {
        console.log(`O número ${numeros[2]} é o maior`);
    }

    if (numeros[0] < numeros[1] && numeros[0] < numeros[2]) {
        console.log(`O número ${numeros[0]} é o menor`);
    } else if (numeros[1] < numeros[0] && numeros[1] < numeros[2]) {
        console.log(`O número ${numeros[1]} é o menor`);
    } else {
        console.log(`O número ${numeros[2]} é o menor`);
    }
}
verificarMaiorMenor(num);
