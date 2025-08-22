const puzzle = document.getElementById("puzzle");
const status = document.getElementById("status");

let tiles = [];

function criarTabuleiro() {
  puzzle.innerHTML = "";
  tiles.forEach((num, index) => {
    const tile = document.createElement("div");
    tile.className = "tile";
    if (num === 0) {
      tile.classList.add("empty");
      tile.textContent = "";
    } else {
      tile.textContent = num;
      tile.addEventListener("click", () => moverPeca(index));
    }
    puzzle.appendChild(tile);
  });
}

function moverPeca(index) {
  const vazio = tiles.indexOf(0);
  const valido = movimentoValido(index, vazio);
  if (valido) {
    [tiles[index], tiles[vazio]] = [tiles[vazio], tiles[index]];
    criarTabuleiro();
    verificarVitoria();
  }
}

function movimentoValido(ind1, ind2) {
  const linha1 = Math.floor(ind1 / 3);
  const coluna1 = ind1 % 3;
  const linha2 = Math.floor(ind2 / 3);
  const coluna2 = ind2 % 3;
  return (Math.abs(linha1 - linha2) + Math.abs(coluna1 - coluna2)) === 1;
}

function verificarVitoria() {
  const vitoria = [1,2,3,4,5,6,7,8,0];
  const venceu = tiles.every((val, idx) => val === vitoria[idx]);
  status.textContent = venceu ? "🎉 Você venceu!" : "";
}

function embaralhar() {
  // Gera uma sequência aleatória mas solúvel
  do {
    tiles = [1,2,3,4,5,6,7,8,0]
      .sort(() => Math.random() - 0.5);
  } while (!ehSolucionavel(tiles) || verificarOrdem(tiles));
  criarTabuleiro();
  status.textContent = "";
}

function verificarOrdem(arr) {
  return arr.every((val, idx) => val === [1,2,3,4,5,6,7,8,0][idx]);
}

function ehSolucionavel(seq) {
  let inversoes = 0;
  for (let i = 0; i < seq.length; i++) {
    for (let j = i + 1; j < seq.length; j++) {
      if (seq[i] && seq[j] && seq[i] > seq[j]) inversoes++;
    }
  }
  return inversoes % 2 === 0;
}

// Inicia o jogo
embaralhar();
