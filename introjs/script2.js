//VARIÁVEL GLOBAL
//INTEIRO
//TIPO NUMERICO = NUMBER
a = 10;
console.log(a + " " + typeof(a));
//STRING INTERPOLATION
console.log(`a ${a} ${typeof(a)}`);
//DECIMAL
a = 20.5
console.log(a + " " + typeof(a));
//COMPARANDO SE VALORES SÃO IGUAIS
console.log(a == 20.5);
console.log(a == "20.5");
//COMPARANDO SE OS VALORES E TIPOS SÃO IGUAIS
console.log(a === "20.5");
//TIPO LÓGICO
a = true;
console.log(a + " " + typeof(a));
console.log(a == 1);
console.log(a == "0");
//TIPO TEXTO
a = 'Porque você não passa lá...';
console.log(a + "" + typeof(a));
a = "Porque você não passa lá...";
console.log(a + "" + typeof(a));
//array - listas (objeto) - vetor
a = ['um', 'dois', 'três']
console.log(a + " " + typeof(a));
a = Array();
a[0] = "lalala";
a.push("lelele");
console.log(a + " " + typeof(a));

//OBJETO
a = new Object();
a.idade = 20;
console.log(a + " " + typeof(a));
console.log(JSON.stringify(a));

function minhaFuncao(umnumero){
    console.log("Fui clicado...");
    let caixinha = document.getElementById("valor");
    caixinha.value += umnumero;
}