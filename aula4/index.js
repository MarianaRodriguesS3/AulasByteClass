/*let personagens = [{ nome: "Luffy", recompensa: 1000 }, 
    { nome: "Zoro", recompensa: 800 }, 
    { nome: "Sandy", recompensa: 700 }
]


for (i = 0; i < 4; i++); {
}
//personagens.map(p => console.log(`personagens: ${p.nome}`));
//console.log(personagens)

const resultado = personagens.find(p => p.nome == "Zoro")
console.log(resultado) */
function novoTitulo(){
    const titulo = document.getElementById("titulo")
    titulo.textContent = "novo titulo";
    titulo.style.color = "red" 
}

