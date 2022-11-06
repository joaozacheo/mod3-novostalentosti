(function (){

    let botao = document.getElementById("botao");
    let cep = document.getElementById("cep");
    let retorno = document.getElementById("retorno");

    botao.onclick = function(){

        fetch(`https://ws.apicep.com/cep/${cep.value}.json`)
        .then(function(response){  //callback
            //console.log(response);
            response.json().then(function(json){
                console.log(json);
                if(json.status === 200){
                    retorno.innerHTML += json.address;
                    retorno.innerHTML += ", " + json.district;
                    retorno.innerHTML += " - " + json.city;
                    retorno.innerHTML += ", " + json.state;
                    //console.log(json.city);
                    //console.log(json.state);
                } else{
                    retorno.innerHTML += "DEU RUIM NA API ";
                }
            });
        });

    };

})();