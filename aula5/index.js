/*let numeros = [1, 2, 3];

for (i = 0; i < numeros.length; i++) {
   numeros[i] = numeros[i] + 5
   console.log(numeros)
}

let numero = [1, 2, 3];

for (i = 0; i < numeros.length; i++) {

   console.log(numeros[i])
}*/

/*[ 6, 2, 3 ]
[ 6, 7, 3 ]
[ 6, 7, 9 ]*/
let numeros = [1, 2, 3];
numeros.forEach((num)=> console.log(num))
numeros.forEach(()=> console.log("hello"))