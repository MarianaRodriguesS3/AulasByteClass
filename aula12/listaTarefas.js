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
            tarefa[index].concluida = !tarefas[index].concluida;
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
