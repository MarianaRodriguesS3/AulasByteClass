const palavras = ["banana", "computador", "javascript", "html", "forca"];
let palavra = "";
let letrasCertas = [];
let letrasErradas = [];
const maxTentativas = 6;

const elPalavra = document.getElementById("palavra-secreta");
const elErradas = document.getElementById("letras-erradas");
const elTentativas = document.getElementById("tentativas");
const elMensagem = document.getElementById("mensagem-final");
const elBtnReiniciar = document.getElementById("btn-reiniciar");

const partesBoneco = document.querySelectorAll(".parte");

// Escolhe nova palavra aleatória
function novaPalavra() {
  palavra = palavras[Math.floor(Math.random() * palavras.length)];
}

// Exibe a palavra com letras certas e "_"
function mostrarPalavra() {
  elPalavra.innerHTML = palavra
    .split("")
    .map(letra => letrasCertas.includes(letra) ? letra : "_")
    .join(" ");
}

// Mostra partes da forca conforme erros
function atualizarBoneco() {
  partesBoneco.forEach((parte, i) => {
    parte.style.display = i < letrasErradas.length ? "block" : "none";
  });
}

// Atualiza a interface do jogo
function atualizarJogo() {
  mostrarPalavra();
  elErradas.textContent = letrasErradas.join(", ");
  elTentativas.textContent = maxTentativas - letrasErradas.length;
  atualizarBoneco();

  if (!elPalavra.innerHTML.includes("_")) {
    elMensagem.textContent = "🎉 Você venceu!";
    elMensagem.style.color = "green"; // mensagem em verde
    document.removeEventListener("keydown", verificarLetra);
  }

  if (letrasErradas.length >= maxTentativas) {
    elMensagem.textContent = `☠️ Você perdeu! A palavra era: ${palavra}`;
    elMensagem.style.color = "red";
    document.removeEventListener("keydown", verificarLetra);
  }
}

// Verifica a letra digitada
function verificarLetra(e) {
  const letra = e.key.toLowerCase();

  if (letra.match(/^[a-zà-ú]$/i)) {
    if (palavra.includes(letra)) {
      if (!letrasCertas.includes(letra)) {
        letrasCertas.push(letra);
      }
    } else {
      if (!letrasErradas.includes(letra)) {
        letrasErradas.push(letra);
      }
    }
    atualizarJogo();
  }
}

// Reinicia o jogo
function reiniciarJogo() {
  letrasCertas = [];
  letrasErradas = [];
  elMensagem.textContent = "";
  elMensagem.style.color = ""; // reseta cor da mensagem
  document.addEventListener("keydown", verificarLetra);
  novaPalavra();
  atualizarJogo();
}

// Eventos
elBtnReiniciar.addEventListener("click", reiniciarJogo);

// Inicialização
novaPalavra();
mostrarPalavra();
document.addEventListener("keydown", verificarLetra);
atualizarJogo();
