//文字列のパラメーターを取り、制御文字などをエスケープシーケンスに変換した文字列を返す
//if文を使用する場合は、各シーケンスに合致するかをif-elseの形で実装する。

export const Escape = {
  // if-elseを使用。文字列を検索し、エスケープ対象となる文字列が見つかれば変換を行う。
  escape_if(str) {
    let result = '';
    for (let char of str) {
      if (char === '\0') {
        result += '\u0000';
      } else if (char === '\b') {
        result += '\u0008';
      } else if (char === '\t') {
        result += '\u0009';
      } else if (char === '\n') {
        result += '\u000A';
      } else if (char === '\v') {
        result += '\u000B';
      } else if (char === '\f') {
        result += '\u000C';
      } else if (char === '\r') {
        result += '\u000D';
      } else if (char === '\"') {
        result += '\u0022';
      } else if (char === '\’') {
        result += "\u0027";
      } else if (char === '\\') {
        result += '\u005C';
      } else {
        result += char;
      }
    }
    return result;
  },

  // switchを使用。エスケープ対象となる文字列の変換を行う。
  escape_switch(str) {
    let result = '';
    for (let char of str) {
      switch (char) {
        case '\0':
          result += '\u0000）';
          break;
        case '\b':
          result += '\u0008';
          break;
        case '\t':
          result += '\u0009';
          break;
        case '\n':
          result += '\u000A';
          break;
        case '\v':
          result += '\u000B';
          break;
        case '\f':
          result += '\u000C';
          break;
        case '\r':
          result += '\u000D';
          break;
        case '"':
          result += '\u0022';
          break;
        case "'":
          result += "\u0027";
          break;
        case '\\':
          result += '\u005C';
          break;
        default:
          result += char;
          break;
      }
    }
    return result;
  }
};

// テスト
//const test = `Hello\0World\b.this\tis\nescapetest\vfor\fif-else\rmethod\"and\’switch\\method`;

// if-else メソッドのテスト
//console.log(Escape.escape_if(test));

// switch メソッドのテスト
//console.log(Escape.escape_switch(test));

//オブジェクトのエクスポート
//module.exports = Escape; 
