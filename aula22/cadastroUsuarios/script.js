// Sistema de cadastro simples(sem banco de dados) que permita cadastrar, listar e remover usuários em um array. 
// Cada usuario deve ter nome, email e senha.

const form = document.getElementById("formCadastro");
const tabela = document.getElementById("tabelaUsuarios").querySelector("tbody");
const btnSubmit = document.getElementById("btnSubmit");
const editIndexInput = document.getElementById("editIndex");

let usuarios = [];

// Carregar do localStorage ao iniciar
function carregarUsuarios() {
  const dados = localStorage.getItem("usuarios");
  if (dados) {
    usuarios = JSON.parse(dados);
  }
}

// Salvar no localStorage
function salvarUsuarios() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Atualizar tabela
function atualizarTabela() {
  tabela.innerHTML = "";
  usuarios.forEach((u, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${u.nome}</td>
      <td>${u.email}</td>
      <td>
        <button class="editar-btn" onclick="editarUsuario(${index})">Editar</button>
        <button class="remover-btn" onclick="removerUsuario(${index})">Remover</button>
      </td>
    `;
    tabela.appendChild(row);
  });
}

// Cadastrar ou salvar edição
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const editIndex = parseInt(editIndexInput.value, 10);

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  if (editIndex >= 0) {
    // edição
    const outroIndex = usuarios.findIndex((u, i) => u.email === email && i !== editIndex);
    if (outroIndex !== -1) {
      alert("Já existe um usuário com esse e-mail!");
      return;
    }
    usuarios[editIndex] = { nome, email, senha };
    btnSubmit.textContent = "Cadastrar";
    editIndexInput.value = "-1";
  } else {
    // novo
    if (usuarios.some(u => u.email === email)) {
      alert("Já existe um usuário com esse e-mail!");
      return;
    }
    usuarios.push({ nome, email, senha });
  }

  salvarUsuarios();
  atualizarTabela();
  form.reset();
});

// Função editar
window.editarUsuario = function(index) {
  const u = usuarios[index];
  document.getElementById("nome").value = u.nome;
  document.getElementById("email").value = u.email;
  document.getElementById("senha").value = u.senha;
  editIndexInput.value = index;
  btnSubmit.textContent = "Salvar";
};

// Função remover
window.removerUsuario = function(index) {
  if (confirm("Deseja realmente remover este usuário?")) {
    usuarios.splice(index, 1);
    salvarUsuarios();
    atualizarTabela();
  }
};

// Inicialização ao carregar a página
carregarUsuarios();
atualizarTabela();
