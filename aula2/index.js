var nome = "Mariana";
var idade = 30;

saudacaoIdentificaIdade25(nome,idade)

function saudacaoIdentificaIdade25(nome, idade){
    alert("olá" + " " + nome);
    if(idadeMaior25(idade)) {
        console.log("Você tem mais de 25 anos")
    } else {
        console.log("Você tem menos de 25 anos")
    }
}

function idadeMaior25(idade){
    if(idade > 25)
        return true;
    return false;
} 