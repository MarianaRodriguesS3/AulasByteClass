function iniciarJogoVelha() {
  const conteudo = document.getElementById("conteudo-jogo");

  fetch("pages/velha.html")
    .then((res) => res.text())
    .then((html) => {
      conteudo.innerHTML = html;
      iniciarLogicaVelha(); 
    });
}

function iniciarLogicaVelha() {
  let vezJogador = 'x';
  let estadoTabuleiro = Array(9).fill(null);
  let historicoJogadas = [];

  const tabuleiro = document.getElementById('tabuleiro');
  const vezJogadorElem = document.getElementById('vez-jogador');
  const historicoElem = document.getElementById('historico');

  tabuleiro.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const celula = document.createElement('div');
    celula.className = 'celula';
    celula.dataset.index = i;
    celula.addEventListener('click', () => handleClickCelula(i));
    tabuleiro.appendChild(celula);
  }

  function fimJogo(tab) {
    const linhas = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (const [a, b, c] of linhas) {
      if (tab[a] && tab[a] === tab[b] && tab[a] === tab[c]) return tab[a];
    }
    return null;
  }

  function deuVelha(tab) {
    return tab.every(cell => cell !== null);
  }

  function handleClickCelula(i) {
    if (estadoTabuleiro[i] !== null || fimJogo(estadoTabuleiro)) return;

    estadoTabuleiro[i] = vezJogador;
    atualizarTabuleiro();

    historicoJogadas.push([...estadoTabuleiro]);
    atualizarHistorico();

    const vencedor = fimJogo(estadoTabuleiro);
    if (vencedor) {
      alert(`O jogo acabou. ${vencedor.toUpperCase()} venceu!`);
    } else if (deuVelha(estadoTabuleiro)) {
      alert("O jogo acabou. Deu velha!");
    }

    vezJogador = vezJogador === 'x' ? 'o' : 'x';
    vezJogadorElem.textContent = `Vez do Jogador: ${vezJogador.toUpperCase()}`;
  }

  function atualizarTabuleiro() {
    const celulas = document.querySelectorAll('.celula');
    celulas.forEach((celula, i) => {
      celula.textContent = estadoTabuleiro[i] ? estadoTabuleiro[i].toUpperCase() : '';
    });
  }

  function atualizarHistorico() {
    historicoElem.innerHTML = '';
    historicoJogadas.forEach((jogada, index) => {
      const div = document.createElement('div');
      div.className = 'jogada';
      div.innerText = 
        `${jogada[0] || '_'} | ${jogada[1] || '_'} | ${jogada[2] || '_'}\n` +
        `${jogada[3] || '_'} | ${jogada[4] || '_'} | ${jogada[5] || '_'}\n` +
        `${jogada[6] || '_'} | ${jogada[7] || '_'} | ${jogada[8] || '_'}`;
      div.addEventListener('click', () => voltarJogada(index));
      historicoElem.appendChild(div);
    });
  }

  function voltarJogada(indice) {
    estadoTabuleiro = [...historicoJogadas[indice]];
    historicoJogadas = historicoJogadas.slice(0, indice + 1);
    vezJogador = historicoJogadas.length % 2 === 0 ? 'x' : 'o';
    atualizarTabuleiro();
    atualizarHistorico();
    vezJogadorElem.textContent = `Vez do Jogador: ${vezJogador.toUpperCase()}`;
  }

  document.getElementById("reiniciar").addEventListener("click", () => {
    vezJogador = 'x';
    estadoTabuleiro = Array(9).fill(null);
    historicoJogadas = [];
    atualizarTabuleiro();
    atualizarHistorico();
    vezJogadorElem.textContent = `Vez do Jogador: ${vezJogador.toUpperCase()}`;
  });
}
