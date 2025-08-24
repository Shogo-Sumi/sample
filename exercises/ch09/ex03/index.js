//元のソースコード

class C {
  x = 42;

  getX() {
    return this.x;
  }
}

const c1 = new C();
console.log(c1.x);
c1.x=50;
console.log(c1.x);

//プライベートフィールドを使用。

class C2 {
  #x = 42;

  getX() {
    return this.#x;
  }
}

const a = new C2();
console.log(a.x);
//a.#x=50;//アクセスできない
console.log(a.getX());

//クロージャを使用

function C3() {
  var x = 42;

  return{
    getX: function() {return x;}
  }
}

let c3 = C3();
//console.log(c3.x);// x is not defined
console.log(c3.getX());//42
c3.x =50;
console.log(c3.x);//50
console.log(c3.getX());//42

let c4 = C3();
console.log(c4.getX());//42