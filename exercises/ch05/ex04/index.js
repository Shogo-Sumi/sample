//フィボナッチ数列の最初の10個を配列として格納する関数を、while,do/whire,forを用いて実装する。

//while

export function while_test() {
  const fib = [1, 1]; // 初項と第2項を初期化
  let i = 2;
  while (i < 10) {
    fib[i] = fib[i - 1] + fib[i - 2];
    i++;
  }
  return fib;
}

//dowhile
export function dowhile_test() {
  const fib = [1, 1]; // 初項と第2項を初期化
  let i = 2;
  do {
    fib[i] = fib[i - 1] + fib[i - 2];
    i++;
  } while (i < 10);
  return fib;
}

//for
export function for_test() {
  const fib = [1, 1]; // 初項と第2項を初期化
  for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

//テスト
//console.log(while_test());
//console.log(dowhile_test());
//console.log(for_test());
