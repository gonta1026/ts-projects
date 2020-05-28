"use strict";
var hasValue = true;
var float = 1.2;
var hoge = "hello";
var hfh = "string";
console.log(hasValue);
var person = {
    name: "lesei",
    age: 10
};
var array = ["keisei", "sss"];
var book = ["business", 1500, false];
var coffeSize;
(function (coffeSize) {
    coffeSize["SHORT"] = "SHORT";
    coffeSize["TALL"] = "TALL";
    coffeSize["GRANDE"] = "GRANDE";
    coffeSize["VENTI"] = "VENTI";
})(coffeSize || (coffeSize = {}));
;
var coffe = {
    hot: true,
    size: coffeSize.GRANDE
};
var fuga = ["business", 1500, false];
var apple = "apple";
var clothSize = "large";
var cloth = {
    color: "red",
    size: clothSize,
};
cloth.size = "large";
var juice = "normal";
var add = function (num01, num02) { return num02 + num02; };
console.log(add(2, 2));
function hellooo() {
    console.log("hello");
}
console.log(hellooo());
var temp;
var tempnull = null;
var anotherAdd = add;
function doubleAndHandle(num, cb) {
    return cb(num);
}
console.log(doubleAndHandle(10, function (dobleNum) { return dobleNum * 2; }));
function reverceMesage(message) {
    return message.split("").reverse().join("");
}
console.log(reverceMesage("こんにちわ"));
var ubknownInput;
var anyInput;
ubknownInput = "keisei";
if (typeof ubknownInput === "string") {
    var text = ubknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error("エラー"));
