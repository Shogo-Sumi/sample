//以下の条件を満たす処理を記載する。
//mathの全員の合計点
//クラスAのchemistryの平均点
//3科目合計点のクラスC内での平均点
//3科目合計点が最も高い人のname
//全体のgeographyの標準偏差
//ただし、for,whileを使わない。


//使用データ

const data = [
    { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
    { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
    { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
    { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
    { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
    { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
    { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
    { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
    { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];


// 1. mathの全員の合計点
const totalMath = data.reduce((accum, ele) => accum + ele.math, 0);

// 2. クラスAのchemistryの平均点
const classAChemistryAvg = data
  .filter(student => student.class === "A")
  .reduce((accum, ele, _, arr) => accum + ele.chemistry / arr.length, 0);

// 3. 3科目合計点のクラスC内での平均点
const classCTotalAvg = data
  .filter(student => student.class === "C")
  .reduce((accum, ele, _, arr) => {
    const total = ele.math + ele.chemistry + ele.geography;
    return accum + total / arr.length;
  }, 0);

// 4. 3科目合計点が最も高い人のname
const highestTotalName = data.reduce((accum, ele) => {
  const eleTotal = ele.math + ele.chemistry + ele.geography;
  const accumTotal = accum ? accum.math + accum.chemistry + accum.geography : 0;
  return eleTotal > accumTotal ? ele : accum;
}, null).name;

// 5. 全体のgeographyの標準偏差
// 標準偏差
// s = sqrt(s^2)
// 分散={(x(1)-x(ave))^2 + ... + (x(n)-x(ave))^2}/n

const geographyStdDev = Math.sqrt(
  data.reduce((accum, ele, _, arr) => {
    const mean = data.reduce((a, c) => a + c.geography, 0) / arr.length;
    return accum + Math.pow(ele.geography - mean, 2) / arr.length;
  }, 0)
);

// 結果の出力
console.log("1", totalMath);
console.log("2", classAChemistryAvg);
console.log("3:", classCTotalAvg);
console.log("4:", highestTotalName);
console.log("5:", geographyStdDev);
