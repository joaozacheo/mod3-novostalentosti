function numero(num){
    let tela = document.getElementById("tela");
    tela.value += num;
}

function ponto(){
    let tela = document.getElementById("tela");
    let ponto = ".";
    if(tela.value.includes(ponto) == 0){ //só pode ter um ponto
        tela.value += ".";
    }
}

function apagar(){
    let tela = document.getElementById("tela");
    tela.value = tela.value.slice(0, -1);
}

function del(){
    let tela = document.getElementById("tela");
    tela.value = ""; //arrumar
}

function soma(){
    let tela = document.getElementById("tela");
    if(tela.value != ""){
        tela.value += "+";
    }else {
        tela.value = "Insira um valor";
        setTimeout(() => {
            tela.value = "";
        }, 500);
    }
}

function subtracao(){
    let tela = document.getElementById("tela");
    if(tela.value != ""){
        tela.value += "-";
    }else {
        tela.value = "Insira um valor";
        setTimeout(() => {
            tela.value = "";
        }, 500);
    }
}

function multi(){
    let tela = document.getElementById("tela");
    if(tela.value != ""){
        tela.value += "*";
    }else {
        tela.value = "Insira um valor";
        setTimeout(() => {
            tela.value = "";
        }, 500);
    }
}

function divisao(){
    let tela = document.getElementById("tela");
    if(tela.value != ""){
        tela.value += "/";
    }else {
        tela.value = "Insira um valor";
        setTimeout(() => {
            tela.value = "";
        }, 500);
    }
}

function igual(){
    let tela = document.getElementById("tela");
    if(tela.value == ""){
        setTimeout(() => {
            tela.value = "";
        }, 500);
    }
    tela.value = eval(tela.value);
}

let input = document.getElementById("tela");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("Clicou");
    document.getElementById("botaoIgual").click();
  }
});