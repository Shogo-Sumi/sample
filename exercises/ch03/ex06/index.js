export function slice(str, indexStart, indexEnd) {
  if (indexStart === undefined) {
    indexStart = 0;
  }

  // 入力を数値に変換し、NaNを処理
  //indexStartについて、入力値がNaNの場合、0を代入。それ以外の場合、文字列を整数へ変換し、小数点以下を切り捨て。
  //indexEndについて、引数に値が渡されていない場合、str.lengthを代入。それ以外の場合は、indexStartの処理と同じ
  indexStart = isNaN(indexStart) ? 0 : Math.floor(Number(indexStart));
  indexEnd = indexEnd === undefined ? str.length : isNaN(indexEnd) ? 0 : Math.floor(Number(indexEnd));

  // 負のインデックスの処理
  //indexStart,indexEndの値が負の値の場合、str.lengthの値と合算する。文字列の末尾からの位置を代入する。
  if (indexStart < 0) {
    indexStart = Math.max(str.length + indexStart, 0);
  }
  if (indexEnd < 0) {
    indexEnd = Math.max(str.length + indexEnd, 0);
  }

  // インデックスを有効な範囲に制限
　//str.lengthよりも大きいindexStart,indexEndが引数として渡された場合の処理。
  indexStart = Math.min(Math.max(indexStart, 0), str.length);
  indexEnd = Math.min(Math.max(indexEnd, 0), str.length);

  // indexStart >= indexEnd の場合、空文字列を返す
  // indexStartよりindexEndが大きい入力は関数の使用としておかしい。
  if (indexStart >= indexEnd) {
    return "";
  }

  // 部分文字列を抽出
  let TODO = "";
  for (let i = indexStart; i < indexEnd; i++) {
    TODO += str[i];
  }

  // TODO: ここを実装しなさい
  return TODO;
}
