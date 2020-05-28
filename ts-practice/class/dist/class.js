"use strict";
/* アロー関数は束縛できる */
/* クラスは型にできる */
var Person = /** @class */ (function () {
    function Person(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    Person.prototype.greeting = function () {
        console.log("\u79C1\u306E\u540D\u524D\u306F" + this.name + "\u3067\u3001" + this.age);
    };
    Person.prototype.increAge = function () {
        this.age += 1;
    };
    return Person;
}());
var keisei = new Person("keisei", 38);
keisei.greeting();
var anotherKeisei = {
    name: "otherKeisei",
    age: 30,
    greeting: function () { },
    anotherGreeting: keisei.greeting
};
// anotherKeisei.anotherGreeting()
