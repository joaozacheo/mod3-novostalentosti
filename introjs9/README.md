# Manipulação de Arrays do JS
##  Arrow Function
Função Javascript, escrita em uma única linha (normalmente) para representar umma lógica simples.
```javascript
parâmetro => expressão
(parâmetro) => expressão
(param1, param2) => expressão
(param1, param2) => {
    return valor;
}
```
<br />

## Como criar um array dentro do Javascript?
let - cria uma variável dentro do bloco corrente
```javascript
let lista = [1,2,3,4];
let lista2 = ['a','b','c','d'];
let lista3 = ['☕','🥛','🧋','☕'];
```
<br />

## Substituindo um elemento de uma lista
Jeito imperativo:
```javascript
let lista3 = ['☕','🥛','🧋','☕'];

lista3[1] = '🥤';
console.log(lista3);
```

Maneira um pouco mais funcional:
```javascript
let lista3 = ['☕','🥛','🧋','☕'];

for(let i = 0; i<4; i++){
    if(lista3[i] === '🥛'){
        lista3[i] = '🥤';
    }
}
console.log(lista3);
```
<br />

## MAP - Array.map()
Mapeia cada elemento da lista, passando por uma função que pode alterar o valor do elemento.
```javascript
let lista3 = ['☕','🥛','🧋','☕'];

let novalista = lista3.map((item) => (item ==='🥛'?'🥤':item));
console.log(lista3);
console.log(novalista);
```
Resultado:
```javascript
lista3 = ['☕','🥛','🧋','☕']
novalista = ['☕','🥤','🧋','☕']
```
<br />

## REDUCE - Array.reduce()
Realiza a redução dos elementos de um array para um único valor, a partir de uma função que recebe dois parâmetros (acumulador, item)
```javascript
let lista3 = ['☕','🥛','🧋','☕'];

let novalista2 = lista3.map((item) => (item ==='☕'?1:0));
let total = novalista2.reduce((soma, item) => soma + item);
console.log(total);
```
ou
```javascript
let lista3 = ['☕','🥛','🧋','☕'];

let total = lista3.map((item) => (item === '☕'?1:0)).reduce((soma, item) => soma + item);
console.log(total);
```
Resultado:
```javascript
total = 2
```
<br />

## FILTER - Array.filter()
Função que filtra os elementos a partir de uma outra função que deve retornar verdadeiro ou falso.
```javascript
let lista3 = ['☕','🥛','🧋','☕'];

let novalista3 = lista3.filter((item) => item === '☕');
console.log(novalista3);
```
Resultado:
```javascript
novalista3 = ['☕','☕']
```
<br />

## FIND - Array.find()
Procura pelo primeiro elemento que a função de busca retornar verdadeiro.
```javascript
let lista3 = ['☕','🥛','🧋','☕'];

let resultado = lista3.find((item) => item === '🥛');
console.log(resultado);
```
Resultado:
```javascript
resultado = 🥛
```
<br />

## FINDINDEX - Array.findIndex()
Procura pelo primeiro elemento que a função de busca retornar verdadeiro, retornando a posição na lista
```javascript
let lista3 = ['☕','🥛','🧋','☕'];

let posicao = lista3.findIndex((item) => item === '🥛');
console.log(posicao);
```
Resultado:
```javascript
posicao = 1
```
<br />

## FILL - Array.fill()
Completa a lista com elementos iguais.
```javascript
let lista3 = ['☕','🥛','🧋','☕'];

lista3.fill('🍹',1);
console.log(lista3);
```
Resultado:
```javascript
lista3 = ['☕', '🍹', '🍹', '🍹']
```
<br />

## SOME - Array.some()
Retorna verdadeiro se existir um elemento igual ao utilizando a lógica da função.
```javascript
let lista3 = ['☕','🥛','🧋','☕'];

let resultado2 = lista3.some((item) => item == '🍹');
let resultado3 = lista3.some((item) => item == '🥛');
console.log(resultado2);
console.log(resultado3);
```
Resultado:
```javascript
resultado2 = false
resultado3 = true
```
<br />

## EVERY - Array.every()
Retorna verdadeiro se todos os elementos forem iguais ao utilizando a lógica da função.
```javascript
let lista3 = ['☕','🥛','🧋','☕'];

let resultado4 = lista3.every((item) => item == '🥛');
console.log(resultado4);
```
Resultado:
```javascript
resultado4 = false
```