//6.6.1を参照

//プロトタイプを定義
//プロトタイプはプロパティ名が数値および文字列であるプロパティを持つ
//プロトタイプは列挙可のプロパティを持つ
let p = Object.defineProperties(
  {},
  {
    1: { value: 10, writable: true, enumerable: true, configurable: true },
    2: { value: 20, writable: true, enumerable: true, configurable: true },
    3: { value: 30, writable: true, enumerable: true, configurable: true },
    x: { value: 10, writable: true, enumerable: true, configurable: true },
    y: { value: 20, writable: true, enumerable: true, configurable: true },
    z: { value: 30, writable: true, enumerable: true, configurable: true }
  },
);

//プロパティ変更前の値の確認
console.log("変更前のpの確認:", p["1"], p["2"], p.x, p.y);

//pをプロトタイプとして持つオブジェクトを作成する。
//数値名および文字列名のプロパティそれぞれについて、オブジェクトはプロトタイプと同名および同名でないプロパティを持つ

let q = Object.create(p);
console.log("pを継承したqを確認：", q["1"], q["2"],q["3"], q.x, q.y,q.z);

//オブジェクトqにプロトタイプと同名、同名でないプロパティを追加する。

const sym00 = Symbol("abc");
console.log(sym00);
q[sym00] = 7;

const object = Object.getOwnPropertySymbols(q);
console.log(object);

q = Object.defineProperties(
  q,
  {
    1: { value: 1, writable: true, enumerable: false, configurable: true }, //同名
    2: { value: 2, writable: true, enumerable: true, configurable: true }, //同名
    0: { value: 5, writable: true, enumerable: true, configurable: true }, //同名でない
    [sym00]: { value: 7, writable: true, enumerable: true, configurable: true }, //同名でない
    x: { value: 3, writable: true, enumerable: false, configurable: true }, //同名
    y: { value: 4, writable: true, enumerable: true, configurable: true }, //同名
    a: { value: 6, writable: true, enumerable: true, configurable: true }, //同名でない
  },
);

console.log(
  "数値名および文字列名のオブジェクトについて、それぞれ同名、同名でないプロパティをqに追加:",
  q["1"],
  q["2"],
  q["3"],
  q["0"],
  q[sym00],
  q.x,
  q.y,
  q.z,
  q.a,
);


console.log("for/inループでプロパティの順番を確認");
for (let r in q) {
  console.log(r);
}

console.log("Object.keysでプロパティの順番を確認");
console.log(Object.keys(q));
