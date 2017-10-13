var count : number = 2;
var path : string[]|string;
path = ['/temp/index.html','/temp/login.html']
path = 'temp/logout.html'

type PrimitiveArray = Array<string|number|boolean>
type Mynumber  = number

// 具名函数
function fn(name?:string) : string{
    if (name) {
        return 'i am '+name;
    }else {
        return 'hi'
    }
}

// 匿名函数
var fn1 = function (name?:string):string {
    if (name) {
        return 'i am '+name;
    }else {
        return 'hi'
    }
}
var fn2 = (name?: string):string =>  name ? '1' : '0'

class Character {
    fullname : string;
    constructor(firstname:string, lastname:string){
        this.fullname = firstname+' '+lastname;
    }
    greet = (name?:string):string=>'hi'+name
}
var tom = new Character('tom','white');
tom.greet('jerry')

interface LoggerInterface {
    log(arg: any): void;
}
class Logger implements LoggerInterface {
    log(arg){
        console.log(arg)
    }
}
interface UserInterface {
    name: string;
    password: string
}

namespace Geometry {
    interface VectorInerface {
        /*...*/
    }
    export interface Vector2dInterface{
        /*...*/
    }
    export interface Vector3dInterface{
        /*..*/
    }
    export class Vector2d implements VectorInerface, Vector2dInterface{
        /*..*/
    }
    export class Vector3d implements VectorInerface, Vector3dInterface{
        /*...*/
    }
}

function greetNamed(name: string):string{
    if (name) {
        return 'hi,'+name
    }
}
var greetNamed2:(name:string)=>string = function (name:string):string {
    if (name) {
        return 'hi,' + name
    }
}
function add(foo:number[]):number {
    let result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i]
    }
    return result
}
add([2,2,2,2,2,2]) // 12
function test(name:string):string;
function test(age:number):string;
function test(single: boolean):string;
function test(value:(string|number|boolean)):string {
    switch (typeof value){
        case 'string':
            return `my name is ${value}`
        case 'number':
            return `i am ${value} years old`
        case 'boolean':
            return value ? 'i am single' : 'i am not single'
        default:
            console.log('haha');
    }
}
class Counter {
    private _i : number;
    constructor(){
        this._i = 0;
    }
    get():number{
        return this._i;
    }
    set(val:number):void{
        this._i = val;
    }
    increment():void{
        this._i++
    }
}
var counter = new Counter();
counter.set(2)
counter.get()//2
counter.increment()
class User{
    name:string;
    age:number
}
class Order{
    id:number;
    total:number;
    items:any[]
}
// function getEntities<T>(url:string,cb:(list:T[])=>void):void{ // 范型函数
//     $.ajax({
//         url:url,
//         method:'GET',
//         success: function (data) {
//             cb(data.items);
//         },
//         error:function (err) {
//             console.log(err);
//             cb(null)
//         }
//     })
// }
// getEntities<User>("/api/users", function (users:User[]) {
//     for (var i = 0; i < users.length; i++) {
//         var user = users[i];
//         console.log(user);
//     }
// })
// getEntities<Order>("/api/users", function (orders:Order[]) {
//     for (var i = 0; i < orders.length; i++) {
//         var user = orders[i];
//         console.log(user);
//     }
// })
function htmlEscape(literals, ...placeholders){
    let result = 0;
    for (var i = 0; i < placeholders.length; i++) {
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&guot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt')
            .replace(/>/g, '&gt');
    }
    result += literals[literals.length-1];
    return result
}
var lame:string = '_aaa';
var surname = 'sss'
var html = htmlEscape`<h1>${lame}${surname}</h1>`;
console.log(html);


var foo = function () {
    console.log('foo');
}
function bar(cb:()=>void){
    console.log('bar');
    cb()
}
bar(foo)
