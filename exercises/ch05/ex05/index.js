//objectの引数を取り、偶数の値を持つプロパティだけを残した新しいオブジェクトを返す関数を作成する。
//5.4.4.1 オブジェクトに対するfor/ofを参考に、entries()メソッドを使用する

export function f(a) {
  const result = {};
  for (const [key, value] of Object.entries(a)) {
    if (typeof value === "number" && value % 2 === 0) {
      result[key] = value;
    }
  }
  return result;
}

//テスト
const o = { x: 1, y: 2, z: 3 };
console.log(f(o)); // { y: 2 }
console.log(o); // { x: 1, y: 2, z: 3
