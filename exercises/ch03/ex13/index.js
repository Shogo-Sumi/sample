// オブジェクトを基本型に変換するヘルパー関数
function toPrimitive(value, hint = 'default') {
  if (value === null || typeof value !== 'object') {
    return value;
  }
  // valueOf を試す
  let result = value.valueOf && typeof value.valueOf === 'function' ? value.valueOf() : value;
  if (typeof result !== 'object' && result !== null) {
    return result;
  }
  // toString を試す
  result = value.toString && typeof value.toString === 'function' ? value.toString() : result;
  if (typeof result !== 'object' && result !== null) {
    return result;
  }
  // 基本型に変換できない場合、NaN を返す（数値比較用）
  return hint === 'number' ? NaN : '';
}

// eq 関数（== の挙動を再現）
export function eq(a, b) {
  // 同一参照の場合
  if (a === b) {
    console.log("flag1");
    return true;
  }
  // null と undefined の比較
  if (a == null && b == null) {
   console.log("flag2");
    return true;
  }
  // オブジェクトを基本型に変換
  console.log(a,b);

  a = toPrimitive(a);
  b = toPrimitive(b);
  //a = a.toString;
  //b = b.toString;

  console.log(a,b);
  // 両方が null または undefined の場合
  if (a == null && b == null) {
   console.log("flag3");
    return true;
  }
  // 片方が null または undefined の場合
  if (a == null || b == null) {
   console.log("flag4");
    return false;
  }
  // 数値と文字列の比較
  if (typeof a === 'number' && typeof b === 'string') {
   console.log("flag5");
    return a === Number(b);
  }
  if (typeof a === 'string' && typeof b === 'number') {
   console.log("flag6");
    return Number(a) === b;
  }
  // ブール値の変換
  if (typeof a === 'boolean') {
    a = Number(a);
  }
  if (typeof b === 'boolean') {
    b = Number(b);
  }
  // 数値同士の比較
  if (typeof a === 'number' && typeof b === 'number') {
    // NaN の処理
    if (isNaN(a) || isNaN(b)) {
      console.log("flag7");
      return false;
    }
    // +0 と -0 の処理
    if (a === 0 && b === 0) {
      console.log("flag8");
      return true;
    }
      console.log("flag9");
      console.log(a,b);
    return a === b;
  }
  // 文字列同士の比較
  if (typeof a === 'string' && typeof b === 'string') {
    console.log("flag10");
    return a === b;
  }
  // その他の場合は厳密等価
   console.log("flag11");
  return a === b;
}

// lte 関数（<= の挙動を再現）
export function lte(a, b) {
  // オブジェクトを基本型に変換（数値優先）
  a = toPrimitive(a, 'number');
  b = toPrimitive(b, 'number');
  // 両方が文字列の場合、辞書順比較
  if (typeof a === 'string' && typeof b === 'string') {
    return a <= b;
  }
  // 数値比較
  a = Number(a);
  b = Number(b);
  // NaN の処理
  if (isNaN(a) || isNaN(b)) {
    return false;
  }
  return a <= b;
}
