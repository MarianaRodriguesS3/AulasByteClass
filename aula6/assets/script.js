const toggleTheme = () => {
  const body = document.body;
  const h1 = document.querySelector('h1');

  body.style.backgroundColor = (body.style.backgroundColor === 'black') ? 'white' : 'black';
  h1.style.color = (h1.style.color === 'green') ? 'red' : 'green';
  h1.textContent = (h1.style.color === 'red') ? 'Dia' : 'Noite';
};
