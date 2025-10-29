const readline = require("readline");
// O readline é um módulo interno do Node.js que serve para ler e escrever informações no terminal (entrada e saída de texto).

const rl = readline.createInterface({ // rl = interface que conversa com o usuário
  input: process.stdin, // input = de onde vem o que o usuário digita (teclado)
  output: process.stdout, // output = para onde vai o que você mostra (terminal)
});

let tabuleiro;
const JOGADOR = "X";
const COMPUTADOR = "O";

function inicializarTabuleiro() {
  tabuleiro = Array(9).fill(" "); // O método fill() preenche todas as posições do array com o valor fornecido. Nesse caso vazio (" ")
}

function exibirTabuleiro() {
  console.clear();
  console.log("\n");
  console.log(` ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]} `);
  console.log("---+---+---");
  console.log(` ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]} `);
  console.log("---+---+---");
  console.log(` ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]} `);
  console.log("\n");
}

function verificarVitoria(tab, jogador) {
  const combinacoes = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  return combinacoes.some(([a, b, c]) => tab[a] === jogador && tab[b] === jogador && tab[c] === jogador);
  // O método .some() retorna true se alguma das combinações for atendida (3 iguais).
}

function movimentosDisponiveis(tab) {
  return tab.map((v, i) => (v === " " ? i : null)).filter(i => i !== null);
  // map() percorre o tabuleiro e retorna o índice (i) se estiver vazio.
  // filter() remove os null (ou seja, pega só as posições livres).
  // v → valor do elemento atual (no seu caso, " " ou "X" ou "O")
  // i → índice do elemento no array (0 a 8 para o tabuleiro)
}

function movimentoIA() {
  // 1️⃣ — Tenta vencer
  for (const i of movimentosDisponiveis(tabuleiro)) {
    const copia = [...tabuleiro];
    copia[i] = COMPUTADOR;
    if (verificarVitoria(copia, COMPUTADOR)) return i;
  }

  // 2️⃣ — Tenta bloquear o jogador
  for (const i of movimentosDisponiveis(tabuleiro)) {
    const copia = [...tabuleiro];
    copia[i] = JOGADOR;
    if (verificarVitoria(copia, JOGADOR)) return i;
  }

  // 3️⃣ — Prioriza o centro
  if (tabuleiro[4] === " ") return 4;

  // 4️⃣ — Prioriza cantos
  const cantos = [0, 2, 6, 8].filter(i => tabuleiro[i] === " ");
  if (cantos.length) return cantos[Math.floor(Math.random() * cantos.length)];

  // 5️⃣ — Caso contrário, escolhe aleatoriamente
  const livres = movimentosDisponiveis(tabuleiro);
  return livres[Math.floor(Math.random() * livres.length)];
}

function verificarEmpate() {
  return tabuleiro.every(c => c !== " ");
}

function perguntarReinicio() {
  rl.question("\n🔄 Deseja jogar novamente? (s/n): ", (resposta) => {
    if (resposta.toLowerCase() === "s") {
      inicializarTabuleiro();
      iniciarJogo();
    } else {
      console.log("\n👋 Obrigado por jogar! Até a próxima!");
      rl.close();
    }
  });
}

function jogadaHumana() {
  exibirTabuleiro();
  rl.question(`Sua vez (Jogador X). Escolha uma posição (1-9): `, (entrada) => {
    const pos = parseInt(entrada) - 1;

    if (isNaN(pos) || pos < 0 || pos > 8) {
      console.log("❌ Posição inválida! Tente novamente.");
      return jogadaHumana();
    }
    if (tabuleiro[pos] !== " ") {
      console.log("⚠️ Essa posição já está ocupada!");
      return jogadaHumana();
    }

    tabuleiro[pos] = JOGADOR;

    if (verificarVitoria(tabuleiro, JOGADOR)) {
      exibirTabuleiro();
      console.log("🎉 Você venceu!");
      return perguntarReinicio();
    }

    if (verificarEmpate()) {
      exibirTabuleiro();
      console.log("😐 Empate!");
      return perguntarReinicio();
    }

    jogadaComputador();
  });
}

function jogadaComputador() {
  const pos = movimentoIA();
  tabuleiro[pos] = COMPUTADOR;
  console.log(`\n🤖 O computador jogou na posição ${pos + 1}.\n`);

  if (verificarVitoria(tabuleiro, COMPUTADOR)) {
    exibirTabuleiro();
    console.log("💻 O computador venceu! Tente novamente.");
    return perguntarReinicio();
  }

  if (verificarEmpate()) {
    exibirTabuleiro();
    console.log("😐 Empate!");
    return perguntarReinicio();
  }

  jogadaHumana();
}

function iniciarJogo() {
  console.log("=== JOGO DA VELHA — HUMANO vs COMPUTADOR ===");
  console.log("Posições do tabuleiro:");
  console.log(" 1 | 2 | 3 ");
  console.log("---+---+---");
  console.log(" 4 | 5 | 6 ");
  console.log("---+---+---");
  console.log(" 7 | 8 | 9 \n");

  jogadaHumana();
}

// Inicializa e inicia
inicializarTabuleiro();
iniciarJogo();
