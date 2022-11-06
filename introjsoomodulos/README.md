# Orientação a objetos em Javascript

## Objeto
Object é qualquer estrutura que esteja dentro de chaves e que possua o padrão atributo: valor
```javascript
let pessoa = {
    nome: "Zezinho",
    idade: 22
}

console.log(typeof(pessoa));
console.log(pessoa);
```
Resultado:
```javascript
object
{nome: 'Zezinho', idade: 22}
```
<br />

Utiliza-se o operador . para acessar atributos e métodos.
```javascript
console.log(pessoa.nome);
```

Utiliza-se a notação de listas para acessar atributos.
```javascript
console.log(pessoa['nome']);
```

Utiliza-se os mesmos operadores para acessar atributos e alterar seus valores.
```javascript
pessoa.nome = "Zezinho da Silva";
console.log(pessoa.nome);

pessoa['nome'] = "Zezinho da Silva Sauro";
console.log(pessoa['nome']);
```

É possível criar novos atributos que não existiam no objeto no momento da sua definição.
```javascript
pessoa.endereco = "Rua lalala 100";
console.log(pessoa);
```

Formata um objeto Javascript em um texto no formato JSON, para ser transferido para outra aplicação em outra linguagem de programação.
```javascript
console.log(JSON.stringify(pessoa));
```

*JSON.parse* transforma um dado JSON texto para um objeto Javascript
```javascript
let objTexto = '{"nome":"mariazinha"}';
let objs = JSON.parse(objTexto);
console.log(objs);
```

Métodos são considerados propriedades que tem a referência para uma função. Devem utilizar a palavra *this* para acessar as propriedades da instância do objeto.
```javascript
let pessoa = {
    nome: "Zezinho",
    idade: 22,
    reservista: true,
    cidade: {
        nome: "Joinville",
        estado: "Santa Catarina"
    },
    telefones: [
        "555-1234", "999999999"
    ],
    geraEndereco: function(){
        return `${this.cidade.nome} - ${this.telefones[0]}`;
    },
    somaIdade: function(valorAdicional){
        return this.idade + valorAdicional;
    }
};

console.log(pessoa.geraEndereco());
console.log(pessoa.somaIdade(20));
```

As palavras reservadas *get* e *set* podem ser utilizadas para criação de propriedades que dão acesso a atributos do objeto.
```javascript
let pessoa = {
    nome: "Zezinho",
    idade: 22,
    reservista: true,
    cidade: {
        nome: "Joinville",
        estado: "Santa Catarina"
    },
    telefones: [
        "555-1234", "999999999"
    ],
    geraEndereco: function(){
        return `${this.cidade.nome} - ${this.telefones[0]}`;
    },
    somaIdade: function(valorAdicional){
        return this.idade + valorAdicional;
    },
    get nomeCompleto() {
        return this.nome;
    }
    set nomeCompleto(nome){
        this.nome = nome;
    }
};
console.log(pessoa.nomeCompleto);

console.log(pessoa.geraEndereco());
console.log(pessoa.somaIdade(20));
```

A palavra chave *class*, define uma classe que é utilizada como template para criação de novos objetos. Não é possível (ainda) criar atributos dentro do escopo da classe. E utilizar a palavra reservada *new* para instanciar o objeto a partir da classe.
```javascript
class Pessoa{
    constructor(){
        this.nome;
        this.idade = 0;
    }
    gerarIdentidade(){
        return `${this.nome} - ${this.idade}`;
    }
}

let umaPessoa = new Pessoa();
umaPessoa.nome = "Zezinho";
console.log(umaPessoa.nome);
console.log(umaPessoa.gerarIdentidade());
```

A palavra reservada *extends* permite o uso da herança em Javascipt. Funcionamento similar ao Java, exigindo a chamada do construtor da classe PAI através da chamada do método super();
```javascript
class PessoaJuridica extends Pessoa {
    constructor(cnpj){
        super();
        this.CNPJ = cnpj;
    }
}
```
<br />

## Módulos
<u>IMPORTANTE:</u> precisa colocar o type="module" no html.
```html
<script type="module" src="script3.js"></script>
```
Exemplo simples de exportação de um módulo e importação em outro arquivo.

### Arquivo pessoa.js
```javascript
export class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
```

### Arquivo script3.js
```javascript
import {Pessoa} from "./pessoa.js";

let umaPessoa = new Pessoa("Zezinho",22);
console.log(umaPessoa.idade);
console.log(umaPessoa.nome);
```

Resultado:
```javascript
22
Zezinho
```
<br />

Exportar duas classes e importar em outro arquivo

### Arquivo pessoa.js
```javascript
export class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

export class Cidade {
    constructor(nome){
        this.nome = nome;
    }
}
```

### Arquivo script3.js
```javascript
import {Pessoa, Cidade} from "./pessoa.js";
```
<br />

Exemplo de *export* no final do arquivo
```javascript
class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidade {
    constructor(nome){
        this.nome = nome;
    }
}

export {
    Pessoa,
    Cidade
}
```
<br />

Export DEFAULT - quando eu não tenho controle sobre o import
### Arquivo pessoa.js
```javascript
export default class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
```

### Arquivo script3.js
```javascript
import qqrcoisa from "./pessoa.js";
let umaPessoa = new qqrcoisa("Zezinho",22);
```