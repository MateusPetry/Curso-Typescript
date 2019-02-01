class ClickHandler {
    constructor() {
        let main = document.querySelector("#title");
        let btn1 = document.querySelector("#btn1");
        let btn2 = document.querySelector("#btn2");
        main.addEventListener("click", ClickHandler.alertEventTitle, true);
        btn1.addEventListener("click", ClickHandler.alertEventBtn1, true);
        btn2.addEventListener("click", ClickHandler.alertEventBtn2, true);
    }
    static alertEventTitle() {
        alert("Clicked over title");
    }
    static alertEventBtn1() {
        alert("Clicked over btn1");
    }
    static alertEventBtn2() {
        alert("Clicked over btn2");
    }
}
const clickHandler = new ClickHandler();
//# sourceMappingURL=events.js.map