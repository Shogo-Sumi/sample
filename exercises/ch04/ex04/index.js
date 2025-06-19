//32ビット整数表現形式で表現された場合に1であるビットの数を返す関数bitCountを作成する。

export function bitCount(n) {
  n = n >>> 0; //符号なし右シフト演算子を使用して、入力値の符号付き32bit整数を符号なし整数へ変換
  let count = 0; //1の数を数える変数を宣言
  while (n) {
    //最上位ビットとの論理積結果が1の場合、countを1足す
    if (n & (1 === 1)) {
      count++;
    }
    //nの値を1bit右シフト
    n >>>= 1;
  }
  return count;
}

//検算
//console.log(bitCount(0b111)); // 3
//console.log(bitCount(0b1111111111111111111111111111111)); // 31
//console.log(bitCount(0)); // 0
//console.log(bitCount(-1)); // 32 (32ビットで全て1)
