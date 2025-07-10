//test実施
import { parseJson } from "./index.js"; 

const string = `{"column": 10, "row": 20}`
const string2 = { success: true, data: { column: 10, row: 20 } }

const string3 = `{Javascript test}`
const string4 = { success: false, error: "Expected property name or '}' in JSON at position 1 (line 1 column 2)" }


//テスト実施
describe("math", () => {
  //関連するテストをmathとしてまとめたメソッド
  describe("parseJson", () => {
    it("parseJson", () => {
      expect(parseJson(string)).toStrictEqual(string2);
    });
    it("parseJson", () => {
      expect(parseJson(string3)).toStrictEqual(string4);
    });
  });
});

//testに追加、nestの場合、からのオブジェクトの場合
