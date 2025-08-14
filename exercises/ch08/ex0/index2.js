// この関数式では、引数の自乗を計算する関数を定義する。
// 関数式を変数に代入していることに注目。
const square = function(x) { return x*x; };
 // 関数式には名前を含めることができ、再帰のときに便利。
const f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };
 // 関数式は、ほかの関数の引数としても使える。
[3,2,1].sort(function(a,b) { return a-b; });
 // 関数式は、定義後すぐに呼び出される場合もある。
let tensquared = (function(x) {return x*x;}(10));

console.log(square(5));
console.log(f(4));
console.log(tensquared);