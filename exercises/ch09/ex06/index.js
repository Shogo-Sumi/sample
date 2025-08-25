//compositionについて
//https://developer.mozilla.org/ja/docs/Web/API/CompositionEvent
//Mapについて
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map
//メソッドを確認
//TypedMapクラスには型チェックを追加して、キーと値が必ず指定された型になるようにします

//compositionについて
//https://developer.mozilla.org/ja/docs/Web/API/CompositionEvent
//Mapについて
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map
//メソッドを確認
//TypedMapクラスには型チェックを追加して、キーと値が必ず指定された型になるようにします

class TypedMap{//☆継承箇所
  constructor(keyType, valueType, entries) {
    this.keyType = keyType;
    this.valueType = valueType;
    this.map = new Map();//継承で、空のマップインスタンスを作成
    //entriesが指定されている場合、型をチェックする。
    if (entries) {
      for (let [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry[${k},${v}]`);
        }
      }
    }
    //（型チェックされた）entriesを使って、スーパークラスを初期化する。
    //super(entries);////☆継承箇所。thisで移譲する。
    this.map = new Map(entries);//からのマップインスタンスをentryを入力したもので上書き。
    //
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
    //return super.set(key, value);//☆継承箇所。thisで移譲する。
    return this.map.set(key,value);
  }

  clear() {
    this.map.clear();
  }

  delete() {
    return this.map.delete();
  }

  entries() {
    return this.map.entries();
  }

  forEach() {
    return this.map.forEach();
  }

  get() {
    return this.map.get();
  }

  has() {
    return this.map.has();
  }

  keys() {
    return this.map.keys();
  }

  values() {
    return this.map.values();
  }
}

//export {TypedMap};

const a = [["a", 1], ["b", 2]];
const b = [[1, "a"], [2, "b"]];
const p = new TypedMap('string', 'number', a);
const q = new TypedMap('number', 'string', b);
const r = new TypedMap('string', 'number', a);
console.log(p);
console.log(q);

//テスト用、書籍記載のクラス

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

export {TypedMap,TypedMap2};

const s = new TypedMap2('string', 'number', a);
const t = new TypedMap2('number', 'string', b);
const u = new TypedMap2('string', 'number', a);

console.log(s);
console.log(t);