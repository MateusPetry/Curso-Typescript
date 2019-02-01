console.log('%c Sets', 'background-color: yellow;');
let nameSet = new Set();
// nameSet.add("Wasdas");
// nameSet.add("gsdfs");
// nameSet.add("Wasdas");
nameSet.add("Wasdas").add("gsdfs").add("Wasdas");
let nameSet2 = new Set(["Brenon", "Sandy", "Wildney", "Bruno"]);
console.log(nameSet);
console.log(nameSet2);
console.log(nameSet.has("Wasdas")); //procura se existe Wasdas dentro do array
console.log(nameSet.delete("Wasdas"));
console.log(nameSet.has("Wasdas"));
console.log(nameSet.size);
nameSet.clear();
console.log(nameSet);
for (let aux of nameSet2) { //imprimir elementos do set
    console.log(aux);
}
console.log("-----------");
nameSet2.forEach(value => console.log(value)); //imprimir elementos do set
//# sourceMappingURL=sets.js.map