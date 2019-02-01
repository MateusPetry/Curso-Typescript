console.log('%c Namespaces - Email','background-color: yellow;');
namespace Validation{
    import Validator = Validation.Validator;
    let emailRegex: RegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    export class EmailValidator implements Validator{
         isValid(str:string): boolean{
            return emailRegex.test(str);
        }
    }
}