"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 * n2;
};
const nameable = {
    name: "keise"
};
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log("hello");
    }
}
const user = new Developer("keisei", 38, 3);
