type Engineer = {
  name: string;
  role: string;
}

type Blogger = {
  name: string;
  follower: number;
}

type EngineerBlogger = Engineer & Blogger

const quill: EngineerBlogger = {
  name: "quill",
  role: "keke",
  follower: 100, 
}

type NumberBoolean = number | boolean; 
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;// Mixはnumberになる。わざわざ混ぜることはないと思うけど。

function toUpperCase(x: number): number;/* 型のオーバーロード ！！*/
function toUpperCase(x: string): string;/* 型のオーバーロード ！！*/
function toUpperCase(x: string | number): string | number {
  if (typeof x === "string") { /* typeofを使って型を絞り込む (string)*/
    return x.toUpperCase();
  } else {　/* numberがくる。 */
    return x;
  }
}

const upperHello = toUpperCase(86);
const stringHello = toUpperCase("hello");

type NomadWorker = Engineer | Blogger;

function descriveProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ("role" in nomadWorker) { //NomadWorkerのようなオブジェクトの型はjavascriptのtypeofでは扱えないのでin演算子を使う。
  }
}

class Dog {
  kind: "dog" = "dog"; // タグ付きユニオン
  speak() {
    console.log("bow-bow");
  }
}

class Bird {
  kind: "bird" = "bird"; // タグ付きユニオン
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("fluter")
  }
}

type Pet = Dog | Bird;
// function havePet(pet: Pet) {
//   pet.speak()
//   if (pet instanceof Bird) {//該当のクラスされたインスタンスかのチェック
//     pet.fly();
//   }
// }
//switchで分ける。
function havePet(pet: Pet) {
  pet.speak()
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


// !(Non-null assertion operator)を使って、nullじゃないと言い切る方法
// !を使うとnullが消える。

// const input = document.getElementById("input")!;


//インデックスシグネチャを使用して柔軟なオブジェクトを作る方法

interface Designer {
  name: string,
  parent: string
  [index: string]: string; //stringのものを増やすこことができる。それ以外の型は増やすのはダメ
}

const designer: Designer = {
  name: "Quill",
  parent: "midori"
}

// 関数のオーバーロードを使って、戻り値の型を正しくTypeScriptに伝える方法
//Optional Chainingはこう使う！

// Lookup型で型を取得する
interface DownloadedDate {
  id: number,
  user?: {
    name?: {
      first: string,
      last: string
    }
  }
}

type id = DownloadedDate["id"];
type union = DownloadedDate["id" | "user"]
const number: id = 10;
const object: union = {
  name: {
    first: "hoge",
    last: "huge"
  }
}
