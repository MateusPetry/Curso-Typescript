console.log('%c Interfaces','background-color: yellow;');
function printName(person: {name:string}):void{
    console.log(person.name);
}

let randomObj = {name: "Mateus", age: 762};
let randomObj2 = {age: 20};
printName(randomObj);
//printName(randomObj2);
interface Person{
    name:string;
    //age?:number;
}
interface Employee extends Person{
    salary: number;
}
let pe: Person = {name: "Nome Completo"};
let emp: Employee = {name: "Nome Completo2", salary:2000};
printName(pe);
printName(emp);

function printName2(person: Person): void{
    console.log(person.name);
}

printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({name:"Test"} as Person);

interface Person{
    age?: number;
}
interface Manager extends Employee{
    readonly bonus: number;
}

let manager: Manager = {name: "Nome Completo2", salary:2000, bonus:5};
manager.name = "Alterado";
//manager.bonus = 10; -> não é permitido alterar por causa do readonly
printName2(manager);