var x = "Hello Johnson";
var p = [20, 30];
var a = p[0], b = p[1];
console.log(p);
console.log(x);
var w = 4;
console.log(w);
// Creating an object
var obj = { name: "Johnson", age: 34 };
console.log(obj);
// Union types
function myParameters(para) {
    console.log("This is the number ".concat(para));
}
myParameters(2);
// Creating functions in TS
function multiply(n) {
    return n * 2;
}
var ml = multiply(3);
console.log(ml);
// Adding optional parameters in TS
function mult(a, b, c) {
    return a * b + (c || 0);
}
console.log(mult(2, 4));
// rest parameters 
function add(n, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return n + b + rest.reduce(function (x, y) { return x + y; }, 0);
}
console.log(add(1, 3, 45, 6, 7, 8));
