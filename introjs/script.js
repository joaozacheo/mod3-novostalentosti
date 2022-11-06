//alert("Olá mundo");
console.log('mensagem bonita');

document.getElementById('titulo').innerHTML = "UNIVILLE"

let resposta = confirm("Voce mora em Joinville?");
alert("A resposta foi " + resposta);

let outraresposta = prompt("Digite seu nome:");
alert("Seu nome e " + outraresposta);

document.write("testando...");

const style = document.createElement('style');
style.textContent = 'body { background-color: lightblue;}';
document.head.append(style);