console.log('%c Namespaces - URL', 'background-color: yellow;');
var Validation;
(function (Validation) {
    var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    var UrlValidator = /** @class */ (function () {
        function UrlValidator() {
        }
        UrlValidator.prototype.isValid = function (str) {
            return urlRegex.test(str);
        };
        return UrlValidator;
    }());
    Validation.UrlValidator = UrlValidator;
})(Validation || (Validation = {}));
console.log('%c Namespaces - Email', 'background-color: yellow;');
var Validation;
(function (Validation) {
    var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isValid = function (str) {
            return emailRegex.test(str);
        };
        return EmailValidator;
    }());
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
///<reference path="Validation.ts"/>
///<reference path="URLValidator.ts"/>
///<reference path="EmailValidator.ts"/>
var EmailValidator = Validation.EmailValidator;
var UrlValidator = Validation.UrlValidator;
var emailExamples = ["assaads@", "asdasd@asdsadas", "mateuspetry@inovadora.com.br"];
var urlExamples = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com.br"];
emailExamples.forEach(function (email) {
    console.log(email + " " + new EmailValidator().isValid(email));
});
emailExamples.forEach(function (url) {
    console.log(url + " " + new UrlValidator().isValid(url));
});
