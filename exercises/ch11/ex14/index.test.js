import { sortJapanese,toJapaneseDateString } from "./index.js";

const array1 = ["う", "い", "あ", "お","え"];
const array2 = ["と", "て", "っ", "つ","た","よ","ゅ","や","ゆ"];
const array3 = ["ほ", "ぽ", "ぼ", "ひ","へ","は","ふ"];

const date1 = new Date("2020-01-02T13:14:15Z");
const date2 = new Date("2015-02-03T15:16:49Z");
const date3 = new Date("1989-01-03T15:16:49Z");
const date4 = new Date("0300-01-03T15:16:49Z");


describe("Test function", () => {
  it("テストが正しく動作すること", () => {
    expect(sortJapanese(array1)).toStrictEqual([ 'あ', 'い', 'う', 'え', 'お' ]);
    expect(sortJapanese(array2)).toStrictEqual(['た', 'っ', 'つ','て', 'と', 'や','ゅ', 'ゆ', 'よ']);
    expect(sortJapanese(array3)).toStrictEqual(['は', 'ひ','ふ', 'へ','ほ', 'ぼ','ぽ']);
    expect(toJapaneseDateString(date1)).toStrictEqual("令和2年1月2日");
    expect(toJapaneseDateString(date2)).toStrictEqual("平成27年2月4日");
    expect(toJapaneseDateString(date3)).toStrictEqual("昭和64年1月4日");
    expect(toJapaneseDateString(date4)).toStrictEqual("大化-344年1月4日");//大化は史実上正しいのか？300年の西暦に対して大化334年？
  });
});
