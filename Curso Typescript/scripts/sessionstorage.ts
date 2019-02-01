console.log('%c Session Storage','background-color: yellow;');

let key = "key1";
let key2 = "key2";

console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));
sessionStorage.setItem(key,"Mateus");
sessionStorage.setItem(key2,"Petry");
console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));

for(let i=0; i<sessionStorage.length; i++){
    console.log(sessionStorage.getItem(<string>sessionStorage.key(i)));
}

sessionStorage.removeItem(key); 
console.log("vai retornar nulo:");
console.log(sessionStorage.getItem(key));
sessionStorage.clear(); //limpar sessão
for(let i=0; i<sessionStorage.length; i++){
    console.log(sessionStorage.getItem(<string>sessionStorage.key(i)));
}

console.log('%c Local Storage','background-color: yellow;');

let key3 = "localStorageKey";
localStorage.setItem(key3,"Trying local storage"); //grava uma key na máquina (máximo 5mb)
console.log(localStorage.getItem(key3));
//localStorage.clear();  //limpar local storage