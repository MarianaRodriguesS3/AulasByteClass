const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const form = document.getElementById("formulario");
const exibir = document.getElementById("exibir");
const contadorNome = document.getElementById("contadorNome");
const contadorEmail = document.getElementById("contadorEmail");
const apagar = document.getElementById("apagar");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = inputNome.value;
    const email = inputEmail.value;

    if (!(nome && email)) return;

    const p = document.createElement("p");
    p.innerText = `Nome: ${nome}\nEmail: ${email}`;
    exibir.appendChild(p);

    p.addEventListener("click", () => {
        p.classList.toggle("style"); 
    });

    form.reset();
});

inputNome.addEventListener("input", () => {
    contadorNome.innerText = inputNome.value.length;
});

inputEmail.addEventListener("input", () => {
    contadorEmail.innerText = inputEmail.value.length;
});

apagar.addEventListener("click", () => {
    exibir.innerHTML = "";
    contadorNome.innerText = "0";
    contadorEmail.innerText = "0";
});