var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello world');
//types
var mystring = "Scott Aspect";
mystring = 2020 + " " + "Scott Aspect";
var mynumber = 487;
var mybool = true || false;
var myvar = "hello";
myvar = 11;
//arrays
var stringarray = ["", "", ""];
var numberarray = [1, 2, 3];
var booleanarray = [true, false, true];
var anyarray = [1, true, "hello"];
//tupls
var stringNumTuple;
stringNumTuple = ["hola", 487];
// void, Undefined, null
var pi = 3.1415;
var myboy = undefined;
var mynull = null;
var myund = undefined;
//funtion
function getsum(number1, number2) {
    return number1 + number2;
}
var mysum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getname(firtname, lastname) {
    if (lastname == undefined) {
        return firtname;
    }
    //return firtname + ' '+ lastname; // forma tradicional de retornar las variables
    return firtname + " " + lastname; // forma es6 para retornar variables
}
function myvoidFunc() {
    return;
}
var number3;
number3 = mysum(1, "hola");
function showtodo(todo) {
    console.log(todo.title + " - " + todo.text);
    return todo.title + " - " + todo.text;
}
var mytodo = { title: 'Hola', text: 'Mundo...' };
showtodo(mytodo);
//Clases
var user = /** @class */ (function () {
    function user(name, mail, age) {
        this.name = name;
        this.mail = mail;
        this.age = age;
    }
    user.prototype.register = function () {
        console.log(this.name + " is register");
    };
    user.prototype.ShowMeAge = function () {
        return this.age;
    };
    user.prototype.AgeinYears = function () {
        return this.age + ' years';
    };
    user.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return user;
}());
var cmartinez = new user('Cmartinez487', 'cmartinez@email.com', 33);
//Herencia
var member = /** @class */ (function (_super) {
    __extends(member, _super);
    function member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    member.prototype.payIvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return member;
}(user));
var gordon = new member(1, 'char', 'char@aznable.com', 33);
//ver en el explorador
//document.write(showtodo(mytodo));
console.log(gordon.payInvoice());
document.write(gordon.mail);
