const nome ="Lucas Germano";
let nome2 = "";
let pessoadefault = {
    nome: "Lucas Germano",
    idade: "34",
    trabalho: "Analista"
}

let nomes = ["Lucas Germano", "Alexandre Germano", "Pedro Silva"];
let pessoas = [
    {
        nome: "Lucas Germano",
        idade: "34",
        trabalho: "Analista"

    },
    {
        nome: "Alexandre Germano",
        idade: "06",
        trabalho: "Nada"

    }
];



function alterarnome() {
    nome2 = "Xandynho";
    console.log("Valor alterado:")
    console.log(nome2);
}

function recebeealteranome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirpessoa(pessoa){
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);    
}

function adicionarpessoa(pessoa) {
    pessoas.push(pessoa);
}


function imprimirpessoas(){
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })

}

imprimirpessoas();


//adicionarpessoa({
//        nome = "Pedro Silva",
//        idade = "38",
//        trabalho = "porteiro"
//});

console.log(pessoas);

//imprimirpessoa(pessoadefault);

//imprimirpessoa({
//    nome: "Maria Silva",
//    idade: "43",
//    trabalho: "UX/UI"
//})

//recebeealteranome("João Silva Pereira");
//recebeealteranome("Maria Silva");

//alterarnome(); 