
import { jest } from '@jest/globals'

const mock = jest.fn();

const obj = {
  x: 0,
  y: 0,
  sum() {
    mock();
    return this.x + this.y;
  },
};

// ここに１行のコードを書く
Object.defineProperty(obj , 'sum', { value: obj.sum(), enumerable: true });
//JSON.stringify()メソッドをobjオブジェクトに対して使用した結果が、`{"x":1,"y":2,"sum":3}`に等しくなる必要がある。
//JSON.stringify()は列挙可能なプロパティのみ文字列化される。
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
//objのsumプロパティを列挙可能に再定義する。

obj.x = 1;
obj.y = 2;
expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
expect(mock).toHaveBeenCalled();

//mockについて
//テストメソッド内で何回呼び出されたかを.toHaveBeenCalledTimesで取得することができます。
//https://qiita.com/only/items/466a09c8602466fe2333
