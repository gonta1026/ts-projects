"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = 33;
        this.id = 1;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        return this.age += 1;
    }
    greeting() {
        console.log(`${this.name}さんこんにちわ！`);
        this.explainJob();
    }
}
Person.species = "Homo sapiens";
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`${this.subject}が好き`);
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
    sayAge() {
        return `年は${this.age}です`;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("keisei", 40, "english");
        return Teacher.instance;
    }
}
const teacher01 = Teacher.getInstance();
const teacher02 = Teacher.getInstance();
console.log(teacher01);
console.log(teacher02);
