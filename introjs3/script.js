function infinity(){
    let i = 0;
    while(true){
        console.log(i++);
    }
}

function infinity2(){ //Usa a Web API
    let i = 0;
    //setInterval(function(){   --> Define intervalo de execução repetido (executa várias vezes)
    //CALLLBACK
    //JS executa func daqui a 1 seg
    setTimeout(function(){   // --> Define um tempo unico de execução (executa uma vez)
        console.log(i++);
        return i;
    },1000);
}

function date(){
    console.log(new Date());
}

//infinity() cuidado vai travar!!!
let resultado = infinity2();
console.log("Result " + resultado)
date();