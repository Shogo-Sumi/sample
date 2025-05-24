//test実施
import { lfToCrLf,crLfToLf } from "./conversion.js";

//./test.jsからlfToCrLf,crLfToLfモジュールをインポート

//test lfToCrLf,crLfToLf
describe("math", () => {
	//関連するテストをmathとしてまとめたメソッド
  describe("conversion", () => {//lfToCrLf関数のテストを実行するメソッド
    it("lfToCrLF test1", () => {//lfToCrLf関数へのテストを実施
      expect(lfToCrLf("two\nlines")).toBe("two\r\nlines");//変換結果が同じか確認
    });
  });
});
describe("math", () => {
        //関連するテストをmathとしてまとめたメソッド
  describe("conversion", () => {//crLfToLf関数のテストを実行するメソッド
    it("lfToCrLF test1", () => {//lfToCrLf関数へのテストを実施
      expect(crLfToLf("two\r\nlines")).toBe("two\nlines");//変換結果が同じか確認
    });
  });
});

