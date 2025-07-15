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

function adicionarNoVisor(valor) {
    document.getElementById('visor').value += valor;
    //document.getElementById('visor').value = document.getElementById('visor').value + valor;

}