var posicao1 = 2
var posicao2 = 3

function soma(a, b) {
    console.log(a + b)
    return a + b
}
soma(posicao1, posicao2)

function subtrai(a, b) {
    return a - b
}
subtrai(posicao1, posicao2)

// TODO: fazer operações /, * e %
// TODO: tratar divisão por zero
function operacao(n1,n2,op){
    if (op == '+')
        return soma(n1,n2);
    else if (op == '-')
        return subtrai(n1,n2);
    else 
        return 'operação inválida'
}

operacao(20,10,'+')

var cadastro = {
    nome: "Mari",
    idade: 21
}
console.log(cadastro)
console.log(cadastro["nome"])
console.log(cadastro["idade"])
console.log(cadastro.nome)
console.log(cadastro.idade)