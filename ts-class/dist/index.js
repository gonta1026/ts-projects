"use strict";
class Person {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        return this.age += 1;
    }
    greeting() {
        return ("konnnitiwa" + this.name);
    }
}
const keiesei = new Person("keiesei", 33);
console.log(keiesei.name);
console.log(keiesei.greeting());
console.log(keiesei.incrementAge());
