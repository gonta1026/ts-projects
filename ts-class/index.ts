class Person {
  name: string;
  private age: number;
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }
  
  incrementAge() : number{
    return this.age += 1;
  }
  greeting() : string{
    return ("konnnitiwa" + this.name);
  }
}

const keiesei = new Person("keiesei", 33);
console.log(keiesei.name);
console.log(keiesei.greeting());
console.log(keiesei.incrementAge());
