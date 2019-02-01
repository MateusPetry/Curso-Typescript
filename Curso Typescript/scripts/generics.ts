//generics são usados quando vc não sabe qual o tipo que vai receber dentro da função 
//e vc quer usar o tipo seguro de dados 

console.log('%c Generics','background-color: yellow;');

function reverseList<T>(list:Array<T>): Array<T>{
    let reversedList: T[]=[];
    for(let i=list.length-1;i>=0;i--){
        reversedList.push(list[i]);
    }
    return reversedList;
}

let names = ["Luffy","Zorro","Snaji"];
let numbers = [1,2,3,4,5];
let reverseNames = reverseList<string>(names);
let reverseNumbers = reverseList<number>(numbers);
console.log(reverseNames);
console.log(reverseNumbers);

let reversedListArrow = <T>(list:Array<T>): Array<T> =>{
    let reversedList: T[]=[];
    for(let i=list.length-1;i>=0;i--){
        reversedList.push(list[i]);
    }
    return reversedList;
};

console.log(reversedListArrow(names));

class Person3{
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

interface Repository<T,ID>{
    findById(id:ID):T;
    save(entity: T):T;
}

class Person3Repository implements Repository<Person3, number>{
    findById(id: number): Person3 {
        console.log(`Searching using ID: ${id}`);
        return new Person3("Nami");
    }    
    save(entity: Person3): Person3 {
        return new Person3("Franky");
    }
}
let personRepository = new Person3Repository();
console.log(personRepository.findById(3));
console.log(personRepository.save(new Person3("Chopper")));

interface NumberId{
    id: number;
}

interface Repository2<T, ID extends NumberId>{
    findById(id: ID): T;
    save(entity: T): T;
}

class Person3Repository2 implements Repository2<Person3, NumberId>{
    findById(numberId: NumberId): Person3 {
        console.log(`Searching using ID: ${numberId.id}`);
        return new Person3("Nami");
    }    
    save(entity: Person3): Person3 {
        return new Person3("Franky");
    }
}

let personRepository2 = new Person3Repository2();
console.log(personRepository2.findById({id:1}));

