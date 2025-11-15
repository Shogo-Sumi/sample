//P430の内容から、特別なSymbol名のプロパティを使用し、独自のパターンクラスを定義する問題と予想
//合成可能なダイアクリティカルマークは文字列を Unicode 正規化して分解し、 \u0300-\u036f の範囲を取り除くと除去できます

/*
InoreAccentPatternはsearchとmatchプロパティを持つ
テストケースでは、文字列のみの場合と、正規表現を持つ場合がある
文字列のみの場合と正規表現を含む場合で場合わけが必要
RegExp.prototype.flagsについて
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags
*/

export class IgnoreAccentPattern {
  constructor(glob) {
    this.glob = glob;//テストケースで引き渡される文字列、または正規表現
    let char,flag;
    if(glob instanceof RegExp){//globがregExpクラスのインスタンスか判定≒正規表現
      //正規表現のフラグを分離
      //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags
      char = glob.source;
      flag = glob.flags;
    } else { //正規表現以外の場合
      char = glob
      flag = '';
    }
    
    //文字列をUnicode正規化して分解
    //https://ja.wikipedia.org/wiki/%E5%90%88%E6%88%90%E5%8F%AF%E8%83%BD%E3%81%AA%E3%83%80%E3%82%A4%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%86%E3%82%A3%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%BC%E3%82%AF
    const normalize = (str) =>
      str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); //gは正規表現のフラグ、一致する文字列が複数ある場合にすべてを対象とする。


  // 文字列の場合のみエスケープ
  let escaped = char;
  if (!(glob instanceof RegExp)) {
    escaped = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
    const normalizedchar = normalize(escaped);

    //flagにgが含まれているか確認
    const hasG = flag.includes('g');

    //正規表現+フラグの形へ変更
    this.regexp = new RegExp(normalizedchar, flag);

    //正規化関数を変数に格納する。
    this.normalize = normalize;
　　
    //flagにGが含まれているかは、判定にしようするため格納
    this.hasG = hasG;
  }



  [Symbol.search](s) {
    const normalized = this.normalize(s);//文字列を正規関数で変換
    return normalized.search(this.regexp);;//正規表現+フラグの形で文字列を検索し、マッチした文字列の最初の番号を返す
  }

  [Symbol.match](s) {
    
    const normalized = this.normalize(s);//文字列を正規関数で変換
    const result = normalized.match(this.regexp);//正規表現の条件にマッチした文字列を返す。

    if (!result) return null;//マッチしなかった場合nullを返す。

    // 'g' フラグがある場合：単純にマッチした文字列の配列を返す
    console.log(this.hasG)
    if (this.hasG) {
      return result;
    }

    // 'g' がない場合：標準の match 結果を模倣（index と input 付き）
    const match = { 0: result[0]};
    for (let i = 1; i < result.length; i++) {
      match[i] = result[i];
    }
    match.length = result.length;
    match.index = result.index;
    match.input = s; // 元の文字列（正規化前）
    return match;
  }

  toString() {

    return this.regexp.toString();
  }
}

//test
/*
console.log("Coffee Café".match(new IgnoreAccentPattern("Cafe")));
console.log("Coffee Café".match(new IgnoreAccentPattern(/Cafe/g)));
console.log("Coffee Café".match(new IgnoreAccentPattern(/Café/g)));
console.log("Coffee Café".match(new IgnoreAccentPattern(/[a-e]/g)));
console.log("Coffee Café".match(new IgnoreAccentPattern(/é/g)));
*/