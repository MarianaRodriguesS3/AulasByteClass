/* Escreva um programa que leia dois numeros e mostre a 
soma, a subtração, a multiplicação e a divisão entre eles. */

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
    console.log(`Divisão: ${divisao}\n`);
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
        console.log(`\nO número ${numeros[0]} é o maior`);
    } else if (numeros[1] > numeros[0] && numeros[1] > numeros[2]) {
        console.log(`\nO número ${numeros[1]} é o maior`);
    } else {
        console.log(`\nO número ${numeros[2]} é o maior`);
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

// Mostre a tabuada de um numero informado pelo usuário (de 1 a 10).

let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calcularTabuada(tabuada) {
    for (let i = 0; i < tabuada.length; i++) {
        console.log(`\nTabuada de ${tabuada[i]}:`);
        for (let t = 1; t <= 10; t++) {
            console.log(`${tabuada[i]} x ${t} = ${tabuada[i] * t}`);
        }
    }
}
calcularTabuada(tabuada);

// Calcule a soma dos numeros de 1 a 100 usando um laço de repetição.

function somadeUmaCem() {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
        soma += i;
    }
    return soma;
}

let resultado = somadeUmaCem();
console.log(`\nA soma de 1 a 100 é: ${resultado}`);

// Peça um numero inteiro positivo e calcule o seu fatorial.

function calcularFatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(`\n5! = ${calcularFatorial(5)}`);

// Faça um programa que leia vários numeros até que o usuário digite 0. No final, mostre a média deles.

function calcularMediaAteZero(mediaNumeros) {
    let soma = 0;
    let quantidade = 0;

    for (let i = 0; i < mediaNumeros.length; i++) {
        if (mediaNumeros[i] === 0) {
            break;  // Para o loop ao encontrar 0
        }
        soma += mediaNumeros[i];
        quantidade++;
    }
    let media = soma / quantidade;
    console.log(`\nA média dos números digitados é: ${media}`);
    return media;

}
let mediaNumeros = [10, 20, 30, 0];
calcularMediaAteZero(mediaNumeros);

// Leia 10 numeros e armazene-os em um vetor. Depois mostre apenas os numeros pares.

let seqNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostraNumPares(numeros) {

    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }

    return pares;
}
let numerosPares = mostraNumPares(seqNumeros);
console.log(`\nNúmeros pares da sequência:`, numerosPares);

// Leia uma matriz 3x3 e mostre a soma dos elementos da diagonal principal.

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i]; // soma elementos da diagonal principal
    }
    return soma;
}

let resultadoSoma = somaDiagonalPrincipal(matriz);
console.log(`\nA soma da diagonal principal é: ${resultadoSoma}`);

// Crie um programa que leia 5 nomes e os imprima em ordem alfabética.

let nomes = ["Lucas", "Ana", "Bruna", "Pedro", "Mariana"];

function criaNovoVetorOrdenado(nomes) {

    // Cria uma cópia ordenada do vetor sem modificar o vetor original
    let nomesOrdenados = [...nomes].sort();

    console.log("\nNovo vetor em ordem alfabética:\n", nomesOrdenados);
}
criaNovoVetorOrdenado(nomes);

function exibeNomesOrdenados(nomes) {
    // modifica o vetor original
    nomes.sort();

    console.log(`\nNomes em ordem alfabética:`);
    for (let i = 0; i < nomes.length; i++) {
        console.log(nomes[i]);
    }
}
exibeNomesOrdenados(nomes);

// Leia 2 vetores de 5 elementos e gere um terceiro vetor com a soma dos elementos de mesmo índice.

let vetorA = [10, 20, 30, 40, 50];
let vetorB = [10, 20, 30, 40, 50];

function somaElementosMesmoIndice(vetorA, vetorB) {
    let vetorSoma = [];

    for (let i = 0; i < vetorA.length; i++) {
        vetorSoma.push(vetorA[i] + vetorB[i]);
    }

    return vetorSoma;
}
let vetorC = somaElementosMesmoIndice(vetorA, vetorB);
console.log(`\nlet vetorC =`, vetorC);

// Crie uma função que receba um número e retorne True se ele for primo, senão False.
let numPrimos = [1, 2, 3, 4, 7, 10, 13];

function isPrime(n) {
    if (!Number.isInteger(n)) return false;
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    const limit = Math.floor(Math.sqrt(n))
    for (let d = 3; d <= limit; d += 2) {
        if (n % d === 0) return false;
    }
    return true;
}
for (let i = 0; i < numPrimos.length; i++) {
    const num = numPrimos[i];
    if (isPrime(num)) {
        console.log(`${num} é primo`);
    } else {
        console.log(`${num} não é primo`);
    }
}

/* Implemente uma função que calcule o MDC 
(máximo divisor comum) de dois números. */
 
