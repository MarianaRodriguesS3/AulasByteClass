function mostrarMensagem() {
    alert("Você Clicou")
};

const botao = document.getElementById("meuBotao");
const paragrafo = document.getElementById("mensagem");

botao.addEventListener('click', function () {
    paragrafo.innerText = "Novo Texto"
});

//botao.addEventListener('click', mostrarMensagem);

/*botao.addEventListener('click', function(){
    alert("você clicou")
});*/

const input = document.getElementById("campoTexto");
input.addEventListener('input', function () {
    console.log(input.value)
})


let cliques = 0
const botaoContador = document.getElementById("contador");

botaoContador.addEventListener("click", function () {
    cliques++;
    botaoContador.textContent = cliques;
});
