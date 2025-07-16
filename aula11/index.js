/* 
let frutas = ["maçã", "banana", "laranja"]
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
} 

let frutas = ["maçã", "banana", "laranja", "morango"];
frutas.push("uva");
frutas.shift();
console.log(frutas);
*/

let tarefas = [];

function adicionarTarefa(tarefa) {
    tarefas.push(tarefa);
}

function mostrarTarefa() {
    for (let i = 0; i < tarefas.length; i++) {
        console.log(tarefas[i]);
    }

}
adicionarTarefa("estudar JS");
adicionarTarefa("estudar métodos");
mostrarTarefa();
