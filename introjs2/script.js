//VARIÁVEL GLOBAL
//mensagem = "UNIVILLE";
/*void function() {
    console.log(mensagem);
}();*/
//elevação de variáveis
//eleva a declaração da variável para a primeira linha do blocco
//var mensagem = "UNIVILLE";

/*var exibeMensagem = function(){
    if(true){
        var escopoFuncao = 'Caelum';
        let escopoBloco = 'Alura';

        //console.log(escopoFuncao);
        //console.log(escopoBloco);
    }
    //console.log(escopoFuncao);
    //console.log(escopoBloco);
}
exibeMensagem();
console.log(exibeMensagem.name);*/

void function(){
    let teste = 1234;
    //não pode - let teste = "lalala";

    const mensagem = 'Alura';
    console.log(mensagem);
    //ERRO - mensagem = 'Caleum'
}();

(function (){
    let frutas = ['laranja', 'banana', 'uva'];
    for(let umafruta in frutas){
        console.log(`${umafruta} - ${frutas[umafruta]}`);
    }
}());