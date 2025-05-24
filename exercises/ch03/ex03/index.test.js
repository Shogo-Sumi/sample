//test実施
import { diff } from "./index.js";

//./test.jsからabsモジュールをインポート

//test abs
describe("math", () => {
	//関連するテストをmathとしてまとめたメソッド
  describe("diff", () => {//diff関数のテストを実行するメソッド
    it("float test1", () => {//diff関数へのテストを実施
      expect(diff(0.3 - 0.2,0.1)).toBe(true);//変換結果が同じか確認
    });
  });
  describe("diff", () => {//diff関数のテストを実行するメソッド
    it("float test1", () => {//diff関数へのテストを実施
      expect(diff(0.2 - 0.1,0.1)).toBe(true);//変換結果が同じか確認
    });
  });
    describe("diff", () => {//diff関数のテストを実行するメソッド
    it("float test1", () => {//diff関数へのテストを実施
      expect(diff(999999999999.000001 - 999999999999,0.000001)).toBe(true);//変換結果が同じか確認
    });
  });



});

