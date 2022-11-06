const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

const fakeData = [  //Lista de objetos JS
    {
        id: 1,
        nome: 'Zezinho',
        endereco: 'Rua lalala 100',
        sexo: 'Masculino',
        telefone: '5555-1234'
    },
    {
        id: 2,
        nome: 'Mariazinha',
        endereco: 'Rua lululu 200',
        sexo: 'Feminino',
        telefone: '5555-4321'
    }
];

//GET /api/v1/clientes - consulta que retorna todos os registros
app.get("/api/v1/clientes", (req,res) =>{
    //writeHead - define o HTTP Status e os headers da resposta
    res.writeHead(200,{"Content-Type": "application/json"});
    res.end(JSON.stringify(fakeData));
});

app.get("/api/v1/clientes/:id", (req, res) =>{
    //console.log(req.params.id);
    let httpStatus = 200;
    let id = req.params.id;
    let umcliente = fakeData.find(o => o.id == id);
    if(umcliente == undefined){
        httpStatus = 404;
    }
    res.writeHead(httpStatus,{"Content-Type": "application/json"});
    res.end(JSON.stringify(umcliente));
});

app.get("/api/v1/clientes/nome/:nome", (req, res) =>{
    let httpStatus = 200;
    let nome = req.params['nome'];
    let umcliente = fakeData.find(o => o.nome.includes(nome));
    if(umcliente == undefined){
        httpStatus = 404;
    }
    res.writeHead(httpStatus,{"Content-Type": "application/json"});
    res.end(JSON.stringify(umcliente));
});

app.post("/api/v1/clientes", (req, res) =>{
    let httpStatus = 201;
    console.log(req.body);
    
    let novoCliente = req.body;
    
    if(!novoCliente.hasOwnProperty('nome') || !novoCliente.hasOwnProperty('endereco')
      || !novoCliente.hasOwnProperty('sexo') || !novoCliente.hasOwnProperty('telefone')
      || req.body.nome === "" || req.body.endereco === ""
      || req.body.sexo === "" || req.body.telefone === ""){

        httpStatus = 400;
    }else{
        let maiorid = Math.max(...fakeData.map(o => o.id));
        if(maiorid == -Infinity) maiorid = 0;
        novoCliente.id = maiorid + 1;
        fakeData.push(novoCliente);
    }

    res.writeHead(httpStatus,{"Content-Type": "application/json"});
    res.end(JSON.stringify(novoCliente));
});

app.put("/api/v1/clientes/:id", (req, res) =>{
    let httpStatus = 200;
    let id = req.params.id;
    let umcliente = fakeData.find(o => o.id == id);

    if(umcliente == -Infinity || umcliente == undefined){
        httpStatus = 404;
    }else{
        let campos = ['nome', 'endereco', 'sexo', 'telefone'];
        if(!Object.keys(req.body).some(o => campos.includes(o))
          || req.body.nome === "" || req.body.endereco === ""
          || req.body.sexo === "" || req.body.telefone === ""){
            umcliente = {};
            httpStatus = 400;
        }else{
            umcliente.nome = req.body.nome,
            umcliente.endereco = req.body.endereco,
            umcliente.sexo = req.body.sexo,
            umcliente.telefone = req.body.telefone
        }
    }

    res.writeHead(httpStatus,{"Content-Type": "application/json"});
    res.end(JSON.stringify(umcliente));
});

app.delete("/api/v1/clientes/:id", (req, res) =>{
    let httpStatus = 200;
    let id = req.params.id;
    let umcliente = fakeData.find(o => o.id == id);
    let posicao = fakeData.indexOf(umcliente);
    if(umcliente == -Infinity || umcliente == undefined){
        httpStatus = 404;
    }else{
        fakeData.splice(posicao, 1);
    }
    res.writeHead(httpStatus,{"Content-Type": "application/json"});
    res.end(JSON.stringify(umcliente));
});

app.listen(3000, () =>{
    console.log("Servidor online");
    console.log("http://localhost:3000/");
});