let lista3 = ['â','ð¥','ð§','â'];
//jeito imperativo
//lista3[1] = 'ð¥¤';

/*for(let i = 0; i<4; i++){
    if(lista3[i] === 'ð¥'){
        lista3[i] = 'ð¥¤';
    }
}*/

//troca toda a lista por 'ð¥¤'
//let novalista = lista3.map((item) => 'ð¥¤');

let novalista = lista3.map((item) => (item ==='ð¥'?'ð¥¤':item));
console.log(lista3);
console.log(novalista);

//Conta quantos cafÃ©s tem na lista
let novalista2 = lista3.map((item) => (item ==='â'?1:0));
let total = novalista2.reduce((soma, item) => soma + item);
console.log(total);

total = lista3.map((item) => (item === 'â'?1:0)).reduce((soma, item) => soma + item);
console.log(total);
//--------------------------------
let novalista3 = lista3.filter((item) => item === 'â');
console.log(novalista3);

let resultado = lista3.find((item) => item === 'ð¥');
console.log(resultado);

let posicao = lista3.findIndex((item) => item === 'ð¥');
console.log(posicao);

lista3.fill('ð¹',1);
console.log(lista3);

let resultado2 = lista3.some((item) => item == 'ð¹');
let resultado3 = lista3.some((item) => item == 'ð¥');
console.log(resultado2);
console.log(resultado3);

let resultado4 = lista3.every((item) => item == 'ð¥');
console.log(resultado4);