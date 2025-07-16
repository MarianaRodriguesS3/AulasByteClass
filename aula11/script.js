//const p = document.getElementById("mensagem");
//console.log(p)
//console.log(p.textContent)

const texto = document.querySelector(".destaque");
texto.innerText = "paragrafo 1";
texto.style.color = "red"
texto.style.fontSize = "20px"

const novoItem = document.createElement("li");
novoItem.innerText = "tarefa nova";
document.querySelector("ul").appendChild(novoItem);