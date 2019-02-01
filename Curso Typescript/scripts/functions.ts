function print(val: string):void{
    console.log(val);
}
print("Message here");

function printOrNot(flag: boolean = false):void{
    let str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot(true);

let sumAnonymous = function (n1: number, n2:number):void{ //função só pode ser executada depois de criada
    console.log(`sum: ${n1+n2}`);
};

sumAnonymous(1,2); 
sumNotAnonymous(1,2);

function sumNotAnonymous(n1: number, n2:number):void{ //função pode serve executada antes de criada
    console.log(`sum: ${n1+n2}`);
};

let sumArrow1 = (n1: number, n2:number) => n1+n2;
let sumArrow2 = (n1: number, n2:number) => {
    return n1+n2
};
let objectArrow = (name: string, surname:string)=>({name:name, surname:surname});
console.log(sumArrow1(3,3));
console.log(sumArrow2(4,4));
console.log(objectArrow("Nome1","Nome2"));

console.log('%c Entendendo o this','background-color: yellow;');

function testThis(){
    return this;
}
console.log(testThis()); //vai retornar window, pois o this não está indicando a função
console.log(this); //vai retornar window, pois o this não está indicando a função

let objExample={
    name: "Primeiro-nome",
    lastname: "Segundo-nome",
    fullname: function(){
        return this;
    },
    fullname2:() => {
        return this;
    },
    thisExample: this
};
console.log(objExample.name);
console.log(objExample.fullname());
console.log(objExample.fullname2());
console.log(objExample.thisExample);

let lottery ={
    names: ["GOn,","Killua","Leorio"],
    test: "ksadjks",
    createLotteryPicker: function(){
        console.log("first level this: "+this.names, +" "+this.test);
        return()=>{
            console.log("second level this: "+this);
            let pickedPersonNumber = Math.floor(Math.random() * 3);
            return {name:this.names[pickedPersonNumber]};
        }
    }
};
let personPicker = lottery.createLotteryPicker();
let pickedPerson = personPicker();

console.log(pickedPerson);
