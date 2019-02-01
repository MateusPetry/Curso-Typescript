//passa a função de dentro de outra função
console.log('%c Callback','background-color: yellow;');

function doingSomething(callback: (name:string)=>void):void{
    callback.call(this, name=> "William Suane");
    callback.apply(this,["Willlian sUAAEA","aihjhasid"]);
    callback("Wilasidla");
}
function execute(name:string):void{
    console.log(name);
}
doingSomething(execute);