const lista = ['🐸','🐼','🐯','🐺'];

//For each JS
for(let umitem of lista){
    console.log(umitem);
}

const mapa = new Map();

mapa.set('coelho','🐰');
mapa.set('lula','🦑');
mapa.set('rapoza','🦊');

console.log(mapa);
console.log(mapa.get('lula'));

const listavaloresunicos = new Set();

listavaloresunicos.add('🐰');
listavaloresunicos.add('🦑');
listavaloresunicos.add('🦊');
listavaloresunicos.add('🐰');

console.log(listavaloresunicos);

function soma(x = 1, y = 2){
    return x + y;
}
console.log(soma());
console.log(soma(3));
console.log(soma(3,5));

let soma2 = ((x = 1, y = 2) => x + y);
console.log(soma2());


function outrafuncao(){
    for(let umitem of arguments){
        console.log(umitem);
    }
}

outrafuncao(1);
outrafuncao(11);

function minhafuncao(...valores){
    console.log(valores);
}

minhafuncao();
minhafuncao(1);
minhafuncao(1,2);

console.log(1);
console.log(1, 2);
console.log(1, 2, 3);

function minhafuncao2(val1, val2 = 2, ...valores){
    console.log(val1);
    console.log(val2);
    console.log(valores);
}

minhafuncao2();
minhafuncao2(1);
minhafuncao2(3,5);
minhafuncao2(3,5,9,11);

const lista2 = ['🦊','🐼','🐸','🦑'];
let a, b, c, d;
[a,b,c,d] = lista2; //Desconstrução: funciona para variáveis
console.log(a);
console.log(b);
console.log(c);
console.log(d);

function minhafunc(a,b,c,d){ //Espalhamento: funciona para parâmetros
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
minhafunc(...lista2); //SPREAD Operator