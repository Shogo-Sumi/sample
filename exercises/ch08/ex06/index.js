//問題文
const m = function (arg) {
  console.log(arg[1]);
};
m("a", "b");

//引数のみ修正。関数名はoとする
const o = function (...arg) {
  console.log(arg[1]);
};
o("a", "b");

//引数修正後、アロー関数に書き直し
const p = (...arg) => {
  console.log(arg[1]);
};
p("a", "b");