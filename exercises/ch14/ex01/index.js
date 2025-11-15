//与えられたテストコードを通過するようなオブジェクトを作成する。

/*
test("Unwritable and unconfigurable object", () => {
  const a = unwritableAndUnconfigurableObj();
  expect(a).toStrictEqual({ a: 1 });プロパティの参照は可
  expect(() => (a.a = 3)).toThrow();プロパティの更新は不可
  expect(() => delete a.a).toThrow();プロパティの削除は不可
});
*/

//プロパティ参照可、プロパティ更新不可、プロパティ削除不可
export function unwritableAndUnconfigurableObj(){
    const un = {};//空のオブジェクトを定義
    Object.defineProperty(un,"a",{//P417 Object.deineProperty()
        value: 1,
        writable: false,//書き込み不可
        enumerable: true,//列挙可
        configurable: false//再定義不可
    })

    return un;
}

/*
test("Writable and unconfigurable object", () => {
  const b = writableAndUnconfigurableObj();
  expect(b).toStrictEqual({ b: 2 });//参照可
  b.b = 3;//更新可
  expect(b.b).toBe(3);
  expect(() => delete b.b).toThrow();//再定義不可
});
*/

//プロパティ参照可、プロパティ更新可、プロパティ削除不可
export function writableAndUnconfigurableObj(){
    const wr = {};//空のオブジェクトを定義
    Object.defineProperty(wr,"b",{//P417 Object.deineProperty()
        value: 2,
        writable: true,//書き込み可
        enumerable: true,//列挙可
        configurable: false//再定義不可
    })

    return wr;
}


/*
test("Nested unwritable object", () => {
  const c = nestedUnwritableObj();
  expect(c).toStrictEqual({ c: { d: { e: 3 } } });
  expect(() => (c.f = 1)).toThrow();
  expect(() => (c.c.f = 1)).toThrow();
  expect(() => (c.c.d.f = 1)).toThrow();
  expect(() => (c.c.d.e.f = 1)).toThrow();
});
*/

//nestが3のオブジェクト
//プロパティ参照可、プロパティ更新不可、プロパティ追加不可
export function nestedUnwritableObj(){
    //const ne = {};//空のオブジェクトを定義
    //ne = { c: { d: { e: 3 } } }//構造の確認
    //nestごとに変数を分解する、nestに対してfor文を回して、プロパティの属性を定義する方針
    //nestごとにプロパティを分解
    //neE = {e:3}
    //neD = {d: { e: 3 }}
    //neC = { c: { d: { e: 3 } } }

    const neE = {};
    Object.defineProperty(neE,"e",{//P417 Object.deineProperty()
        value: 3,
        writable: false,//書き込み可
        enumerable: true,//列挙可
        configurable: false//再定義不可
    })
    
    Object.seal(neE)//オブジェクトを拡張不可、独自プロパティの再定義を不可

    const neD = {};
    Object.defineProperty(neD,"d",{//P417 Object.deineProperty()
        value: neE,
        writable: false,//書き込み可
        enumerable: true,//列挙可
        configurable: false//再定義不可
    })
    
    Object.seal(neD)//オブジェクトを拡張不可、独自プロパティの再定義を不可


    const neC = {};
    Object.defineProperty(neC,"c",{//P417 Object.deineProperty()
        value: neD,
        writable: false,//書き込み可
        enumerable: true,//列挙可
        configurable: false//再定義不可
    })
    
    Object.seal(neC)//オブジェクトを拡張不可、独自プロパティの再定義を不可


    return neC;
}