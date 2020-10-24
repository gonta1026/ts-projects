
/******
 * memo
 * ・オブジェクトにはtypeでなくわかりやすくinterfasceを使おう
 * ・クラスにimplementsをつけることでクラスが何を持っているのかわかりやすくなる。
 * ・オプショナルプロパティ　？　であってもなくてもいいものを定義できる。
******/

// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number;
}

let addFunc: addFunc; 
addFunc = (n1: number, n2: number) => {
  return n1 * n2;
}

interface Nameable {
  name: string;
  nickName?: string;
}

const nameable: Nameable = {
  name: "keise"
}

interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string){
    console.log("hello")
  }
}


const user: Human = new Developer("keisei", 38, 3);
