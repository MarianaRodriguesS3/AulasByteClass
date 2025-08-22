async function carregarJogo(jogo) {
  const container = document.getElementById("conteudo-jogo");
  try {
    const response = await fetch(`${jogo}.html`);
    if (!response.ok) throw new Error(`Falha ao carregar ${jogo}.html`);
    const html = await response.text();
    container.innerHTML = html;
    carregarScriptJogo(jogo);
  } catch (err) {
    container.innerHTML = `<p>Erro ao carregar o jogo: ${err.message}</p>`;
    console.error(err);
  }
}

function carregarScriptJogo(jogo) {
  if (jogo === "forca") {
    const scripts = ["scripts/word-list.js", "scripts/forca.js"];
    let carregados = 0;
    scripts.forEach(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false; // garante ordem de execução
      script.onload = () => {
        carregados++;
        if (carregados === scripts.length) {
          iniciarJogoDaForca();
        }
      };
      document.body.appendChild(script);
    });
  } else if (jogo === "velha") {
    const script = document.createElement("script");
    script.src = "scripts/velha.js";
    script.async = false;
    script.onload = () => {
      if (typeof iniciarLogicaVelha === "function") {
        iniciarLogicaVelha();
      }
    };
    document.body.appendChild(script);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const botoesMenu = document.querySelectorAll(".menu-lateral a[data-jogo]");
  carregarJogo("forca");

  botoesMenu.forEach(botao => {
    botao.addEventListener("click", e => {
      e.preventDefault();
      const jogo = botao.dataset.jogo;
      if (jogo) carregarJogo(jogo);
    });
  });
});
