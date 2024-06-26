// Funções construtoras

//Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
	this.name = name
	this.walk() = function() {
		return (this.name + "está andando")
	}
}
const joao = new Person("João")
const mayk = new Person("Mayk")
console.log(joao.walk);