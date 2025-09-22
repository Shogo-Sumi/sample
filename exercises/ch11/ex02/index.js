// f はオブジェクトを1つ引数に取る関数
export function cache(f) {
  // この関数を実装する
  const cacheValue = new WeakMap(); //キャッシュがガベージコレクションの対象になるよう、弱い参照であるWeakMapを使用する。

  return function (obj) {
    //引き渡された値が、キャッシュに存在するかを確認する。
    if (cacheValue.has(obj)) {
      //console.log("flag1");
      return cacheValue.get(obj);
    }

    //キャッシュに存在しない場合、元の関数を呼び出して結果を返し、キャッシュに保存する。
    const result = f(obj); //キャッシュにない新しい結果の作成
    cacheValue.set(obj, result); //キャッシュへ保存
    return result; //結果の返却
  };
}

export function slowFn(obj) {
  // 時間のかかる処理
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    //console.log(i);
    sum++;
  }

  //一意の値を返却
  //console.log("flag2");
  return obj.id + sum;
}

//cacheへslowFnを代入
const cachedSlowFn = cache(slowFn);

//テスト
/*
const obj1 = { id: 1 };
const obj2 = { id: 2 };

console.log(cachedSlowFn(obj1));
console.log(cachedSlowFn(obj1));
console.log(cachedSlowFn(obj2));
console.log(cachedSlowFn(obj2));
*/