var numeroUno = 23;
let texto = 'eeee';
numeroUno = 7;
const array = [4, 'hola'];
let numeroDos = 15;

console.log('Suma: ', numeroUno + numeroDos);
console.log('Producto: ', numeroUno * numeroDos);
console.log('Resta: ', numeroDos - numeroUno);
console.log('División: ', numeroDos / numeroUno);
console.log('Cubo: ', numeroUno ** 3);
console.log('Resto: ', numeroUno % numeroDos);

const numeros = [1, 2, 3, 4, 5, 27];
//let suma = numeros.reduce((a, b) => a + b, 0);
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log('Suma: ', suma);

let max = -Infinity;
for (let i = 1; i < numeros.length; i++) {
  if (max < numeros[i]) max = numeros[i];
}
console.log('Máximo: ', max);

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 5) {
    numeros[i]++;
    console.log('ELEMENTO ITERADO + 1');
  } else {
    numeros[i]--;
    console.log('ELEMENTO ITERADO - 1');
  }
}

const palabras = ['eee', 'abc', 'hola', 'abc', 'a', 'abc', 'hola'];
const hist = {};

for (let i = 0; i < palabras.length; i++) {
  hist[palabras[i]] = (hist[palabras[i]] ?? 0) + 1;
}
for (const [k, v] of Object.entries(hist)) {
  console.log(k, v);
}
