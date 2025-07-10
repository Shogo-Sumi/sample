//P149のソースコードにおいて、oがpおよびqのプロトタイプチェーン上に存在することを確認する。また、pがqのプロトタイプチェーン上に存在することを確認する。

let o = {}; // oはObject.prototypeからメソッドを継承し、
o.x = 1; // 独自プロパティxを持つ。
let p = Object.create(o); // pはoとObject.prototype からプロパティを継承し、
p.y = 2; // 独自プロパティyを持つ。
let q = Object.create(p); // qは、p、o、Object.prototypeからプロパティを継承し、
q.z = 3; // 独自プロパティzを持つ。
let f = q.toString(); // toStringはObject.prototypeから継承する。
q.x + q.y; // => 3; xとyはそれぞれoとpから継承する。

//Objectのプロタイプチェーンの継承関係確認

let r = Object.create(Object);
let s = Object.create(Array);
let t = Object.create(Date);
let u = Object.create(Map);

//プロトタイプチェーン上に存在することの確認
console.log("oがp,qのプロトタイプチェーン上にあることの確認");
console.log(o.isPrototypeOf(p));
console.log(o.isPrototypeOf(q));

console.log("pがqのプロトタイプチェーン上にあることの確認");
console.log(p.isPrototypeOf(q));

console.log("Objectがrのプロトタイプチェーン上にあることの確認");
console.log(Object.isPrototypeOf(r));

console.log("Arrayがrのプロトタイプチェーン上にあることの確認");
console.log(Array.isPrototypeOf(r));

console.log("Arrayがsのプロトタイプチェーン上にあることの確認");
console.log(Array.isPrototypeOf(t));

console.log("Mapがuのプロトタイプチェーン上にあることの確認");
console.log(Date.isPrototypeOf(u));
