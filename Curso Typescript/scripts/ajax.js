//0- uninitialized, 1-set up, 2- sent, 3- In flight, 4- Complete
class AjaxTest {
    constructor() {
        this.READY_STATUS_CODE = 4;
    }
    isCompleted(req) {
        return req.readyState === this.READY_STATUS_CODE;
    }
    httpGet(url, callback) {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };
        req.open("GET", url, true);
        req.send();
    }
    httpPost(url, data, callback) {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };
        req.open("POST", url, true);
        req.setRequestHeader("Content-type", "application/json");
        req.send();
    }
}
let ajax = new AjaxTest();
ajax.httpGet("http://httpbin.org/ip", (status, response) => {
    let divMain = document.getElementById("main");
    // divMain.innerHTML = response;
    console.log('%c Requisição GET Ajax', 'background-color: yellow;');
    console.log(response);
});
ajax.httpPost("http://httpbin.org/post", "{name: 'Mateus Petry' asasddsasda}", (status, response) => {
    let divMain = document.getElementById("main");
    //divMain.innerHTML = response;
    console.log('%c Requisição POST Ajax', 'background-color: yellow;');
    console.log(response);
});
//# sourceMappingURL=ajax.js.map