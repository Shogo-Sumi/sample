class Point {
 constructor(x, y) {
 this.x = x;
 this.y = y;
 }
 distance() {
 return Math.sqrt(
 // クラス名は大文字から記述するのが慣習。
// 新しいインスタンスを初期化するコンストラクタ関数。
// thisキーワードで、初期化中のオブジェクトを参照できる。
// 関数の引数をオブジェクトのプロパティとして保存する。
// return文は必要ない。
// 原点からの距離を計算するメソッド。
// x² + y² の平方根を返す。
this.x * this.x + // thisが参照しているのは
this.y * this.y
 );
 }
 }
 // distanceメソッドが呼び出されているオブジェクト。
// 「new」キーワードとPoint()コンストラクタ関数を使って、Pointオブジェクトを生成する。
let p = new Point(1, 1);
 // 座標(1,1)。
// Pointオブジェクトpのメソッドを使う。
p.distance()
 // => Math.SQRT2

console.log(p.distance());
