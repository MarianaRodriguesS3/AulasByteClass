let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function mostrarTarefas(filtroTipo = "todas") {
    const lista = document.getElementById("listaTarefas")
    lista.innerHTML = "";

    let listaFiltrada = tarefas;
    if (filtroTipo === "pendentes") {
        listaFiltrada = tarefas.filter(t => !t.concluida);
    } else if (filtroTipo === "concluidas") {
        listaFiltrada = tarefas.filter(t => t.concluida);
    }

    listaFiltrada.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.innerText = tarefa.texto;
        li.style.textDecoration = tarefa.concluida ? "line-through" : "none";

        li.addEventListener('click', () => {
            tarefas[index].concluida = !tarefas[index].concluida;
            salvarTarefas();
            mostrarTarefas(filtroTipo);
        });

        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover"
        btnRemover.addEventListener('click', () => {
            tarefas.splice(index, 1);
            salvarTarefas();
            mostrarTarefas(filtroTipo);
        });

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
};

document.getElementById("btnAdicionar").addEventListener('click', () => {
    const input = document.getElementById("inputTarefa");
    const texto = input.value.trim();
    if(texto === "") return;

    tarefas.push({texto, concluida: false});
    input.value = "";
    salvarTarefas();
    mostrarTarefas();
});

function filtro(tipo){
    mostrarTarefas(tipo);
}
mostrarTarefas();

const lista = document.getElementById("listaTarefas");
const contador = document.getElementById("contadorTarefa");
const botao = document.getElementById("btnAdicionar");
let quantidadeTarefas = 0

botao.addEventListener("click", function() {
    quantidadeTarefas = lista.getElementsByTagName("li").length;
    resultado.textContent = "Total: " + quantidadeTarefas;

});