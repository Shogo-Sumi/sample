let p = {
 //xとyは通常の読み書き可のデータプロパティ。
 //内部データプロパティへ変更
 _x: 1.0,
 _y: 1.0,

 //ゲッターとセッターをもつ読み書き可のアクセサプロパティx
 get x() {
    return this._x;
  },
  set x(value) {
    if (Number.isNaN(value)) {
      throw new Error("x cannot be NaN");
    }
    this._x = value;
  },

  //ゲッターとセッターをもつ読み書き可のアクセサプロパティy
  get y() {
    return this._y;
  },
  set y(value) {
    if (Number.isNaN(value)) {
      throw new Error("y cannot be NaN");
    }
    this._y = value;
  },


//rはゲッターとセッターを持つ読み書き可のアクセサプロパティ。
//アクセサメソッドの後にカンマを必ず記述する。

get r() { return Math.hypot(this.x, this.y); },
 set r(newvalue) {
 let oldvalue = Math.hypot(this.x, this.y);
 let ratio= newvalue/oldvalue;
 this.x *=ratio;
 this.y *=ratio;
 },
 //thetaはゲッターのみを持つ読み出し専用のアクセサプロパティ。
get theta(){ return Math.atan2(this.y,this.x);}
 };

//テスト
console.log(p.r);
console.log(p.theta);

p.x = 2,p.y =2;

console.log(p.x,p.y);
console.log(p.r);
console.log(p.theta);

try {
  p.x = NaN;
} catch (e) {
  console.log(e.message);
}
try {
  p.y = NaN;
} catch (e) {
  console.log(e.message);
}
