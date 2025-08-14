//アロー関数を使用して関数を記載する。引数や戻り値の括弧の可否をコメントで説明する。

//自然数nと英数文字cを引数にとり、文字cをn回コンソール出力してから文字cをn個含む配列を返す

export const printn = (c, n) => {
  for (let i = 0; i < n; i++) {
    console.log(c);
  }
  let array = new Array(n).fill(c);
  console.log(array);
  return array;
};

//console.log("test",3);

//コメント
//アロー関数のパラメーターがc,nの2つであるため、()は省略できない。
//関数内の処理がreturn以外もあるため、returnキーワード、セミコロン、中括弧は省略できない。

//数値xを引数にとり、xの二乗の数値を返す

export const squared = (x) => x * x;

//console.log(squared(3));

//コメント
//アロー関数のパラメーターが1つであるため、()は省略可能
//関数処理がreturnのみであるため、returnキーワード、セミコロン、中括弧を省略可能

//引数なしで、現在時刻のプロパティnowを含むオブジェクトを返す
//Date.now()について
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/now

export const time = () => ({ now: Date.now() });

//console.log(time().now);

//let d = new Date();
//console.log(d.getTime());

//コメント
//アロー関数の引数はないため、()のみを記載する。
//関数処理がreturnのみであるが、戻り値となる式がオブジェクトリテラルであるため、オブジェクトリテラルを()内に記載する。
