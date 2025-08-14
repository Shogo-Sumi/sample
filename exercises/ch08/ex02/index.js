//べき乗 x^n を計算する関数を、べき乗演算子 (**) を使わずに再帰およびループでぞれぞれ実装しなさい。
//可能なら再帰・ループの回数を少なくする工夫をしなさい。

//再帰関数
//値xをn回べき乗する
export function recu(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  else return x * recu(x, n - 1);
}

console.log(recu(2, 8));

//例
//x=3,n=3の場合
//expo(3,3)=x*expo(3,2)=x*x*expo(3,1)=x*x*x ... n=1の場合,return xであるため

//ループ関数
//値xをn回べき乗する

export function loop(x, n) {
  let a = 1; //初期値はn=0の場合、n=1の場合を考慮して1とする。
  for (let i = 0; i < n; i++) {
    a *= x;
  }
  return a;
}

console.log(loop(3, 3));
