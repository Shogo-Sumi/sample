//import { abs, sum, factorial } from "./index.js";
import { abs } from "./index.js";

//./index.jsからabs,sum,factorialモジュールをインポート

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
	//関連するテストをmathとしてまとめたメソッド
  describe("abs", () => {//abs関数のテストを実行するメソッド
    it("returns same value when positive value given", () => {//testコードの説明。正の値が入力された場合、同じ値を返す
      expect(abs(42)).toBe(42);//テスト結果の確認。abs関数へ42が入力された場合、42が返るか
    });

    it("returns negated value when negative value given", () => {//testコードの説明。負の値が入力された場合、反転した値を返す
      expect(abs(-42)).toBe(42);//テスト結果の確認。abs関数へ-42が入力された場合、42が返るか
    });

    it("returns zero value when zero given", () => {//testコードの説明。０が入力された場合、0が返るか。
      expect(abs(0)).toBe(0);//テスト結果の確認。abs関数へ０が入力された場合、０が返るか。
    });
  });

  // 以下に sum, factorial のテストを記載せよ
});
