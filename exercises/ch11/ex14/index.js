//Intl.Collator
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator
//Intl.Collator.prototype.compare()
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
//参考：https://qiita.com/eiji-noguchi/items/af1e125932e9be19d069

export function sortJapanese(input){
    //。Intl.Collatorオブジェクトを日本語で作成
    const collator = new Intl.Collator("ja");
    return input.sort(collator.compare);
}

//参考：https://qiita.com/shisama/items/cb0abb5435fac82e87d6
//Intl.DateTimeFormat
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

export function toJapaneseDateString(input){
    const options = { era: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    const jaDate = new Intl.DateTimeFormat('ja-JP-u-ca-japanese',options).format(input);
    //スラッシュを正規表現で年、月、日に変換
    return jaDate.replace(/(\d+)\/(\d+)\/(\d+)/, '$1年$2月$3日');
}

const date1 = new Date("2020-01-02T13:14:15Z");
const date2 = new Date("2015-02-03T15:16:49Z");
const date3 = new Date("1989-01-03T15:16:49Z");
const date4 = new Date("0001-01-03T15:16:49Z");

console.log(toJapaneseDateString(date1));
console.log(toJapaneseDateString(date2));
console.log(toJapaneseDateString(date3));
console.log(toJapaneseDateString(date4));

