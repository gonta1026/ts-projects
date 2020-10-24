class Person {
  readonly id: number = 33;
  constructor(readonly name: string, protected age: number) {
    this.id = 1;
  }
  
  incrementAge() : number{
    return this.age += 1;
  }
  greeting() : string{
    return `${this.name}さんこんにちわ！`;
  }
}

class Teacher extends Person {
  get subject() {
    if (!this._subject) {
      throw new Error("subjectがないよ");
    }
    return this._subject;
  }
  
  set subject(value: string) {
    this._subject = value;
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  greeting(): string {
    return `${this.name}さんこんにちわ！ 僕の好きな科目は${this._subject}です`;
  }
  
  sayAge() : string {
    return `年は${this.age}です`
  }
}

const keisei = new Teacher("keisei", 40, "english");

console.log(keisei.greeting());
console.log(keisei.sayAge());
console.log(keisei.subject);
keisei.subject = "Music";
console.log(keisei.subject);
