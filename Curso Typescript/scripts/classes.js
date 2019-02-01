console.log('%c Classes', 'background-color: yellow;');
class Person2 {
    constructor(name) {
        this._name = name;
    }
    print() {
        console.log(`name: ${this._name}`);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
class Employee2 extends Person2 {
    constructor(name, salary) {
        super(name); //substitui o name da classe Person
        this._salary = salary;
    }
    print() {
        super.print();
        console.log(`salary: ${this._salary}`);
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value;
    }
}
let p1 = new Person2("P 1");
let emp1 = new Employee2("Emp 1", 5000);
p1.print();
emp1.print();
console.log('%c Polimorfismo e modificadores de acesso', 'background-color: yellow;');
let p2 = {}; //fala que o p2 é do tipo Person2
let p3 = new Employee2("Lucy", 1234);
p3.print();
console.log('%c Anonymous e Named Functions', 'background-color: yellow;');
console.log(p1.name); //get
p1.name = "P1 alterado"; //set
console.log(p1.name);
//# sourceMappingURL=classes.js.map