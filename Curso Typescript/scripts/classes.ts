console.log('%c Classes','background-color: yellow;');

class Person2{
    private _name: string;
 
    
    constructor(name: string){
        this._name = name;
    }
    print():void{
        console.log(`name: ${this._name}`);
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
}

class Employee2 extends Person2{
    private _salary: number;
    constructor(name:string, salary:number){
        super(name); //substitui o name da classe Person
        this._salary = salary;
    }
    print():void{
        super.print();
        console.log(`salary: ${this._salary}`);
    }
    
    
    get salary():number{
        return this._salary;
    }
    set salary(value: number) {
        this._salary = value;
    }
    
}

let p1= new Person2("P 1");
let emp1 = new Employee2("Emp 1", 5000);
p1.print();
emp1.print();

console.log('%c Polimorfismo e modificadores de acesso','background-color: yellow;');

let p2 = <Person2>{}; //fala que o p2 é do tipo Person2
let p3: Person2 = new Employee2("Lucy",1234);
p3.print();

console.log('%c Anonymous e Named Functions','background-color: yellow;');

console.log(p1.name) //get
p1.name="P1 alterado"; //set
console.log(p1.name); 
