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
// console.log(Direction1)
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Dimitrov'
};
// Type Assertion
let cid = 'ano';
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 3))
function log(message) {
    // console.log(message)
}
log("Horn");
log(6);
const user1 = {
    id: 1,
    name: 'Dimitrov'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registering`;
    }
}
const jack = new Person(1, 'Jack Sparrow');
const pat = new Person(2, 'Pat Mahomes');
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `Register on ${this.name} success`;
    }
}
const jane = new Student(1, "Jane Dinata");
// console.log(jane.register())
// Extending Classes (Subclasses)
class Assistant extends Student {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const mick = new Assistant(3, "Mike Doohan", "laboran");
// console.log(mick.register())
