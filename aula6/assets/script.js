const toggleTheme = () => {
  const body = document.body;
  const h1 = document.querySelector('h1');

  body.style.backgroundColor = (body.style.backgroundColor === 'black') ? 'white' : 'black';
  h1.style.color = (h1.style.color === 'green') ? 'red' : 'green';
  h1.textContent = (h1.style.color === 'red') ? 'Dia' : 'Noite';
};

/*
for (i= 0; i < 3; i++) {
  console.log("hello world!") 
}

let saudacao = [1, 2, 3];
for (let i = 0; i < saudacao.length; i++) {
  console.log("hello world!") 
} 

let saudacao = [1,2,3]
saudacao.forEach(()=> console.log("hello world!"))
*/

let imprime = "hello world!"

for (let i = 0; i < 3; i++) {
  console.log(imprime)
}


