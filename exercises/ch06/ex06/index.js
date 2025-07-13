//6.6を参照
//6.10.4　スプレッド演算子を活用
//Object.getOwnPropertyNames()
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
//Object.getOwnPropertySymbols()
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols

function returnPropertyName(obj){
//オブジェクトが独自プロパティの場合の処理。
		const own = [...Object.getOwnPropertyNames(obj)];//プロパティ名が文字列であれば、列挙不可なポロパティも配列に含める
		const sym = [...Object.getOwnPropertySymbols(obj)];//プロパティ名がSymbolの独自プロパティの配列を返す。列挙不可の者も含む。

//オブジェクトが継承プロパティの場合
	const inheritance = [];
	for (let a in obj){
		console.log(obj,a,own.includes(a));
		if (!own.includes(a)){//7.8.6.2 includes()メソッド参照。継承プロパティのプロパティ名は、symbolのものは必須としない。
			inheritance.push(a);
			console.log("flg1");
		}
	};

	return ["独自プロパティ(Symbol以外):",...own,"独自プロパティ(Symbol):",...sym,"継承プロパティ:",...inheritance];
}



let p = Object.defineProperties(
  {},
  {
    10: { value: 10, writable: true, enumerable: true, configurable: true },
    20: { value: 20, writable: true, enumerable: false, configurable: true },
    xx: { value: 30, writable: true, enumerable: true, configurable: true },
    yy: { value: 40, writable: true, enumerable: false, configurable: true },
  },
);

//プロパティ変更前の値の確認
console.log("変更前のpの確認:", p["10"], p["20"], p.xx, p.yy);

//pをプロトタイプとして持つオブジェクトを作成する。
//数値名および文字列名のプロパティそれぞれについて、オブジェクトはプロトタイプと同名および同名でないプロパティを持つ

let q = Object.create(p);
console.log("pを継承したqを確認：", q["10"], q["20"], q.xx, q.yy);

//オブジェクトqにプロトタイプと同名、同名でないプロパティを追加する。

const sym00 = Symbol("abc");
console.log(sym00);
q[sym00] = 7;

const sym00Test = Object.getOwnPropertySymbols(q);
console.log(sym00Test);

q = Object.defineProperties(
  q,
  {
    1: { value: 1, writable: true, enumerable: false, configurable: true }, //同名
    2: { value: 2, writable: true, enumerable: true, configurable: true }, //同名
    0: { value: 5, writable: true, enumerable: true, configurable: true }, //同名でない
    [sym00]: { value: 7, writable: true, enumerable: true, configurable: true }, //同名でない
    x: { value: 3, writable: true, enumerable: false, configurable: true }, //同名
    y: { value: 4, writable: true, enumerable: true, configurable: true }, //同名
    a: { value: 6, writable: true, enumerable: true, configurable: true }, //同名でない
  },
);

console.log(
  "数値名および文字列名のオブジェクトについて、それぞれ同名、同名でないプロパティをqに追加:",
  q["10"],
  q["20"],
  q.xx,
  q.yy,
  q["1"],
  q["2"],
  q["0"],
  q[sym00],
  q.x,
  q.y,
  q.a,
);

console.log("関数にオブジェクトを渡し、結果を確認");
console.log(returnPropertyName(q));
