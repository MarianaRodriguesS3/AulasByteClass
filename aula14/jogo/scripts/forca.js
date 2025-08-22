function iniciarJogoDaForca() {
    const exibicaoPalavra = document.querySelector(".exibicao-palavra");
    const textoErros = document.querySelector(".texto-erros b");
    const tecladoDiv = document.querySelector(".teclado");
    const imagemForca = document.querySelector(".caixa-forca img");
    const modalJogo = document.querySelector(".modal-jogo");
    const botaoJogarNovamente = modalJogo.querySelector("button");

    let palavraAtual, letrasCorretas, contadorErros;
    const maxErros = 6;

    const reiniciarJogo = () => {
        letrasCorretas = [];
        contadorErros = 0;
        imagemForca.src = "images/hangman-0.svg";
        textoErros.innerText = `${contadorErros} / ${maxErros}`;
        exibicaoPalavra.innerHTML = palavraAtual.split("").map(() => `<li class="letra"></li>`).join("");
        tecladoDiv.querySelectorAll("button").forEach(botao => botao.disabled = false);
        modalJogo.classList.remove("mostrar");
    };

    const pegarPalavraAleatoria = () => {
        const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
        palavraAtual = word;
        document.querySelector(".texto-dica b").innerText = hint;
        reiniciarJogo();
    };

    const fimDeJogo = (vitoria) => {
        const textoModal = vitoria ? `Você encontrou a palavra:` : 'A palavra correta era:';
        modalJogo.querySelector("img").src = `images/${vitoria ? 'victory' : 'lost'}.gif`;
        modalJogo.querySelector("h4").innerText = vitoria ? 'Parabéns!' : 'Fim de Jogo!';
        modalJogo.querySelector("p").innerHTML = `${textoModal} <b>${palavraAtual}</b>`;
        modalJogo.classList.add("mostrar");

        const som = document.getElementById(vitoria ? "som-vitoria" : "som-derrota");
        som.currentTime = 0;
        som.play();
    };

    const iniciarJogo = (botao, letraClicada) => {
        if (palavraAtual.includes(letraClicada)) {
            [...palavraAtual].forEach((letra, indice) => {
                if (letra === letraClicada) {
                    letrasCorretas.push(letra);
                    const li = exibicaoPalavra.querySelectorAll("li")[indice];
                    li.innerText = letra;
                    li.classList.add("adivinhada");
                }
            });
        } else {
            contadorErros++;
            imagemForca.src = `images/hangman-${contadorErros}.svg`;
        }
        botao.disabled = true;
        textoErros.innerText = `${contadorErros} / ${maxErros}`;

        if (contadorErros === maxErros) return fimDeJogo(false);
        if (letrasCorretas.length === palavraAtual.length) return fimDeJogo(true);
    };

    tecladoDiv.innerHTML = "";
    const linhasTeclado = [
        "qwertyuio",
        "pasdfghjk",
        "lzxcvbnm"
    ];

    linhasTeclado.forEach(linha => {
        const linhaDiv = document.createElement("div");
        linhaDiv.classList.add("linha-teclado");
        tecladoDiv.appendChild(linhaDiv);

        [...linha].forEach(letra => {
            const botao = document.createElement("button");
            botao.innerText = letra;
            linhaDiv.appendChild(botao);
            botao.addEventListener("click", (e) => iniciarJogo(e.target, letra));
        });
    });

    pegarPalavraAleatoria();
    botaoJogarNovamente.addEventListener("click", pegarPalavraAleatoria);
}
