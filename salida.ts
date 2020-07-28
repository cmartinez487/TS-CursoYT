console.log('hello world');

//types

var mystring: string = "Scott Aspect";

mystring = 2020 +" "+ "Scott Aspect";

var mynumber: number = 487;

var mybool: boolean = true || false;

var myvar:any = "hello";

myvar = 11;

//arrays

var stringarray: string[] = ["","",""];

var numberarray: number[] = [1,2,3];

var booleanarray: boolean[] = [true,false,true]

var anyarray: any[] = [1,true, "hello"]

//tupls

var stringNumTuple: [string, number];

stringNumTuple = ["hola", 487];

// void, Undefined, null

const pi = 3.1415;

let myboy: void = undefined;
let mynull: null = null;
let myund: undefined = undefined;

//funtion
function getsum(number1: number, number2:number): number
{
    return number1 + number2;
}

let mysum = function(num1: number | string, num2: number | string): number
{
    if(typeof(num1) === 'string')
    {
        num1 = parseInt(num1);
    }

    if(typeof(num2) === 'string')
    {
        num2 = parseInt(num2);
    }

    return num1 + num2;
}

function getname(firtname: string, lastname?: string): string
{
    if(lastname == undefined)
    {
        return firtname;
    }

    //return firtname + ' '+ lastname; // forma tradicional de retornar las variables
    return `${firtname} ${lastname}`; // forma es6 para retornar variables
}

function myvoidFunc():void
{
    return;
}

var number3: number;
number3 = mysum(1,"hola")

// interfaces
interface Itodo
{
    title: string; text: string
}

function showtodo(todo: Itodo): string
{
    console.log(`${todo.title} - ${todo.text}`)

    return `${todo.title} - ${todo.text}`
}

let mytodo: Itodo = {title: 'Hola', text: 'Mundo...'}

showtodo(mytodo);

//Clases
class user
{
    private name: string;
    public mail: string;
    protected age: number;

    constructor(name: string, mail: string, age: number)
    {
        this.name = name;
        this.mail = mail;
        this.age = age;
    }

    register()
    {
        console.log(`${this.name} is register`);
    }

    ShowMeAge(){
        return this.age;
    }

    public AgeinYears(){
        return this.age + ' years';
    }

    payInvoice(){
        console.log(`${this.name} paide invoice`);
    }
}

var cmartinez = new user('Cmartinez487', 'cmartinez@email.com', 33);

//Herencia

class member extends user
{
    id:number;

    constructor(id, name, email, age)
    {
        super(name, email, age);
        this.id = id;
    }

    payIvoice(){
        super.payInvoice();
    }

}

var gordon = new member(1,'char','char@aznable.com',33)

//ver en el explorador

//document.write(showtodo(mytodo));

console.log(gordon.payInvoice())
document.write(gordon.mail);

