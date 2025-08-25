let blocos = [];

function criarTabuleiro() {
  const quebraCabecaContainer = document.getElementById("quebraCabeca");
  if (!quebraCabecaContainer) return;

  quebraCabecaContainer.innerHTML = "";
  blocos.forEach((num, index) => {
    const bloco = document.createElement("div");
    bloco.className = "bloco";
    if (num === 0) {
      bloco.classList.add("blocoVazio");
      bloco.textContent = "";
    } else {
      bloco.textContent = num;
      bloco.addEventListener("click", () => moverPeca(index));
    }
    quebraCabecaContainer.appendChild(bloco);
  });
}

function iniciarQuebraCabeca() {
  embaralhar();
  adicionarEventoBotaoEmbaralhar();
}

function moverPeca(index) {
  const vazio = blocos.indexOf(0);
  if (movimentoValido(index, vazio)) {
    [blocos[index], blocos[vazio]] = [blocos[vazio], blocos[index]];
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
  const status = document.getElementById("status");
  const vitoria = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  const venceu = blocos.every((val, idx) => val === vitoria[idx]);
  if (status) status.textContent = venceu ? "🎉 Você venceu!" : "";
}

function embaralhar() {
  do {
    blocos = [1, 2, 3, 4, 5, 6, 7, 8, 0].sort(() => Math.random() - 0.5);
  } while (!ehSolucionavel(blocos) || verificarOrdem(blocos));
  criarTabuleiro();

  const status = document.getElementById("status");
  if (status) status.textContent = "";
}

function verificarOrdem(arr) {
  return arr.every((val, idx) => val === [1, 2, 3, 4, 5, 6, 7, 8, 0][idx]);
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

function adicionarEventoBotaoEmbaralhar() {
  const botaoEmbaralhar = document.getElementById("botaoEmbaralhar");
  if (!botaoEmbaralhar) return;

  const novoBotao = botaoEmbaralhar.cloneNode(true);
  botaoEmbaralhar.parentNode.replaceChild(novoBotao, botaoEmbaralhar);

  novoBotao.addEventListener("click", embaralhar);
}
