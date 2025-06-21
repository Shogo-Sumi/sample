// 何らかのリサイズを行う関数と思って読んで下さい
//
// - params には undefined またはオブジェクトが与えられる
// - params.maxWidth が与えられる場合 (正の整数と仮定して良い) はその値を利用する
// - params.maxHeight が与えられる場合 (正の整数と仮定して良い) はその値を利用する
/*
function resize(params) {
  let maxWidth = 600;
  let maxHeight = 480;

  if (params && params.maxWidth) {
    maxWidth = params.maxWidth;
  }

  if (params && params.maxHeight) {
    maxHeight = params.maxHeight;
  }

  console.log({ maxWidth, maxHeight });
}
*/

//paramsの値にはundefinedまたはオブジェクトが入る。正の整数なので0は含まれない。
//処理の流れとして、undefinedの場合は、初期値を返し、それ以外の場合は、与えられたparamsを使用するように、if文を使わず論理式を使用して記載する流れ。
//つまり、undefined=falseとなる場合と、object=trueとなる場合の分岐を&&,||で記載すればよいはず。

function resize1(params) {
  let maxWidth = 600;
  let maxHeight = 480;

  maxWidth = (params && params.maxWidth) || maxWidth;
  //論理式の左側がtrueと評価される場合、左の値を返す。それ以外は右の値を返す。
  maxHeight = (params && params.maxHeight) || maxHeight;

  console.log({ maxWidth, maxHeight });
}

resize1({ maxWidth: 30, maxHeight: 50 });
resize1({ maxWidth: 30 });
resize1({ maxHeight: 50 });
resize1({ maxHeight: undefined, maxHeight: undefined });
resize1({ maxHeight: "", maxHeight: "" });

//??の場合、左辺のオペランドがnull,undefined出ない場合、左辺を返す。
function resize2(params) {
  let maxWidth = 600;
  let maxHeight = 480;

  maxWidth = params?.maxWidth ?? maxWidth;
  maxHeight = params?.maxHeight ?? maxHeight;

  console.log({ maxWidth, maxHeight });
}

resize2({ maxWidth: 30, maxHeight: 50 });
resize2({ maxWidth: 30 });
resize2({ maxHeight: 50 });
resize2({ maxHeight: undefined, maxHeight: undefined });
resize2({ maxHeight: "", maxHeight: "" });
