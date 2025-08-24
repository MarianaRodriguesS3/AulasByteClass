let senhas = JSON.parse(localStorage.getItem("senhas")) || [];

function salvarSenhas() {
    localStorage.setItem("senhas", JSON.stringify(senhas));
}

function gerarSenha() {
    const input = document.getElementById("qtdCaracteres");
    const qtd = parseInt(input.value.trim());

    if (isNaN(qtd) || qtd < 4 || qtd > 20) {
        alert("Por favor, digite um número entre 4 e 20.");
        return;
    }

    const tipoSelecionado = document.querySelector('input[name="tipoSenha"]:checked');
    if (!tipoSelecionado) {
        alert("Por favor, selecione o tipo de senha.");
        return;
    }

    const tipo = tipoSelecionado.value;
    let caracteres = "";

    if (tipo === "letras") {
        caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } else if (tipo === "numeros") {
        caracteres = "0123456789";
    } else if (tipo === "caracteres") {
        caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    } else {
        alert("Tipo de senha inválido.");
        return;
    }

    let novaSenha = "";
    for (let i = 0; i < qtd; i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        novaSenha += caracteres[index];
    }

    document.getElementById("senhaAtual").innerText = novaSenha;

    senhas.unshift(novaSenha);
    senhas = senhas.slice(0, 5);

    salvarSenhas();
    mostrarSenhas();

    input.value = "";
}

function mostrarSenhas() {
    const lista = document.getElementById("historicoSenhas");
    lista.innerHTML = "";

    senhas.forEach((senha) => {
        const li = document.createElement("li");
        const spanSenha = document.createElement("span");
        spanSenha.innerText = senha;

        const btnCopiar = document.createElement("button");
        btnCopiar.innerText = "Copiar";
        btnCopiar.addEventListener('click', () => {
            navigator.clipboard.writeText(senha);
            alert("Senha copiada!")
        });

        li.appendChild(spanSenha);
        li.appendChild(btnCopiar);
        lista.appendChild(li);
    });
}

document.getElementById("botaoGerar").addEventListener("click", gerarSenha);

mostrarSenhas();
