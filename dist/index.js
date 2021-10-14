"use strict";
let id = 5;
let company = 'Dinata';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4];
let arr = ['Man', 2, false];
// Tuple
let person = [1, 'Brad', true];
// Tupple Array
let employees;
employees = [
    [1, 'Maia'],
    [2, 'Nikita'],
    [3, 'Brad']
];
// Union
let pid;
pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
const user = {
    id: 1,
    name: 'Dimitrov'
};
