//FizzBuzz関数を記載する
//条件分岐による出力結果の分岐
//関数の処理を1行で行えるように簡素化
//方針は、条件分岐をifではなく演算子で行う。

export function fizzbuzz() {//関数宣言
  let result = [];for (let i = 1; i <= 100; i++) {result.push((i%3?'':'Fizz')+(i%5?'':'Buzz')||i.toString())}return result.join("\n") + "\n";}


//result = [] 文字列格納用の配列を作成
//for文にて100回処理を繰り返す。
//条件を演算子によって簡素化。i%3?は変数iに格納された値を求め余りがある場合は''を、ない場合は'Fizz'を配列resultへ格納する。
//問題文のテスト形式に合わせて、joinで各文字列の後に改行を加え、最後の行に改行を加える。
