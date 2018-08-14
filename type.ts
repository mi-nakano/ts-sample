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
let t12: Type1 & Type2 = {
  foo: "hoge",
  val: 1,
  bar: "hoge",
}


console.log(t1);
console.log(t12);
