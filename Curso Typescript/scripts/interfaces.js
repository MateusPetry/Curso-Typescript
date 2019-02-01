console.log('%c Interfaces', 'background-color: yellow;');
function printName(person) {
    console.log(person.name);
}
let randomObj = { name: "Mateus", age: 762 };
let randomObj2 = { age: 20 };
printName(randomObj);
let pe = { name: "Nome Completo" };
let emp = { name: "Nome Completo2", salary: 2000 };
printName(pe);
printName(emp);
function printName2(person) {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({ name: "Test" });
let manager = { name: "Nome Completo2", salary: 2000, bonus: 5 };
manager.name = "Alterado";
//manager.bonus = 10; -> não é permitido alterar por causa do readonly
printName2(manager);
//# sourceMappingURL=interfaces.js.map