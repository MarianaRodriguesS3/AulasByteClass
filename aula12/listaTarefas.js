const input = document.getElementById("itemInput");
const botao = document.getElementById("adicionarBtn");
const lista = document.getElementById("lista");

botao.addEventListener('click', () => {
    const texto = input.value;
    if (texto === "") return;
    const li = document.createElement("li");
    li.innerText = texto;
    lista.appendChild(li);
    input.value = ""
});