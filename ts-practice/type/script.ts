const hasValue= true;
const float: number = 1.2;
const hoge: string = "hello";
const hfh: string = "string"
console.log(hasValue)
const person: {
  name: string;
  age: number
} = {
  name: "lesei",
  age: 10
}

/* 配列について */
const array: string[] = ["keisei", "sss"]
const book: [string, number, boolean] = ["business", 1500, false]

/* enumについて */ /* 再代入をさせないために使う */

enum coffeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI"
};

const coffe = {
  hot: true,
  size: coffeSize.GRANDE
}

/* union型について */
const fuga: (string | number | boolean)[] = ["business", 1500, false]


/* literal */ /* 決まった値しか代入できない。一つならconstのと一緒 */

const apple : "apple" = "apple"

let clothSize: "small" | "medium" | "large" = "large" 

let cloth: {
  color: string;
  size: "small" | "medium" | "large"
} = { 
  color: "red",
  size: clothSize,
}
cloth.size = "large"


/* typeエイリアス */ /* 型を変数に入れ扱える */

type size = "mini" | "normal" | "big";

const juice: size = "normal"


/* 関数に型を適用させる */

const add: (num01: number, num02: number) => number = (num01, num02) => num02 + num02
console.log(add(2, 2))

/* voidにtして */  /*  何も返さない返り値がundefindになる */

function hellooo(): void{
  let haya = "haya"
  console.log("hello");
}
console.log(hellooo())
let temp: undefined
let tempnull: null = null;

/* 関数型について */

const anotherAdd = add;


/* コールバック関数について */

function doubleAndHandle(num: number, cb: (num: number) => number): number{
  return cb(num)
}
console.log(doubleAndHandle(10, dobleNum => dobleNum * 2));

function reverceMesage(message: string): string {
  return message.split("").reverse().join("")
}
console.log(reverceMesage("こんにちわ"))

/* unknowa型について */ /*  使うときにはtypeofでif文を入れる必要がある */

let ubknownInput: unknown
let anyInput: any


ubknownInput = "keisei"
if (typeof ubknownInput === "string"){
  let text = ubknownInput
}

/* never 決して何も返さない　*/ /*  エラーオブジェクを返すときやwhile文で処理がおわらないときにかく */

function error(message: string): never{
  throw new Error(message)
}
console.log(error("エラー"))