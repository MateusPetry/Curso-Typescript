console.log('%c Tipos de variáveis', 'background-color: yellow;');
var p = document.createElement('p');
var ola = "Olá mundo!";
p.textContent = ola;
document.body.appendChild(p);
//Aula 03: tipos de variáveis
var num = 10;
var bool = true;
var str = "A beautiful message";
var str2 = 'A beautiful message';
var str3 = `${str2} to william
finishing my string`;
console.log(str3);
function func() { }
if (bool !== null) { }
if (bool === undefined) { }
if (bool) {
    let i;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
let list = [1, 2, 3];
let list2 = [1, 2, 3];
let tuple;
tuple = ["william", 22];
console.log(tuple[0]);
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
})(Day || (Day = {}));
let day = Day.Monday;
console.log(`day: ${day} | ${Day.Tuesday} | ${Day.Wednesday}`);
console.log(`day: ${Day[0]} | ${Day[1]} | ${Day[2]}`);
function add(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log(`add ${add(1, 2)}`);
console.log(`add ${add("adicionado", "string")}`);
let var1 = "sasa";
let example = null;
let stringLenght = var1.length;
let stringUpperCase = var1.toLocaleUpperCase();
console.log(stringLenght);
console.log(stringUpperCase);
function add2(v1, ...v2) {
    let soma = 0;
    for (let i = 0; i < v2.length; i++) {
        soma += v2[i];
    }
    console.log(v1 + soma);
}
add2("Soma é: ", 1, 2, 4, 5);
//# sourceMappingURL=olamundo.js.map