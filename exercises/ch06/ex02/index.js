//オブジェクトリテラルで、独自プロパティを持つオブジェクトを定義。

let exam = {
  name: "math",
  point: 100,
};

//Object.createを使用して、作成したオブジェクトをプロトタイプとして持つ新しいオブジェクトを生成。
let o = Object.create(exam);

//Object.getPrototypeOf()を利用して、生成したオブジェクトとのプロトタイプを確認
console.log(Object.getPrototypeOf(o) === exam);

console.log(
  "exam:",
  exam,
  "o:",
  o,
  "Object.getPrototypeOf(o);",
  Object.getPrototypeOf(o),
);
