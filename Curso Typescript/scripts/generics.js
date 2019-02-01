//generics são usados quando vc não sabe qual o tipo que vai receber dentro da função 
//e vc quer usar o tipo seguro de dados 
console.log('%c Generics', 'background-color: yellow;');
function reverseList(list) {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
let names = ["Luffy", "Zorro", "Snaji"];
let numbers = [1, 2, 3, 4, 5];
let reverseNames = reverseList(names);
let reverseNumbers = reverseList(numbers);
console.log(reverseNames);
console.log(reverseNumbers);
let reversedListArrow = (list) => {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
};
console.log(reversedListArrow(names));
class Person3 {
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
class Person3Repository {
    findById(id) {
        console.log(`Searching using ID: ${id}`);
        return new Person3("Nami");
    }
    save(entity) {
        return new Person3("Franky");
    }
}
let personRepository = new Person3Repository();
console.log(personRepository.findById(3));
console.log(personRepository.save(new Person3("Chopper")));
class Person3Repository2 {
    findById(numberId) {
        console.log(`Searching using ID: ${numberId.id}`);
        return new Person3("Nami");
    }
    save(entity) {
        return new Person3("Franky");
    }
}
let personRepository2 = new Person3Repository2();
console.log(personRepository2.findById({ id: 1 }));
//# sourceMappingURL=generics.js.map