//test実施
import { code } from "./code.js";

//./test.jsからabsモジュールをインポート

//test abs
describe("math", () => {
	//関連するテストをmathとしてまとめたメソッド
  describe("code", () => {//code関数のテストを実行するメソッド
    it("code test1", () => {//code関数へのテストを実施
      expect(code("💯","\uD83D\uDCAF","\u{0001F4AF}")).toBe(true,true);//変換結果が同じか確認
    });
  });
});
