function soma(a, b) {
    return a + b;
}

function subtrai(a, b){
    return a - b;
}

function multiplica(a, b){
    return a * b;
}

function divide(a,b){
    if (b === 0) return "Erro: divisão por zero";
    return a / b;
}

function operacao(n1, n2, op) {
    if (op == '+')
        return soma(n1, n2);
    else if (op == '-')
        return subtrai(n1, n2);
    else if (op == '*')
        return multiplica(n1, n2);
    else if (op == '/')
        return divide(n1, n2);
    else
        return 'operação inválida';
}

console.log("Operação +:", operacao(20, 10, '+'));
console.log("Operação -:", operacao(20, 10, '-'));
console.log("Operação *:", operacao(20, 10, '*'));
console.log("Operação /:", operacao(20, 10, '/'));
console.log("Operação / com zero:", operacao(20, 0, '/'));

let numeros = [1, 2, 3, 4];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`O numero ${numeros[i]} é par`)
    }
    else {
        console.log(`O numero ${numeros[i]} é impar`)
    }
}

let idade = [10, 16, 18, 25];
for (let i = 0; i < idade.length; i++) {
    if (idade[i] < 18) {
        console.log(`${idade[i]} É menor de idade`)
    }
    else {
        console.log(`${idade[i]} É maior de idade`)
    }
}

let num = [10, 20, 30];
for (let i = 0; i < num.length; i++) {
    if (num[0] > num[1] && num[0] > num[2]) {
        console.log(`O numero ${num[0]} é o maior`)
    }
    if (num[1] > num[0] && num[1] > num[2]) {
        console.log(`O numero ${num[1]} é o maior`)
    }
    else {
        console.log(`O numero ${num[2]} é o maior`)
    }
}