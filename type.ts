type Type1 = {
  foo: string,
  val: number,
}

type Type2 = {
  foo: string,
  bar: string,
}

let t1: Type1 = {
  foo: "hoge",
  val: 1
};
let t2: Type2 = {
  foo: "hoge",
  bar: "hoge",
};
let t1and2: Type1 & Type2 = {
  foo: "hoge",
  val: 1,
  bar: "hoge",
}
let t1or2: Type1 | Type2 = t1;


console.log(t1);
console.log(t2);
console.log(t1and2);
console.log(t1or2);
