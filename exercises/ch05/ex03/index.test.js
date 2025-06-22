//test実施
import { Escape } from "./index.js"; 

//index.jsからテスト関数をインポート
//const Escape = require("./index.js/Escape");
const test = new Eacape();
const string = `Hello\0World\b.this\tis\nescapetest\vfor\fif-else\rmethod\"and\’switch`;
const string2=`HelloWorl.this  is
escapetest
for
method"and'switch\method`;

//テスト実施
describe("math", () => {
  //関連するテストをmathとしてまとめたメソッド
  describe("escape_if", () => {
    it("escape_if test", () => {
      expect(test.escape_if(string)).toStrictEqual(string2);
    });
  });
});
