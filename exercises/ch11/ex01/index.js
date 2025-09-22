//Map と同様のインタフェース(get, set)を持つ。ただし、key はコンストラクタ関数に限定する
//→コンストラクタ関数：オブジェクトを作成するためのひな型。
//set では、 コンストラクタ関数の key と そのクラスの value のみ受け付け、それ以外の値が渡された場合はエラーとする。これにより、get で取得する値が key に指定したコンストラクタ関数のクラスであることを保証する。
//TypeScript の場合はそのような key, value の型定義とする
//プリミティブ値は、ラッパークラスのコンストラクタ関数で get/set 可能とする


class TypeMap{
    constructor(){
        this.map = new Map();//コンストラクターにて、新しいMapを作成
    }

    //setメソッドの定義。key,valueを受け取り、値をセットする。
    set(key, value) {
    if (typeof key !== "function") {//keyの値はコンストラクタ関数に限定する。それ以外の場合はエラー。
      throw new Error("Not constructor function");
    }

    //String,Number,Booleanといったプリミティブ型の場合の分岐処理
    if (key === String && typeof value === "string") {
      this.map.set(key, value);
      return this;
    } else if (key === Number && typeof value === "number") {
      this.map.set(key, value);
      return this;
    } else if (key === Boolean && typeof value === "boolean") {
      this.map.set(key, value);
      return this;
    } else if (!(value instanceof key)) {//プリミティブ型以外で、 valueがkeyから作成されたインスタンスでない場合の処理。
      throw new Error(`Value must be an instance of ${key.name}, got ${typeof value}: ${value}`);
    }

    //Mapに値をセット
    this.map.set(key, value);
    return this;
  }

  //mapから値をゲット
  get(key) {
    return this.map.get(key);
  }
}

/*
class Foo {}

const a = new TypeMap();

a.set(String, "string");
//a.set(Number, 123);
a.set(Foo, new Foo());

console.log(a.get(String));
console.log(a.get(Foo));
a.set(Date, "not a date"); // -> Error

*/

export { TypeMap };