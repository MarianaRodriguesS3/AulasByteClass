// Promisses

let promise = new Promise((resolve, reject) => {
    let sucesso = true;
    if (sucesso) {
        resolve("operação bem sucedida");
    } else {
        reject("ocorreu um erro");
    }
});

promise
    .then(result => {
        console.log(result); //operação bem sucedida 
    })
    .catch(error => {
        console.log(error);
    });

    const produtos = ["laranja", "maça", "banana"];

    function buscarProdutos(produto) {
      return new Promise((resolve, reject) => {
        const sucesso = produtos.includes(produto);
        if (sucesso) {
          resolve(`Produto ${produto} encontrado`);
        } else {
          reject(`Produto ${produto} não encontrado`);
        }
      });
    }
    buscarProdutos("maça")
      .then(result => {
        console.log(result); 
      })
      .catch(error => {
        console.log(error);
      });
    
    buscarProdutos("uva")
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });

// Funções async e await
const promise1 = Promise.resolve("Produto A");
const promise2 = Promise.resolve("Produto B");

async function ExemploAsync() {
    try{
        let resultado1 = await promise1;
        console.log(resultado1)
        let resultado2 = await promise2;
        console.log(resultado2)
    } catch(error) {
        console.log(error);
    }
}
ExemploAsync();