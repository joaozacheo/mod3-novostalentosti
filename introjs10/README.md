# Manipulação de Arrays do JS
##  For/of - For()
For each para Javascript.
```javascript
const lista = ['🐸','🐼','🐯','🐺'];

for(let umitem of lista){
    console.log(umitem);
}
```
Resultado:
```javascript
🐸
🐼
🐯
🐺
```
<br />

##  Map()
Estrutura de dados do tipo CHAVE VALOR.
```javascript
const mapa = new Map();

mapa.set('coelho','🐰');
mapa.set('lula','🦑');
mapa.set('rapoza','🦊');

console.log(mapa);
console.log(mapa.get('lula'));
```
Resultado:
```javascript
{'coelho' => '🐰', 'lula' => '🦑', 'rapoza' => '🦊'}
🦑
```
<br />

##  Set()
Gera uma lista de valores únicos.
```javascript
const listavaloresunicos = new Set();

listavaloresunicos.add('🐰');
listavaloresunicos.add('🦑');
listavaloresunicos.add('🦊');
listavaloresunicos.add('🐰');

console.log(listavaloresunicos);
```
Resultado:
```javascript
{'🐰', '🦑', '🦊'}
```
<br />

##  Parâmetros Padrão (Default Parameter)
Definir valores padrão para parâmetros de entrada.
```javascript
function soma(x = 1, y = 2){
    return x + y;
}
console.log(soma());    //usa os parâmetros padrão
console.log(soma(3));   //muda apenas o primeiro parâmetro
console.log(soma(3,5)); //muda o primeiro e o segundo parâmetro
```
ou
```javascript
let soma2 = ((x = 1, y = 2) => x + y);
console.log(soma2());
```
Resultado:
```javascript
3
5
8
3
```
<br />

##  Rest Parameters
Definuma coleção não limitada de valores por parâmetro.
```javascript
function outrafuncao(){
    for(let umitem of arguments){
        console.log(umitem);
    }
}

outrafuncao(1);
outrafuncao(11);
```
Resultado:
```javascript
1
11
```
ou
```javascript
function minhafuncao(...valores){
    console.log(valores);
}

minhafuncao();
minhafuncao(1);
minhafuncao(1,2);
```
Resultado:
```javascript
[]
[1]
[1, 2]
```
ou
```javascript
function minhafuncao2(val1, val2 = 2, ...valores){
    console.log(val1);
    console.log(val2);
    console.log(valores);
}

minhafuncao2();
minhafuncao2(1);
minhafuncao2(3,5);
minhafuncao2(3,5,9,11);
```
Resultado:
```javascript
undefined | 2 | []
    1     | 2 | []
    3     | 5 | []
    3     | 5 | [9, 11]
```
<br />

##  Descontruir uma lista
Retirar cada elemento da lista e atribuir a variáveis diferentes.
```javascript
const lista2 = ['🦊','🐼','🐸','🦑'];
let a, b, c, d;
[a,b,c,d] = lista2;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
```
Resultado:
```javascript
🦊
🐼
🐸
🦑
```
<br />

##  Espalhar valores (SPREAD Operator)
Distribui os valores da lista para cada parâmetro da entrada.
```javascript
function minhafunc(a,b,c,d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
minhafunc(...lista2);
```
Resultado:
```javascript
🦊
🐼
🐸
🦑
```
<br />