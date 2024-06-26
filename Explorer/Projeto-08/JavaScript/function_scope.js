// Function scope
// Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.

let subject

function createThink() {
    subject = 'study'
    return subject
}

console.log(subject);
console.log(createThink());
console.log(subject);