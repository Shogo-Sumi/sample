class TypedMap2 extends Map {
  constructor(keyType, valueType, entries) {
    //entriesが指定されている場合、型をチェックする。
    if (entries) {
      for (let [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry[${k},${v}]`);
        }
      }
    }
    //（型チェックされた）entriesを使って、スーパークラスを初期化する。
    super(entries);
    //次に、型を保存して、サブクラスを初期化する。
    this.keyType = keyType;
    this.valueType = valueType;
  }
  //set()メソッドを再定義して、マップに追加されるキーと値のペアに対して
  //型チェックを行うようにする。
  set(key, value) {
    //keyやvalueの型が異なっている場合は、エラーをスローする。
    if (this.keyType && typeofkey !== this.keyType) {
      throw new TypeError(`${key} is not of type${this.keyType}`);
    }
    if (this.valueType && typeofvalue !== this.valueType) {
      throw new TypeError(`${value} is not of type${this.valueType}`);
    }
    //型が正しい場合、スーパークラスのset()メソッドを呼び出し、
    //エントリをマップに追加する。スーパークラスから返されたものを
    //そのまま返す。
    return super.set(key, value);
  }
}

const a = [["a", 1], ["b", 2]];
const b = [[1, "a"], [2, "b"]];
const p = new TypedMap2('string', 'number', a);
const q = new TypedMap2('number', 'string', b);
const r = new TypedMap2('string', 'number', a);
console.log(p);
console.log(q);
