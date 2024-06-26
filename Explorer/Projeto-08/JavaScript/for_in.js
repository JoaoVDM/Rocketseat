// For...In

let person = {
    name: 'Joao',
    age: 21,
    weight: 88.6
}

for(let property in person) {
    console.log(property);
    console.log(person[property]);
}