window.onload = function () {
    // Verifica se a página atual é index.html
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        alert('Hello World!');
        const nome = prompt("Qual é o seu nome?");
        const titulo = document.getElementById("titulo");

        if (titulo) { // garante que o elemento exista
            if (nome && nome.trim() !== "") {
                titulo.textContent = `Olá, ${nome}! Seja bem-vindo(a)!`;
            } else {
                titulo.textContent = "Bem-Vindo!";
            }
        }
    }
};

// console
function somar(a, b) {
    const resultado = a + b;
    console.log("Resultado da soma:", resultado);
}
somar(5, 3);

// console
function contador() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
contador();

// console
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} é par.`);
    } else {
        console.log(`${numero} é ímpar.`);
    }
}
verificarParOuImpar(7);
verificarParOuImpar(12);

function adicionarTarefa() {
    const input = document.getElementById('novaTarefa');
    const tarefa = input.value.trim();

    if (tarefa !== '') {
        const li = document.createElement('li');
        li.textContent = tarefa;

        document.getElementById('listaDeTarefas').appendChild(li);

        input.value = '';
        input.focus();
    }
}

function atualizarRelogio() {
    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const horaAtual = `${horas}:${minutos}:${segundos}`;
    //console.log("olha aqui:", agora)
    document.getElementById('relogio').textContent = horaAtual;
}
//atualizarRelogio();

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);



// Número secreto aleatório de 1 a 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function verificarPalpite() {
    const input = document.getElementById('palpite');
    const mensagem = document.getElementById('mensagem');
    const palpite = Number(input.value);
    console.log("olha aqui", input)
    if (!palpite || palpite < 1 || palpite > 10) {
        mensagem.textContent = 'Por favor, digite um número entre 1 e 10.';
        mensagem.style.color = 'red';
        return;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou o número em ${tentativas} tentativa(s)!`;
        mensagem.style.color = 'green';
        input.disabled = true;
        // Poderia adicionar aqui um botão para reiniciar o jogo, se quiser
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = 'Tente um número maior.';
        mensagem.style.color = 'orange';
    } else {
        mensagem.textContent = 'Tente um número menor.';
        mensagem.style.color = 'orange';
    }

    input.value = '';
    input.focus();
}

function mudarCorDeFundo() {
    const texto = document.getElementById('texto');
    const senha = document.getElementById('senha');
    const mensagem = document.getElementById('mensagem');
    const radios = document.getElementsByName('tecnologia');

    // Verifica se um radio está selecionado
    let radioSelecionado = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioSelecionado = true;
            break;
        }
    }

    // Verifica se os campos estão preenchidos
    const textoPreenchido = texto.value.trim() !== '';
    const senhaPreenchida = senha.value.trim() !== '';

    if (radioSelecionado && textoPreenchido && senhaPreenchida) {
        // Muda cor de fundo
        const corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        document.body.style.backgroundColor = corAleatoria;

        // Limpa os campos
        texto.value = '';
        senha.value = '';
        radios.forEach(radio => radio.checked = false);

        // Mostra mensagem de sucesso
        mensagem.textContent = 'Dados enviados com sucesso!';
        mensagem.style.color = 'blue';

        // Remove a mensagem depois de 2 segundos
        setTimeout(() => {
            mensagem.textContent = '';
        }, 2000);
    } else {
        // Exibe mensagem de erro no lugar do alert
        mensagem.textContent = 'Por favor, preencha todos os campos e selecione uma opção.';
        mensagem.style.color = 'red';

        // Remove a mensagem depois de 2 segundos
        setTimeout(() => {
            mensagem.textContent = '';
        }, 2000);
    }
}

const btnTopo = document.getElementById("btnTopo");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

btnTopo.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};



/*
const cores = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F6'];

function mudarCorDeFundo() {
  const indice = Math.floor(Math.random() * cores.length); // número de 0 a 4
  document.body.style.backgroundColor = cores[indice];
} */
