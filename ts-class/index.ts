abstract class Person {
  static species = "Homo sapiens";
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  readonly id: number = 33;
  constructor(readonly name: string, protected age: number) {
    this.id = 1;
  }
  
  incrementAge() : number{
    return this.age += 1;
  }
  greeting(this: Person) : void{
    console.log(`${this.name}さんこんにちわ！`);
    this.explainJob();
  }
  abstract explainJob(): void;
}

class Teacher extends Person {
  private static instance: Teacher;
  explainJob(): void {
    console.log(`${this.subject}が好き`)
  }
  get subject() {
    if (!this._subject) {
      throw new Error("subjectがないよ");
    }
    return this._subject;
  }
  
  set subject(value: string) {
    this._subject = value;
  }
  /* シングルトンパターンで実装する際はインスタンスを一回しか呼び出さないようにする */
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  sayAge() : string {
    return `年は${this.age}です`
  }
  
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("keisei", 40, "english");
    return Teacher.instance;
  }
}

const teacher01 = Teacher.getInstance();
const teacher02 = Teacher.getInstance();
console.log(teacher01);
console.log(teacher02);
