//try,catch,finallyの実効順序が確認するコードを記載する。

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

try {
  // ユーザに数値の入力を要求する
  //promptが定義されていない旨のエラーが発生。ユーザーからの入力を受け付けるのではなく、ソースコード上に記載する形で記載する。 
  //let n = Number(prompt("Please enter a positive integer", ""));
  //let n = 3;
  //let n = 0;
  //let n = "test";
  let n = -1;

  // 入力検証
  if (isNaN(n)) {
    throw new Error("Invalid input: Please enter a valid number");
  }
  
  // 入力された数値の階乗を計算する
  let f = factorial(n);
  
  // 計算結果を表示する
  console.log((n + "! = " + f));
} catch (ex) {
  // 例外が発生した場合にエラーメッセージを表示
  console.log((ex.message));
} finally {
  // tryブロックの処理が終了した後、必ず実行される
  console.log(("Calculation process completed"));
}
