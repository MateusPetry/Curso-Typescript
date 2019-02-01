console.log('%c Destructuring','background-color: yellow;');

//salvar em uma variável uma parte do objeto/array

namespace Destructuring{
let person = {name: "primeiro", lastname: "segundo"};

let {name: name2, lastname:lastname2} = person;

console.log('%c Desestruturando um objeto:','background-color: yellow;');
console.log(name2);
console.log(lastname2);

console.log('%c Desestruturando um array:','background-color: yellow;');
let array = ["Dado1","Dado2"];
let [a,b] = array;
console.log(a);
console.log(b);

class Person{
    constructor(public name:string){

    }
}

function examplee(person: Person):void{
    console.log(person.name);
}
function examplee2({name}):void{
    console.log(name);
}

examplee(new Person("Nova pessoa"));
examplee2({name:"Thor"});
}