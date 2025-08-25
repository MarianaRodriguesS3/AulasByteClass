async function carregarJogo(jogo) {
  const container = document.getElementById("conteudo-jogo");

  try {
    const response = await fetch(`${jogo}.html`);
    if (!response.ok) throw new Error(`Falha ao carregar ${jogo}.html`);
    const html = await response.text();
    container.innerHTML = html;

    setTimeout(() => {
      carregarScriptJogo(jogo);
    }, 0);
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
      script.async = false;
      script.onload = () => {
        carregados++;
        if (carregados === scripts.length) iniciarJogoDaForca();
      };
      document.body.appendChild(script);
    });
  } else if (jogo === "velha") {
    const script = document.createElement("script");
    script.src = "scripts/velha.js";
    script.async = false;
    script.onload = () => {
      if (typeof iniciarLogicaVelha === "function") iniciarLogicaVelha();
    };
    document.body.appendChild(script);
  } else if (jogo === "quebraCabeca") {
    const scriptAntigo = document.querySelector('script[src="scripts/quebraCabeca.js"]');
    if (scriptAntigo) {
      scriptAntigo.remove();
    }

    if (!document.querySelector('link[href="css/quebraCabeca.css"]')) {
      const linkCss = document.createElement("link");
      linkCss.rel = "stylesheet";
      linkCss.href = "css/quebraCabeca.css";
      document.head.appendChild(linkCss);
    }

    const script = document.createElement("script");
    script.src = "scripts/quebraCabeca.js";
    script.async = false;
    script.onload = () => {
      if (typeof iniciarQuebraCabeca === "function") iniciarQuebraCabeca();
    };
    document.body.appendChild(script);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const botoesMenu = document.querySelectorAll(".menu-lateral a[data-jogo]");

  carregarJogo("forca"); // Carrega jogo inicial

  botoesMenu.forEach(botao => {
    botao.addEventListener("click", e => {
      e.preventDefault();
      const jogo = botao.dataset.jogo;
      if (jogo) carregarJogo(jogo);
    });
  });
});
