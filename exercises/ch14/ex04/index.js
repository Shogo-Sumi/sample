//ひらがな1文字とそのUTF-16コード単位をプロパティをもつ独自クラス。
//50音順で<や>で比較し、ソートをする。
//Symbol.toPromitiveを用いて実装する。
//出力1:ひらがな(文字列が期待される場合)
//出力2:UTF-16コード単位(数字)
//出力3:ひらがな(それ以外)

//ひらがなの範囲：https://ja.wikipedia.org/wiki/%E5%B9%B3%E4%BB%AE%E5%90%8D_(Unicode%E3%81%AE%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF)
//拗音のぁからゟの範囲がひらがな

class Hiragana {
  constructor(char) {//引数をもとにコンストラクターを定義
    if (typeof char !== 'string' || char.length !== 1 || !/^[ぁ-ゟ]$/.test(char)) {//例外処理。文字列ではなく、長さが1文字ではなく、ひらがなの範囲ではない場合
      throw new Error('Input must be a single hiragana character.');
    }
    this.char = char;//文字列を格納
    this.code = char.charCodeAt(0);//UTF-16コードを返し、それを格納する。
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {//文字列の場合、文字列を返す
      return this.char;
    }
    if (hint === 'number') {//数値の場合、UTF-16 コード単位を返す
      return this.code;
    }
    //その他の場合、文字列を返す。
    return this.char;
  }
}

export { Hiragana };