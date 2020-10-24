"use strict";
const quill = {
    name: "quill",
    role: "keke",
    follower: 100,
};
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    else {
        return x;
    }
}
const upperHello = toUpperCase(86);
const stringHello = toUpperCase("hello");
function descriveProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ("role" in nomadWorker) {
    }
}
class Dog {
    constructor() {
        this.kind = "dog";
    }
    speak() {
        console.log("bow-bow");
    }
}
class Bird {
    constructor() {
        this.kind = "bird";
    }
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("fluter");
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case "bird":
            pet.fly();
            break;
        case "dog":
            pet.speak();
            break;
    }
}
havePet(new Bird());
const designer = {
    name: "Quill",
    parent: "midori"
};
const number = 10;
const object = {
    name: {
        first: "hoge",
        last: "huge"
    }
};
