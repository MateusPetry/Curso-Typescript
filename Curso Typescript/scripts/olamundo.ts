console.log('%c Tipos de variáveis','background-color: yellow;');

var p = document.createElement('p');
var ola: string = "Olá mundo!";
p.textContent = ola;
document.body.appendChild(p);

//Aula 03: tipos de variáveis
var num: number =10;
var bool: boolean = true;
var str: string = "A beautiful message";
var str2: string = 'A beautiful message';
var str3: string = `${str2} to william
finishing my string`;
console.log(str3);
function func():void{}
if(bool !== null){}
if(bool === undefined){}

if(bool){
    let i:number;
 for(i=0; i<3; i++){
    console.log(i);
 }
}

let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let tuple: [string, number];
tuple = ["william", 22];
console.log(tuple[0]);

enum Day{Monday, Tuesday, Wednesday}
let day: Day = Day.Monday;
console.log(`day: ${day} | ${Day.Tuesday} | ${Day.Wednesday}`);
console.log(`day: ${Day[0]} | ${Day[1]} | ${Day[2]}`);

function add(v1:any, v2:any, v3?:any):any{  //o ? torna a variável opcional
if(v3 !== undefined)
return v1+v2+v3;
return v1+v2;
}

console.log(`add ${add(1,2)}`);
console.log(`add ${add("adicionado","string")}`);

let var1: any = "sasa";
let example: number = null;

let stringLenght: number = (<string> var1).length;
let stringUpperCase: string = (var1 as string).toLocaleUpperCase();

console.log(stringLenght);
console.log(stringUpperCase);

function add2(v1: string, ...v2:number[]):void{
let soma: number=0;
for(let i=0; i<v2.length;i++){
    soma += v2[i];
}
console.log(v1+soma);
}
add2("Soma é: ",1,2,4,5);