// Manipulando Stings e Números



/* 1- Transformar String em Número e Número em String */

// let string = '123'
// console.log(Number(string));
// let number = 321
// console.log(String(number));



/* 2- Contar quantos caracteres tem uma palavra e quantos digitos tem um número */

// let word = "paralelepipedo"
// console.log(word.length);
// let number = 1234
// console.log(String(number).length);



/* 3- Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula */

// let numero = 345.33452345
// console.log(numero.toFixed(2).replace(".", ","));



/* 4- Transforme letras minúsculas em maiúsculas. Faça o contrário disso também */

// let word = "Programar é muito bacana!"
// console.log(word.toLowerCase().toUpperCase());



/* 5- Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _ */

// let phrase = "Eu quero viver o Amor!"
// let myArray = phrase.split(" ")
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore);



/* 6- Verificar se o texto contém a palavra Amor */

// let phrase = "Eu quero viver o Amor!"
// console.log(phrase.includes("Amor"));



/* 7- Criar Array com construtor */

// let myArray = new Array('a', 'b', 'c')
// console.log(myArray);



/* 8- Contar elementos de um array */

// console.log(["a", "b", "c"].length);



/* 9- Transformar uma cadeia de caracteres em elementos de um array */

// let word = "manipulação"
// console.log(Array.from(word));



/* 10- Manipulando Arrays */
let techs = ["html", "css", "js"]

// Adicionar um item no fim
// techs.push("nodeJs")

// Adicionar no começo
// techs.unshift("sql")

// Remover do fim
// techs.pop()

// Remover do começo
// techs.shift()

// Pegar somente alguns elementos do array
// console.log(techs.slice(1, 3));

// Remover 1 ou mais items em qualquer posição do array
// techs.splice(1, 1)

// Encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs);