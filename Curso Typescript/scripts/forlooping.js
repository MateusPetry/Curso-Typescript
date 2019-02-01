console.log('%c Forlooping - tipos de for', 'background-color: yellow;');
let array = ["Dado1", "Dado2"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
array.forEach((name) => {
    console.log(name);
});
let person = { name: "asdasd", lastname: "asdsad" };
for (let prop in person) {
    console.log(prop);
}
for (let prop in array) {
    console.log(prop);
    console.log(typeof (prop));
}
for (let prop of array) {
    console.log(prop);
}
//# sourceMappingURL=forlooping.js.map