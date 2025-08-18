function trace(o, m) {
 let original = o[m];
 // 元のメソッドをクロージャ中に保存する。
o[m] = function(...args) { // ここで新しいメソッドを定義する。
// メッセージをログに残す。
console.log(new Date(), "Entering:", m);
 let result = original.apply(this, args);
 };
 }

let o = {x: 1}

console.log(trace(o,2));