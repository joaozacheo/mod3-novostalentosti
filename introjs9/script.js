let lista3 = ['☕','🥛','🧋','☕'];
//jeito imperativo
//lista3[1] = '🥤';

/*for(let i = 0; i<4; i++){
    if(lista3[i] === '🥛'){
        lista3[i] = '🥤';
    }
}*/

//troca toda a lista por '🥤'
//let novalista = lista3.map((item) => '🥤');

let novalista = lista3.map((item) => (item ==='🥛'?'🥤':item));
console.log(lista3);
console.log(novalista);

//Conta quantos cafés tem na lista
let novalista2 = lista3.map((item) => (item ==='☕'?1:0));
let total = novalista2.reduce((soma, item) => soma + item);
console.log(total);

total = lista3.map((item) => (item === '☕'?1:0)).reduce((soma, item) => soma + item);
console.log(total);
//--------------------------------
let novalista3 = lista3.filter((item) => item === '☕');
console.log(novalista3);

let resultado = lista3.find((item) => item === '🥛');
console.log(resultado);

let posicao = lista3.findIndex((item) => item === '🥛');
console.log(posicao);

lista3.fill('🍹',1);
console.log(lista3);

let resultado2 = lista3.some((item) => item == '🍹');
let resultado3 = lista3.some((item) => item == '🥛');
console.log(resultado2);
console.log(resultado3);

let resultado4 = lista3.every((item) => item == '🥛');
console.log(resultado4);