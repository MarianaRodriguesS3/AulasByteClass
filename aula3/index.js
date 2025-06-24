var posicao1 = 2
var posicao2 = 3
// soma
function soma(a, b) {
    //console.log(a + b)
    return a + b
}
soma(posicao1, posicao2)

// subtração
function subtrai(a, b) {
    return a - b
}
subtrai(posicao1, posicao2)

// TODO: fazer operações /, * e %
// TODO: tratar divisão por zero

//multiplicação
function multiplica(a, b) {
    return a * b;
}
multiplica(posicao1, posicao2);

//divisão
function divide(a, b) {
    if (b == 0) {
        return "Erro: divisão por zero";
    } return a / b;
}
divide(posicao1, posicao2);

//porcentagem
function percentual(a, b) {
    return (a / 100) * b;
}
percentual(posicao1, posicao2);

//media
function calculaMedia(a,b) {
    return (a + b) / 2;
}
calculaMedia(posicao1, posicao2);

function operacao(n1, n2, op) {
    if (op == '+') 
        return soma(n1, n2);
    else if (op == '-') 
        return subtrai(n1, n2);
    else if (op == '*') 
        return multiplica(n1, n2);
    else if (op == '/') 
        return divide(n1, n2);
    else if (op == '%') 
        return percentual(n1, n2);
    else if (op == 'media') 
        return calculaMedia(n1, n2);
    else 
    return 'operação inválida';
}

//testando
console.log("Operação +:", operacao(20, 10, '+'));
console.log("Operação -:", operacao(20, 10, '-'));
console.log("Operação *:", operacao(20, 10, '*'));
console.log("Operação /:", operacao(20, 10, '/'));
console.log("Operação / com zero:", operacao(20, 0, '/'));
console.log("Operação %:", operacao(20, 10, '%'));
console.log("Operação % com zero:", operacao(20, 0, '%'));
console.log("Operação media:", operacao(20, 10, 'media'));
console.log("Operação inválida:", operacao(20, 10, '^'));

var cadastro = {
    nome: "Mari",
    idade: 21
}
console.log(cadastro)
console.log(cadastro["nome"])
console.log(cadastro["idade"])
console.log(cadastro.nome)
console.log(cadastro.idade)
