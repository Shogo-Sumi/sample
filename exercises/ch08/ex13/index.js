//欠陥のあるソースコード

function f(input) {
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}

//修正後ソースコード
function f(input) {
  return "Hello, " + input.toString();
}

//想定される正常な入力
f("Bob");

//結果確認
console.log(f("Bob"));
console.log(f("ls -l"))

//strictモードの場合の実行結果
/*
ReferenceError: Bob is not defined
    at eval (eval at f (file:///C:/Users/sumi6/javascript/github/sample/exercises/ch08/ex13/index.js:4:13), <anonymous>:3:20)
*/

//非strictモードでの実行結果
