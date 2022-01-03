"use strict";
// Basic Types
let id = 5;
let company = "New Type Inc.";
let isDone = true;
let x = "Nice!";
let age;
let ids = [1, 2, 3];
ids.push(4, 5);
let lists = [];
lists.push(1, true, "Good");
console.log("ID:", ids);
// Tuple
let person = [1, "Guy", true];
// Tuple Array
let people;
people = [
    [1, "Guy", true],
    [2, "Guy", true],
    [3, "Guy", true]
];
// Union
let pid;
pid = 24;
pid = "24";
// Enum
var Directions_1;
(function (Directions_1) {
    Directions_1[Directions_1["UP"] = 3] = "UP";
    Directions_1[Directions_1["DOWN"] = 4] = "DOWN";
    Directions_1[Directions_1["LEFT"] = 5] = "LEFT";
    Directions_1[Directions_1["RIGHT"] = 6] = "RIGHT";
})(Directions_1 || (Directions_1 = {}));
var Directions_2;
(function (Directions_2) {
    Directions_2["UP"] = "Up";
    Directions_2["DOWN"] = "Down";
    Directions_2["LEFT"] = "Left";
    Directions_2["RIGHT"] = "Right";
})(Directions_2 || (Directions_2 = {}));
console.log(Directions_2.DOWN);
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
let gid = cid;
let hid = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function logOutput(msg) {
    console.log(msg);
}
