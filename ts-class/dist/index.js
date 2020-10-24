"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = 33;
        this.id = 1;
    }
    incrementAge() {
        return this.age += 1;
    }
    greeting() {
        return `${this.name}さんこんにちわ！`;
    }
}
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error("subjectがないよ");
        }
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    greeting() {
        return `${this.name}さんこんにちわ！ 僕の好きな科目は${this._subject}です`;
    }
    sayAge() {
        return `年は${this.age}です`;
    }
}
const keisei = new Teacher("keisei", 40, "english");
console.log(keisei.greeting());
console.log(keisei.sayAge());
console.log(keisei.subject);
keisei.subject = "Music";
console.log(keisei.subject);
