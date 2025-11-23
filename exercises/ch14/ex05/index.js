//テンプレートリテラルを受け取り、文字列を返す関数
//戻り値において補完値はその値ではなく、型名を展開する。
//例:`Hello, ${"A"}`→"Hello, string"

//P433の例題より
//function html(strings, ...values)
//テンプレート文字列を引数として受け取る関数を上記のように定義した場合、
//stringsにただの文字列を
//valuesにテンプレート文字列を
//分割して格納しているらしい　・・・Javascriptの仕様？

//html`<divclass="${kind}">${name}</div>`
//=>'<divclass="game">D&amp;D</div>'
//strings = [divclass=",",>,</div>]
//values = [${kind},${name}]

export function template(strings, ...values) {//strings:文字列、values:文字列

  let result = '';//文字列＋テンプレート文字列を文字列に変換した結果を格納

  //stringsをfor文で探索
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];//文字列部分をそのまま追加

    if (i < values.length) {//テンプレート文字列がある場合、
      const value = values[i];//配列にテンプレート文字列を格納

      //テンプレート文字列を変換
      if (value === ''){
        result += "";
      } /* else if (value === null) {//テンプレート文字列がnullの場合 //nullとundefinedの場合は、そのままtypeofの結果を返すように変更
        result += 'null';
      } else if (value === undefined) {//undefinedの場合
        result += 'undefined';
      }*/ else {//string等、型がある場合
        //typeofの結果をresultに格納
        result += typeof value;
      }
    }
  }

  return result
}

//test
console.log(template``); 
