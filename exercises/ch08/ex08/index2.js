function addPrivateProperty(o, name, predicate) {
  let value; //この値がプロパティの値になる。
  //ゲッターメソッドは値を返すだけ。
  o[`get${name}`] = function () {
    return value;
  };
  //セッターメソッドは値を保存する。ただし述語関数が値を不当と
  //判定した場合は、例外をスローする。
  o[`set${name}`] = function (v) {
    if (predicate && !predicate(v)) {
      throw new TypeError(`set${name}: invalid value${v}`);
    } else {
      value = v;
    }
  };
}
//addPrivateProperty()メソッドの使用例。
let o = {}; //空のオブジェクト。
//getName()とsetName()というプロパティアクセサメソッドを追加する。
//文字列値以外は設定できないようにする。
addPrivateProperty(o, "Name", (x) => typeof x === "string");
o.setName("Frank"); //プロパティ値を設定する。
o.getName(); //=>"Frank"
//console.log(o.getName());
o.setName("Bob");
console.log(o.getName());
//o.setName(0); //!TypeError:文字列以外の型の値を設定しようとした。
