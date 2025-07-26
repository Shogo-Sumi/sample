//reduce を使って関数 (sum, join, reverse, every, some) を実装しなさい。

//sum
export function sum(arr) {
  if (!arr) return 0; //配列が存在しない場合の処理
  //arr配列の簡約化add、各要素をeleとする
  return arr.reduce((accum, ele) => accum + (ele || 0), 0);
}

//join
//7.8.7 配列から文字列への変換を参照
//join():https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//処理として、配列の要素を文字列として変換し、返す
//nullの場合は、文字列として表示せず、空欄とする。
//join()内に、各要素を区切る文字列を記載し、省略した場合は,で区切る。

export function join(arr, separator = ',') {
  if (!arr) throw new Error();
  //参考演算子を用いて、indexが0より大きい場合、セパレーターで区切り、それ以外の場合は空文字とする。(配列の最初の要素前に、セパレターを追加しないため)
  return arr.reduce((accum, ele, index) => 
    accum + (index > 0 ? separator : '') + (ele ?? ''), '');
	//配列の要素eleがnullならば、空文字列を使う。
}

//reverse

export function reverse(arr) {
  if (!arr) throw new Error();
  return arr.reduce((accum, ele) => [ele, ...accum], []);
  //accumの初期値を[]配列として、arr配列の各要素を先頭から追加する、結果として、accumに格納される物は、arr配列の用語を逆順にしたものとなる。
}

//every
//arrayインスタンスのメソッドは、列内のすべての要素が指定された関数で実装されたテストに合格するかテストをする。
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every

export function every(arr, testcase) {//配列とテストケースを引数に取る。
  if (!arr) return true;
  return arr.reduce((accum, ele, index, array) => {
    if (!accum) return false; //前の要素のどれかがテストケースを満たさなかった場合、falseとする
    if (ele === undefined && !array.hasOwnProperty(index)) return true;
    //要素eleが未定義かつ、配列のインデックスが存在しない場合、trueを返す。配列の要素が空文字の場合、テストケースを満たすと定義する。
    return testcase(ele, index, array);//テストケースを満たすか確認する。
  }, true);
}

//some
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//指定された条件に、要素が1つでも合格するものがあるかを確認

export function some(arr, testcase) {
  if (!arr) return false;
  return arr.reduce((accum, ele, index, array) => {
    if (accum) return true; //前の要素のどれかがテストケースを満たす場合、trueとす。
    if (ele === undefined && !array.hasOwnProperty(index)) return false;
    //要素eleが未定かつ、配列の院hんでっくすが存在しない場合、trueを返す。配列の要素が空文字の場合、テストケースを満たさないと定義する。
    return testcase(ele, index, array);//テストケースを満たすか確認する。
  }, false);
}

