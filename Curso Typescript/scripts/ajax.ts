
//0- uninitialized, 1-set up, 2- sent, 3- In flight, 4- Complete

class AjaxTest{
    private READY_STATUS_CODE = 4;

    private isCompleted(req:XMLHttpRequest){
        return req.readyState === this.READY_STATUS_CODE;
    }
    public httpGet(url:string, callback:(status: number, response: string)=>any):void{
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if(finished){
                callback(req.status, req.responseText);
            }
        }
        req.open("GET", url,true);
        req.send();
    }

    public httpPost(url:string, data:string,callback:(status: number, response: string)=>any):void{
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if(finished){
                callback(req.status, req.responseText);
            }
        }
        req.open("POST", url,true);
        req.setRequestHeader("Content-type","application/json");
        req.send();
    }
}

let ajax = new AjaxTest();
ajax.httpGet("http://httpbin.org/ip",(status:number, response: string)=>{
    let divMain = <HTMLDivElement> document.getElementById("main");
   // divMain.innerHTML = response;
   console.log('%c Requisição GET Ajax','background-color: yellow;');

   console.log(response);
});

ajax.httpPost("http://httpbin.org/post","{name: 'Mateus Petry' asasddsasda}",(status:number, response: string)=>{
    let divMain = <HTMLDivElement> document.getElementById("main");
    //divMain.innerHTML = response;
    console.log('%c Requisição POST Ajax','background-color: yellow;');
    console.log(response);
});