/*
元のソースコード
const seq = [1, 2, 3, 4, 5];

console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]
*/

const seq = [1, 2, 3, 4, 5];

//pop

export function pop(arr) {
  return arr.slice(0, -1);//末尾1要素を削除
}

//push

export function push(arr, ...items) {
  return [...arr, ...items]; //末尾に要素を追加した配列を返す。
}

//shift

export function shift(arr) {
  return arr.slice(1);//最初の要素を削除
}

//unshift

export function unshift(arr, ...items) {
  return [...items, ...arr]; //先頭に要素を追加した配列を返す
}

//sort

export function sort(arr, com) {
  return [...arr].sort(com);//sortした結果を新しい配列で返す
}

console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]

