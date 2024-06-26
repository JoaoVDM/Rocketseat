//Funções são tipos de dados estruturais, que são declarados dessa forma: function nomeFunção() { código à ser executado } e para executar a função, usa-se: nomeFunção(). Uma função é importante para o agrupamento e reutilização de código.

// Criar um aplicativo de frases motivacionais

// Declaration - declaração da funçao
// Function statement
function createPhrases() {
    console.log('Estudar é muito bom');
    console.log('Paciência e persistência');
    console.log('Revisão é mãe do aprendizado');
}

// Executar a função 
// Rodar, chamar, invocar
// Execute, run, call, invoke
createPhrases()

console.log('Fim do programa');

// Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.

// Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

// Function expression
// Function anonymous
let total = 0

// Parâmetros (parameters)
const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

//console.log(`o número 1 é ${number1}`);
//console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);
console.log(total);