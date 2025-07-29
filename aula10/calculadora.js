//https://www.freecodecamp.org/portuguese/news/como-construir-uma-calculadora-html-do-zero-usando-javascript/

const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator__keys")

keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
   console.log("cliquei");
 }
})