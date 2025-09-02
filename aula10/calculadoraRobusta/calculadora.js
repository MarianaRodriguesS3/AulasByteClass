function adicionarNoVisor(valor) {
    document.getElementById('visor').value += valor;
    //document.getElementById('visor').value = document.getElementById('visor').value + valor;

}

function limparVisor() {
    document.getElementById('visor').value = '';
}

function limparEntrada() {
    const visor = document.getElementById('visor');
    if (visor.value.length > 0) {
        visor.value = visor.value.slice(0, -1);
    }
}

function calcularResultado() {
    try {
        let expressao = document.getElementById('visor').value;

        expressao = expressao.replace(/(\d+(\.\d+)?)%(\d+(\.\d+)?)/g, '($1/100)*$3');

        let resultado = eval(expressao);
        document.getElementById('visor').value = resultado;
    } catch (erro) {
        document.getElementById('visor').value = 'Erro';
    }
}

function apagarUltimo() {
    let visor = document.getElementById('visor');
    visor.value = visor.value.slice(0, -1);
}

let parentesesAberto = true;
function inserirParenteses() {
    if (parentesesAberto) {
        adicionarNoVisor('(');
    } else {
        adicionarNoVisor(')');
    }
    parentesesAberto = !parentesesAberto;
}

