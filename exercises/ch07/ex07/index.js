//クイックソートを実施する関数を作成する。
//引数は配列、左端、右端の3つ
//再帰的に配列を分割し、ソートを行う。

export function quickSort(arr, left = 0, right = arr.length - 1) {
  //左端の位置が右端より小さい場合、パーティション関数へ配列、左端、右端を引き渡す。
  if (left < right) {
    const pivotIndex = partition(arr, left, right); //ピボットの位置を取得
    quickSort(arr, left, pivotIndex - 1); //ピボットの左側のソートを行う
    quickSort(arr, pivotIndex + 1, right); //ピボットの右側のソートを行う。
  }
  return arr;
}

//ピボットを選び、それより小さい値を左へ、大きい値を右へ湧ける。ピボットの最終位置を返す。

export function partition(arr, left, right) {
  const pivot = arr[right]; //ピボットを作成。値は適当でよいが、今回は要素の右端。
  let i = left - 1; //ピボットより小さい要素の最後の位置を示す

  //左端が右端と等しくなる前繰り返し。
  for (let j = left; j < right; j++) {
    //左側の要素について、ピボットの値より要素が小さい場合、i++。その後分割代入で要素をスワップする。
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // スワップ
    }
  }
  //ピボットの位置を変更。ピボットをピボットより値が小さい集まりの末尾に移動する。
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]; // ピボットの移動
  return i + 1;
}

// 使用例
/*
const array = [64, 34, 25, 12, 22, 11, 90];
const array2 = [34, 90, 33, 12, 11, 64, 25];
console.log(quickSort(array)); // [11, 12, 22, 25, 34, 64, 90]
console.log(quickSort(array2));
*/
