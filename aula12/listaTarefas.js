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

        // li.innerText = tarefa.texto;
        const spanTexto = document.createElement("span");
        spanTexto.innerText = tarefa.texto;

        // li.style.textDecoration = tarefa.concluida ? "line-through" : "none";
        spanTexto.style.textDecoration = tarefa.concluida ? "line-through" : "none";

        // li.addEventListener('click', () => {
        spanTexto.addEventListener('click', () => {
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

        // Adiciona texto e botão ao <li>
        li.appendChild(spanTexto);
        li.appendChild(btnRemover);
        lista.appendChild(li);
    });

    atualizarContadores(); 
};

function filtro(tipo){
    mostrarTarefas(tipo);
}
mostrarTarefas();

function adicionarTarefa() {
    const input = document.getElementById("inputTarefa");
    const texto = input.value.trim();
    if (texto === "") return;

    tarefas.push({ texto, concluida: false });
    input.value = "";
    salvarTarefas();
    mostrarTarefas();
}

document.getElementById("btnAdicionar").addEventListener('click', adicionarTarefa);
document.getElementById("inputTarefa").addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

function atualizarContadores() {
    const total = tarefas.length;
    const concluidas = tarefas.filter(t => t.concluida).length;
    const pendentes = tarefas.filter(t => !t.concluida).length;

    document.getElementById('total').innerText = total;
    document.getElementById('tarefaConcluida').innerText = concluidas;
    document.getElementById('tarefasPendentes').innerText = pendentes;
}
