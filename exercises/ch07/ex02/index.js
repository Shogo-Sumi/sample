/*
function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
*/

//nを1以上の連続した正の整数を持つ配列として考える。
//参考演算子とforEachを使用して、for,if文を削除
function fizzbuzz(n) {
	n.forEach(value => console.log(value % 15 === 0 ? "FizzBuzz" : value % 3 === 0 ? "Fizz" : value % 5 === 0 ? " Buzz" : value));
}

//テスト
let test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

console.log("fizzbuzz関数の実行結果");
fizzbuzz(test);

/*
function sumOfSquaredDifference(f, g) {
  let result = 0;
  for (let i = 0; i < f.length; i++) {
    result += (f[i] - g[i]) ** 2;
  }
  return result;
}
*/

//reduce()について
//第一引数：簡約化を行う関数を指定。第二引数：配列要素の値。第三引数：インデックス。第四引数：配列自体

function sumOfSquaredDifference(f, g) {
  let result = 0;
  result = f.reduce((sum,farray,i) => sum + (farray-g[i]) ** 2,0);
  return result;
}

//テスト
let test2 = [1,2,3],test3 = [4,5,6];

console.log("sumOfSquaredDifferenceの実行結果");
console.log(sumOfSquaredDifference(test2,test3));

/*
function sumOfEvensIsLargerThan42(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      continue;
    }
    sum += array[i];
  }
  return sum >= 42;
}
*/

function sumOfEvensIsLargerThan42(array) {
  let sum = 0;
	sum = array.filter(index => index % 2 === 0).reduce((total,index) => total + index,0);
	console.log(sum);
  return sum >= 42;
}

let test4 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log("sumOfEvensIsLargerThan42の実行結果");
console.log(sumOfEvensIsLargerThan42(test4));
