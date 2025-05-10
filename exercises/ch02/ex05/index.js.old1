//ヒストグラム作成のコードを書き写す


class DefaultMap extends Map {//DefaultMapクラスを宣言。Mapオブジェクトを継承して、DefaultMapを宣言。Mapオブジェクトはキーと値の組み合わせを保持する。
	constructor(defaultValue) {
		super();//子クラスのインスタンスから親クラスのインスタンスのメンバへアクセスし、値を参照。
		this.defaultValue = defaultValue;
	}

	get(key) {//キーがマップ中に存在しないとき、親クラスの値を返す。
		if (this.has(key)) {
			return super.get(key);//親クラスMapからgetメソッドを呼び出し。
		}
		else {
			return this.defaultValue;//存在しないときデフォルト値を返す。
		}
	}
}

class Histogram {//文字頻度ヒストグラムを計算し、表示
	constructor() {
		this.letterCounts = new DefaultMap(0);//インスタンスの生成。DefaultMapクラスへ0を引き渡す。文字数を記録する。
		this.totalLetters = 0;//すべての文字列を表す変数。
	}

	add(text) {//テキストの追加を行うメソッド
		text = text.replace(/\s/g, "").toUpperCase();//テキスト変数に[\s]任意のホワイトスペースまたは開業、[/g]にて、すべてのホワイトスペースまたは改行を指定する。replaceは文字列の置き換えメソッド。toUpperCaseは呼び出す文字列の値を大文字に変換。

		for(let character of text) {//繰り返し処理。textの文字列の数まで処理を繰り返す。
			let count = this.letterCounts.get(character);//文字数を表す？count変数へcharacter変数に格納された値を入れる。
			//console.log(count);
			this.letterCounts.set(character, count+1);//文字と文字数の値を格納
			this.totalLetters++;//トータル文字数をインクリメント。
		}
	}

	toString() {//ヒストグラムを文字列に変換して、ＡＳＣＩＩグラフィックとして表示
		//マップを、[キー、文字列]配列へ変換
		let entries = [...this.letterCounts];//letterCountsのすべての要素を変数entriesへ格納

		entries.sort((a,b) => {//文字数順にソート。文字数が同じ場合は、アルファベット順でソート
			if (a[1] === b[1]) {//要素a[1]とb[1]が同値の場合
				return a[0] < b[0] ? -1 : 1;//a[0]<b[0]=trueの場合-1,falseの場合1を返す
			} else {//その他の場合
				return b[1] - a[1];//b[1]-a[1]の値を返す。
			}
		});

		for(let entry of entries) {//文字数をパーセント表記
			entry[1] = entry[1] / this.totalLetters*100;//entry[1]を100分立表記
		}

		entries = entries.filter(entry => entry[1] >= 1);//1%未満は非表示

		let lines = entries.map(//各項目を1行のテキストに変換
			([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
		);

		return lines.join("\n");//各行を改行文字で区切って結合し、結合した文字列を返す。
	}
}

async function histogramFromStdin() {//ヒストグラムオブジェクトを生成。標準入力からテキストを非同期に読み出し、読みだしたテキストをヒストグラムに追加。最後まで読みだしたらヒストグラムを返す。asyncは非同期関数
	process.stdin.setEncoding("utf-8");//エンコードをutf-8で実施
	let histogram = new Histogram();//ヒストグラムオブジェクトの生成
	for await (let chunk of process.stdin) {
		histogram.add(chunk);
	}
	return histogram;
}

//標準入力からヒストグラムオブジェクトを生成し、ヒストグラムを表示
histogramFromStdin().then(histogram => { console.log(histogram.toString());
});
