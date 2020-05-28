/* アロー関数は束縛できる */
/* クラスは型にできる */

class Person {
  private name: string;
  private age: number;
  constructor(initName: string, initAge: number){
    this.name = initName
    this.age = initAge
  }
  
  greeting(this: Person){ 
    console.log(`私の名前は${this.name}で、${this.age}`);
  }
  increAge(){
    this.age += 1
  }
}

const keisei = new Person("keisei", 38)
keisei.greeting()

const anotherKeisei = {
  name: "otherKeisei",
  age: 30,
  greeting(),
  anotherGreeting: keisei.greeting
};



// anotherKeisei.anotherGreeting()

