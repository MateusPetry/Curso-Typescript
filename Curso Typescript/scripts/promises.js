console.log('%c Promises', 'background-color: yellow;');
let promise = new Promise((resolve, reject) => {
    //Opening the file
    let isOpened = true;
    if (isOpened) {
        resolve("Opened");
    }
    else {
        reject("Not opened");
    }
});
// promise.then((fromResolve)=>{
//     console.log(fromResolve);
// }).catch((fromReject)=>{
//     console.log(fromReject);
// });
function openFile() {
    return new Promise((resolve, reject) => {
        //Opening the file
        let isOpened = true;
        if (isOpened)
            resolve("Opened");
        reject("Not opened");
    });
}
function readFile() {
    return new Promise((resolve, reject) => {
        //Reading the file
        let isOpened = true;
        if (isOpened)
            resolve("Readed");
        reject("Not readed");
    });
}
function deleteFile() {
    return new Promise((resolve, reject) => {
        //Deleting the file
        let isOpened = true;
        if (isOpened)
            resolve("Deleted");
        reject("Not deleted");
    });
}
openFile()
    .then(() => readFile()
    .then(() => deleteFile()
    .then(() => console.log("everything ok"))
    .catch((frj) => console.log(frj)))
    .catch((frj) => console.log(frj)))
    .catch((frj) => console.log(frj));
Promise.all([openFile(), readFile(), deleteFile()]).then().catch();
Promise.race([openFile(), readFile(), deleteFile()]).then().catch();
//# sourceMappingURL=promises.js.map