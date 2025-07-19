// Funções matemáticas básicas
function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Erro: divisão por zero";
    return a / b;
}

// Decide a operação com base no operador
function operacao(n1, n2, op) {
    switch (op) {
        case '+': return soma(n1, n2);
        case '-': return subtrai(n1, n2);
        case '*': return multiplica(n1, n2);
        case '/': return divide(n1, n2);
        default: return 'operação inválida';
    }
}

const visor = document.getElementById('visor');

function adicionarNoVisor(valor) {
    visor.value += valor;
}

function limparVisor() {
    visor.value = '';
}

function calcularResultado() {
    const expressao = visor.value;
    const operadores = ['+', '-', '*', '/'];

    const operador = operadores.find(op => expressao.includes(op));
    if (!operador) return visor.value = "Expressão inválida";

    const partes = expressao.split(operador);
    if (partes.length !== 2) return visor.value = "Expressão inválida";

    const [n1, n2] = partes.map(Number);

    visor.value = operacao(n1, n2, operador);
}