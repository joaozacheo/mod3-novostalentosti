(function (){

    let botao = document.getElementById("botao");
    let code = document.getElementById("code");
    let retorno = document.getElementById("retorno");

    botao.onclick = function(){

        fetch(`https://excuser.herokuapp.com/v1/excuse/id/${code.value}`)
        .then(function(response){ 
            response.json().then(function(json){
                retorno.innerHTML = "";
                code.value = "";
                console.log(json);

                let cat = document.createElement("h3");
                cat.id = "category";
                cat.appendChild(document.createTextNode(json.category));

                let excuse = document.createElement("p");
                excuse.id = "excuse";
                excuse.appendChild(document.createTextNode(`"${json.excuse}"`));

                retorno.appendChild(cat);
                retorno.appendChild(excuse);
                //retorno.innerHTML += json.category;
                //retorno.innerHTML += json.excuse;
                //retorno.innerHTML += "DEU RUIM NA API ";
            });
        });

    };

})();