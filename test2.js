var count = 2;
var path;
path = ['/temp/index.html', '/temp/login.html'];
path = 'temp/logout.html';
// 具名函数
function fn(name) {
    if (name) {
        return 'i am ' + name;
    }
    else {
        return 'hi';
    }
}
// 匿名函数
var fn1 = function (name) {
    if (name) {
        return 'i am ' + name;
    }
    else {
        return 'hi';
    }
};
var fn2 = function (name) { return name ? '1' : '0'; };
var Character = (function () {
    function Character(firstname, lastname) {
        this.greet = function (name) { return 'hi' + name; };
        this.fullname = firstname + ' ' + lastname;
    }
    return Character;
}());
var tom = new Character('tom', 'white');
tom.greet('jerry');
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.log = function (arg) {
        console.log(arg);
    };
    return Logger;
}());
var Geometry;
(function (Geometry) {
    var Vector2d = (function () {
        function Vector2d() {
        }
        return Vector2d;
    }());
    Geometry.Vector2d = Vector2d;
    var Vector3d = (function () {
        function Vector3d() {
        }
        return Vector3d;
    }());
    Geometry.Vector3d = Vector3d;
})(Geometry || (Geometry = {}));
function greetNamed(name) {
    if (name) {
        return 'hi,' + name;
    }
}
var greetNamed2 = function (name) {
    if (name) {
        return 'hi,' + name;
    }
};
function add(foo) {
    var result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}
add([2, 2, 2, 2, 2, 2]); // 12
function test(value) {
    switch (typeof value) {
        case 'string':
            return "my name is " + value;
        case 'number':
            return "i am " + value + " years old";
        case 'boolean':
            return value ? 'i am single' : 'i am not single';
        default:
            console.log('haha');
    }
}
var Counter = (function () {
    function Counter() {
        this._i = 0;
    }
    Counter.prototype.get = function () {
        return this._i;
    };
    Counter.prototype.set = function (val) {
        this._i = val;
    };
    Counter.prototype.increment = function () {
        this._i++;
    };
    return Counter;
}());
var counter = new Counter();
counter.set(2);
counter.get(); //2
counter.increment();
var User = (function () {
    function User() {
    }
    return User;
}());
var Order = (function () {
    function Order() {
    }
    return Order;
}());
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
function htmlEscape(literals) {
    var placeholders = [];
    for (var _a = 1; _a < arguments.length; _a++) {
        placeholders[_a - 1] = arguments[_a];
    }
    var result = 0;
    for (var i = 0; i < placeholders.length; i++) {
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&guot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt')
            .replace(/>/g, '&gt');
    }
    result += literals[literals.length - 1];
    return result;
}
var lame = '_aaa';
var surname = 'sss';
var html = (_a = ["<h1>", "", "</h1>"], _a.raw = ["<h1>", "", "</h1>"], htmlEscape(_a, lame, surname));
console.log(html);
var foo = function () {
    console.log('foo');
};
function bar(cb) {
    console.log('bar');
    cb();
}
bar(foo);
var _a;
//# sourceMappingURL=test2.js.map