function mdc(a, b) {
    while (b !== 0) {
        let resto = a % b // calcula o resto
        a = b;
        b = resto;
    }
    return a;
}

let vetorMDC = [
    { num1: 48, num2: 18 },
    { num1: 100, num2: 25 },
    { num1: 42, num2: 56 }
];

for (let i = 0; i < vetorMDC.length; i++) {
    let { num1, num2 } = vetorMDC[i];
    console.log(`O MDC de ${num1} e ${num2} é ${mdc(num1, num2)}`);
}

/* Escreva um programa que simule uma calculadora 
simples usando funções. (Feito em um arquivo separado) */

/* Resolva o problema clássico: dado um número de 
passos N, de quantas maneiras uma pessoa pode subir 
a escada se ela pode dar 1 ou 2 passospor vez? */

/* Crie um programa que gere os primeiros N números 
da sequência de Fibonacci. */

/* Um banco precisa calcular o rendimento mensal de 
uma aplicação com juros compostos. Peça o capital 
inicial, a taxa de juros e o número de meses, e 
mostre o valor final. */

// Vetor de objetos
const aplicacoes = [
    { capital: 1000, taxa: 2, meses: 6 },
    { capital: 5000, taxa: 1.5, meses: 12 },
    { capital: 2000, taxa: 3, meses: 4 }
];

function simularJurosCompostos(aplicacoes) {
    console.log(`\nSimulações de Juros Compostos:`);

    for (let i = 0; i < aplicacoes.length; i++) {
        const capital = aplicacoes[i].capital;
        const taxa = aplicacoes[i].taxa;
        const meses = aplicacoes[i].meses;

        const taxaDecimal = taxa / 100;
        const montante = capital * Math.pow(1 + taxaDecimal, meses);
        // Math.pow: calcula potencia

        console.log(`\nExemplo ${i + 1}`);
        console.log(`Capital Inicial: R$ ${capital.toFixed(2)}`);
        console.log(`Taxa de Juros: ${taxa}% ao mês`);
        console.log(`Tempo: ${meses} meses`);
        console.log(`Montante Final: R$ ${montante.toFixed(2)}`);
    }
}
simularJurosCompostos(aplicacoes);


/* Um robô está em um tabuleiro 5x5 na posição inicial 
(0,0). Ele pode receber uma sequência de comandos 
('C' = cima, 'B' = baixo, 'E' = esquerda, 'D' = direita).
Após a execução dos comandos, mostre a posição final do robô. */

function posicaoFinal(comandos) {
    const tamanho = 5;
    let coluna = 0;
    let linha = 0;

    for (let i = 0; i < comandos.length; i++) {
        let comando = comandos[i].toLowerCase();
        // toLowerCase: É um método de string usado para converter todas as letras de uma string para letras minúsculas.

        switch (comando) {
            case 'cima':
                if (linha > 0) linha--;
                break;
            case 'baixo':
                if (linha < tamanho - 1) linha++;
                break;
            case 'esquerda':
                if (coluna > 0) coluna--;
                break;
            case 'direita':
                if (coluna < tamanho - 1) coluna++;
                break;
            default:
                console.log(`Comando inválido: ${comando}`);
        }
    }

    console.log(`\nPosição final do robô: (${linha}, ${coluna})\n`);

    // Mostra o tabuleiro com coordenadas
    for (let l = 0; l < tamanho; l++) {
        let linhaTexto = "";
        for (let c = 0; c < tamanho; c++) {
            if (l === linha && c === coluna) {
                linhaTexto += ` R `;
            } else {
                linhaTexto += `${l},${c}`;
            }

            if (c < tamanho - 1) {
                linhaTexto += " | ";
            }
        }
        console.log(linhaTexto);
    }
}
posicaoFinal(['direita', 'direita', 'baixo', 'baixo', 'cima', 'esquerda']);

/* Crie um programa que leia um texto e informe quantas vogais,
consoantes, digitos e espaços existem nele. */

function analisarTexto(texto) {
    let vogais = 0;
    let consoantes = 0;
    let digitos = 0;
    let espacos = 0;

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];

        if ('aeiou'.includes(char)) {
            vogais++;
        } else if (char >= 'a' && char <= 'z') {
            consoantes++;
        } else if (char >= '0' && char <= '9') {
            digitos++;
        } else if (char === ' ') {
            espacos++;
        }
    }
    console.log(`\nTexto analisado: "${texto}"`);
    console.log(`Vogais: ${vogais}`);
    console.log(`Consoantes: ${consoantes}`);
    console.log(`Dígitos: ${digitos}`);
    console.log(`Espaços: ${espacos}`);
}
const texto = ("Hoje é dia 03 de Setembro, 2025!").toLowerCase();
analisarTexto(texto);

