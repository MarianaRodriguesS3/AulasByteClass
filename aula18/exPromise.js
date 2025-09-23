/* Criação de uma Promise simples
Crie uma Promise que resolve se o número inserido for maior que 10 e rejeita caso contrário. */

let numeros = [12, 5, 10]; 

numeros.forEach(numero => {
    let promise = new Promise((resolve, reject) => {
        if (numero > 10) {
            resolve(`O número ${numero} é maior que 10.`);
        } else {
            reject(`O número ${numero} não é maior que 10.`);
        }
    });

    promise
        .then(result => {
            console.log("Sucesso:", result);
        })
        .catch(error => {
            console.log("Erro:", error);
        });
});

/* Tratamento de erro
Crie uma Promise que simule uma falha (rejeição). Use .catch() para exibir a mensagem de erro no console. */

let promise = new Promise((resolve, reject) => {
    let sucesso = false;
    if (sucesso) {
        resolve("operação bem sucedida");
    } else {
        reject("\nocorreu um erro\n");
    }
});

promise
    .then(result => {
        console.log(result); //operação bem sucedida 
    })
    .catch(error => {
        console.log(error);
    });

/* Encadeamento de Promises
Crie duas Promises. A primeira resolve com uma mensagem e a segunda resolve com outra.
Encadeie as duas e mostre o resultado. */

const primeiraPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Primeira Promise resolvida!");
  }, 1000); // simula um tempo de resposta
});

const segundaPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Segunda Promise resolvida!");
    }, 1000);
  });
};

primeiraPromise
  .then((mensagem1) => {
    console.log(mensagem1); 
    return segundaPromise();
  })
  .then((mensagem2) => {
    console.log(mensagem2);
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  });

/* Utilizando async/await
Reescreva o exemplo do exercício 3 utilizando async/await para resolver as Promises de forma
síncrona */

const terceiraPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Terceira Promise resolvida!");
    }, 1000);
  });
};

const quartaPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Quarta Promise resolvida!");
    }, 1000);
  });
};

async function executarEncadeamento() {
  try {
    const mensagem1 = await terceiraPromise();
    console.log(mensagem1);

    const mensagem2 = await quartaPromise();
    console.log(mensagem2);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}
executarEncadeamento();
