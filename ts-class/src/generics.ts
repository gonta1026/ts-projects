function copy<T>(value: T) {
  return value;
}
console.log(copy<string>("keke"));

function hoge<T extends { name: string }>(value: T): T {
  return value;
}

hoge({ name: "keisei" });

function fuga<Type extends { name: string, age: number }, Union extends keyof Type>(value: Type, key: Union) {
  value[key];
  return value;
}

fuga({ name: "nameだよ", age: 30 }, "name");
