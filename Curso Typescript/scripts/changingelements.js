let divMain = document.getElementById("main");
// divMain.innerHTML = "<span>texto do span</span>";  //substitui o texto da div
// divMain.textContent = "<span>texto do span</span>"; //substitui o texto da div, porém não interpreta a taga <span>
// divMain.textContent = "texto do span"; //substitui o texto da div como texto normal
let newDiv = document.createElement("div");
newDiv.textContent = "outro texto";
divMain.appendChild(newDiv); //adiciona texto depois da div
divMain.insertBefore(newDiv, divMain.firstChild); //adiciona texto antes da div
//# sourceMappingURL=changingelements.js.map