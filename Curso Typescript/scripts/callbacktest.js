//passa a função de dentro de outra função
console.log('%c Callback', 'background-color: yellow;');
function doingSomething(callback) {
    callback.call(this, name => "William Suane");
    callback.apply(this, ["Willlian sUAAEA", "aihjhasid"]);
    callback("Wilasidla");
}
function execute(name) {
    console.log(name);
}
doingSomething(execute);
//# sourceMappingURL=callbacktest.js.map